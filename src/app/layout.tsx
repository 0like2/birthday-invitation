import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import { getAbsoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name}에 초대합니다`,
  description: siteConfig.description,
  applicationName: "Three Princes Birthday Party",
  keywords: [
    "생일파티",
    "모바일 초대장",
    "세 왕자님",
    "을지로 파티",
    "카카오톡 초대장",
  ],
  alternates: {
    canonical: getAbsoluteUrl(),
  },
  openGraph: {
    title: `${siteConfig.name}에 초대합니다`,
    description: siteConfig.description,
    type: "website",
    locale: "ko_KR",
    siteName: "Three Princes Birthday Party",
    url: getAbsoluteUrl(),
    images: [
      {
        url: getAbsoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "세 왕자님의 생일파티 카카오 공유 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}에 초대합니다`,
    description: siteConfig.description,
    images: [getAbsoluteUrl("/opengraph-image")],
  },
  other: {
    "theme-color": "#ffefe1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} ${notoSerifKr.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
