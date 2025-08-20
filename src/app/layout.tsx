import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Süreyya Alper - Geleneksel Türk Sanatları Ustası | Müzehhiplik",
  description: "Geleneksel müzehhiplik sanatını modern yorumlarla harmanlayan usta sanatçı Süreyya Alper'in eserlerini, biyografisini ve çalışmalarını keşfedin. Hat sanatı ve tezhip konularında uzman.",
  keywords: ["müzehhiplik", "tezhip", "hat sanatı", "geleneksel türk sanatları", "altın varak", "İslami sanat", "el yazması", "süsleme sanatı"],
  authors: [{ name: "Süreyya Alper" }],
  creator: "Süreyya Alper",
  publisher: "Süreyya Alper",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://sureyyaalper.com",
    title: "Süreyya Alper - Geleneksel Türk Sanatları Ustası",
    description: "Müzehhiplik sanatının inceliklerini modern yaklaşımlarla buluşturan usta sanatçı",
    siteName: "Süreyya Alper",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Süreyya Alper - Müzehhiplik Sanatçısı"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Süreyya Alper - Müzehhiplik Sanatçısı",
    description: "Geleneksel müzehhiplik sanatını çağdaş yorumlarla harmanlayan usta sanatçı",
    images: ["/logo.png"]
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        rel: "icon", 
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
