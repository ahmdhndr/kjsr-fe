import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site-config";

import "./globals.css";
import Loader from "./loader";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  keywords: [
    "Yayasan Jantung Indonesia",
    "Klub Jantung Sehat",
    "Klub Jantung Sehat Remaja",
    "Klub Jantung Remaja",
    "YJI",
    "KJS",
    "KJSR",
    "KJR",
    "SEHAT",
    "yayasan jantung indonesia",
    "klub jantung sehat",
    "klub jantung sehat remaja",
    "klub rantung remaja",
    "sehat",
    "jantung sehat",
    "yji",
    "kjs",
    "kjsr",
    "kjr",
    "sehat",
    "remaja",
  ],
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakartaSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loader />}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <section className="container relative mb-4 flex-1 font-sans !text-primary">
              <main className="mx-auto w-full max-w-[1200px] selection:bg-primary selection:text-background">
                {children}
              </main>
            </section>
            <Footer />
          </div>
        </Suspense>
      </body>
    </html>
  );
}
