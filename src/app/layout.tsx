import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/providers/MotionProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PayK.AI - 跨链支付解决方案",
  description: "PayK.AI为您提供安全、快速、便捷的跨链支付服务。像使用微信支付宝一样轻松进行数字货币支付,支持多链交易、极速确认、实时到账。",
  keywords: "跨链支付,数字货币支付,区块链支付,加密货币,数字钱包,快速支付,安全支付",
  authors: [{ name: "PayK.AI Team" }],
  openGraph: {
    title: "PayK.AI - 跨链支付解决方案",
    description: "像使用微信支付宝一样轻松进行数字货币支付,支持多链交易、极速确认、实时到账",
    url: "https://payk.ai",
    siteName: "PayK.AI",
    images: [],
    locale: "zh_CN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PayK.AI - 跨链支付解决方案",
    description: "像使用微信支付宝一样轻松进行数字货币支付",
    images: []
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="canonical" href="https://payk.ai" />
        <link rel="alternate" hrefLang="zh" href="https://payk.ai" />
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "PayK.AI",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "All",
              "description": "PayK.AI为您提供安全、快速、便捷的跨链支付服务。像使用微信支付宝一样轻松进行数字货币支付。",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1000"
              },
              "author": {
                "@type": "Organization",
                "name": "PayK.AI Team",
                "url": "https://payk.ai"
              },
              "potentialAction": {
                "@type": "UseAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://payk.ai",
                  "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                  ]
                }
              }
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
