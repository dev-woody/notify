import type { Metadata } from "next";
import "./globals.css";

const geistSans = {
  variable: "--font-geist-sans",
  subsets: ["Pretendard"],
};

const geistMono = {
  variable: "--font-geist-mono",
  subsets: ["Pretendard"],
};

export const metadata: Metadata = {
  title: "노티파이 | Notify",
  description: "대한민국 1등 리뷰어 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen max-w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
