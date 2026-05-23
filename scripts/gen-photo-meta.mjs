#!/usr/bin/env node
/**
 * Reads JPEG headers from public/photos/ and writes data/photoMeta.json.
 * Run once after placing photos: node scripts/gen-photo-meta.mjs
 * No external dependencies — uses only Node.js built-ins.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

/**
 * Parse a JPEG file buffer to extract width and height via the SOF segment.
 * Returns null if the file is not a valid JPEG or dimensions can't be found.
 */
function readJpegDims(filepath) {
  let buf
  try { buf = readFileSync(filepath) } catch { return null }

  // JPEG magic bytes
  if (buf.length < 4 || buf[0] !== 0xFF || buf[1] !== 0xD8) return null

  let i = 2
  while (i < buf.length - 1) {
    // All JPEG markers start with 0xFF
    if (buf[i] !== 0xFF) break

    // Skip 0xFF padding (allowed before a marker byte)
    while (i < buf.length && buf[i] === 0xFF) i++
    const marker = buf[i++]

    // EOI — end of image
    if (marker === 0xD9) break

    // RST0-RST7, SOI, TEM — standalone markers with no payload
    if (marker === 0xD8 || marker === 0x01 || (marker >= 0xD0 && marker <= 0xD7)) continue

    if (i + 2 > buf.length) break
    // Segment length is big-endian uint16 and INCLUDES these 2 length bytes
    const segLen = (buf[i] << 8) | buf[i + 1]

    // SOF markers (Start Of Frame) carry the image dimensions:
    //   C0-C3, C5-C7, C9-CB, CD-CF
    // Exclude C4 (DHT), C8 (JPG ext), CC (DAC) — those are in range but not SOF
    const isSOF =
      marker >= 0xC0 && marker <= 0xCF &&
      marker !== 0xC4 && marker !== 0xC8 && marker !== 0xCC

    if (isSOF) {
      // SOF payload layout (after the 2-byte length field):
      //   [0] precision (1 byte)
      //   [1-2] height (uint16 big-endian)
      //   [3-4] width  (uint16 big-endian)
      if (i + 6 < buf.length) {
        const h = (buf[i + 3] << 8) | buf[i + 4]
        const w = (buf[i + 5] << 8) | buf[i + 6]
        if (w > 0 && h > 0) return { w, h }
      }
    }

    if (i + segLen > buf.length) break
    i += segLen
  }
  return null
}

const slugs = ['dream', 'sea', 'oldcanton']
const meta = {}

for (const slug of slugs) {
  const dir = join(rootDir, 'public', 'photos', slug)
  let files
  try {
    files = readdirSync(dir)
      .filter(f => /\.(jpg|jpeg)$/i.test(f))
      .sort()
  } catch {
    process.stderr.write(`  skip ${slug}: directory not found\n`)
    continue
  }

  meta[slug] = {}
  let found = 0

  for (const file of files) {
    // Match the numeric part: "dream-01.jpg" → captures "1", "dream-17.jpg" → "17"
    const m = file.match(/\D0*(\d+)\.jpe?g$/i)
    if (!m) continue
    const num = m[1]

    const dims = readJpegDims(join(dir, file))
    if (dims) {
      meta[slug][num] = dims
      const orient = dims.w > dims.h ? 'L' : dims.w < dims.h ? 'P' : 'S'
      process.stdout.write(`  ${slug}/${file}  ${dims.w}×${dims.h}  (${orient})\n`)
      found++
    } else {
      process.stderr.write(`  ${slug}/${file}: could not read JPEG dimensions\n`)
    }
  }
  process.stdout.write(`  → ${slug}: ${found} photos indexed\n\n`)
}

const outPath = join(rootDir, 'data', 'photoMeta.json')
writeFileSync(outPath, JSON.stringify(meta, null, 2) + '\n')
process.stdout.write(`✓  wrote ${outPath}\n`)
