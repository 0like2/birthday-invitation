import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
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
  title: "세 왕자님의 생일파티에 초대합니다",
  description:
    "이상욱, 고형빈, 이영락의 특별한 밤. 2026년 3월 20일 오후 8시, 을지로에서 만나요.",
  applicationName: "Three Princes Birthday Party",
  keywords: [
    "생일파티",
    "모바일 초대장",
    "세 왕자님",
    "을지로 파티",
    "카카오톡 초대장",
  ],
  openGraph: {
    title: "세 왕자님의 생일파티에 초대합니다",
    description:
      "이상욱, 고형빈, 이영락의 특별한 밤. 2026년 3월 20일 오후 8시, 을지로에서 만나요.",
    type: "website",
    locale: "ko_KR",
    siteName: "Three Princes Birthday Party",
  },
  twitter: {
    card: "summary_large_image",
    title: "세 왕자님의 생일파티에 초대합니다",
    description:
      "이상욱, 고형빈, 이영락의 특별한 밤. 2026년 3월 20일 오후 8시, 을지로에서 만나요.",
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
