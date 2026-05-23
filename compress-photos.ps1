$source = "C:\Users\user\Desktop\鐓х墖"
$target = "E:\personal-site\public\photos"

$mapping = @{
    "姊? = "dream"
    "闈掑矝" = "sea"
    "骞垮窞闂查€涙棩璁? = "oldcanton"
}

if (-not (Test-Path $target)) {
    New-Item -ItemType Directory -Path $target -Force | Out-Null
}

foreach ($folder in $mapping.Keys) {
    $sourcePath = Join-Path $source $folder
    $slug = $mapping[$folder]
    $targetPath = Join-Path $target $slug

    if (-not (Test-Path $sourcePath)) {
        Write-Host "Skip: $sourcePath does not exist" -ForegroundColor Yellow
        continue
    }

    if (-not (Test-Path $targetPath)) {
        New-Item -ItemType Directory -Path $targetPath -Force | Out-Null
    }

    $photos = Get-ChildItem -Path $sourcePath -Include *.jpg,*.jpeg,*.JPG,*.JPEG,*.png,*.PNG -File |
              Sort-Object LastWriteTime

    Write-Host "`nProcessing: $folder ($($photos.Count) photos)" -ForegroundColor Cyan

    $index = 1
    foreach ($photo in $photos) {
        $newName = "$slug-{0:D2}.jpg" -f $index
        $newPath = Join-Path $targetPath $newName

        magick $photo.FullName -resize "1920x1920>" -quality 82 -strip $newPath

        $sizeKB = [math]::Round((Get-Item $newPath).Length / 1KB, 1)
        Write-Host "  $newName -> $sizeKB KB"
        $index++
    }
}

Write-Host "`nDone. Photos at: $target" -ForegroundColor Green