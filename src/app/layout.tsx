import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/providers/MotionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PayK.AI - 跨链支付解决方案",
  description: "为您提供安全、快速、便捷的跨链支付服务",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
