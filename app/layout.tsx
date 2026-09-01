import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {
  siteDescription,
  siteName,
  siteTagline,
  siteUrl,
} from "./site-config";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["latin", "thai"],
});

const googleAnalyticsId = "G-5VEXG4WGZK";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — ${siteTagline}`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "ChAMP Engineering",
    "ChAMP Eng",
    "ChAMP",
    "champengcu",
    "Mentee",
    "Mentor",
    "วิศวะ จุฬา",
    "วิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
    "โครงการแนะแนว",
    "สมัคร ChAMP",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "/",
    siteName,
    title: `${siteName} — ${siteTagline}`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — ${siteTagline}`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">): React.JSX.Element {
  return (
    <html className={`${notoSansThai.variable} h-full`} lang="th">
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${googleAnalyticsId}');`}
        </Script>
      </body>
    </html>
  );
}
