import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://personal-site-boke-wangzhan.vercel.app'),
  title: {
    default: '邓梓晟 | 作品集',
    template: '%s | 邓梓晟',
  },
  description: '建筑设计背景，专注 AI 产品与全栈开发。作品、技术写作与摄影。',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '邓梓晟 作品集',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
