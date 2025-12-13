import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tunevoo | Premium Tunisian Olive Oil Brands",
  description:
    "Discover Qalaa and Laya — two premium Tunisian olive oil brands under Tunevoo. Crafted for elegance, made for taste.",
  keywords: "olive oil, premium, Tunisia, Qalaa, Laya, luxury, gourmet",
  authors: [{ name: "Tunevoo" }],
  creator: "Tunevoo",
  publisher: "Tunevoo",
  openGraph: {
    title: "Tunevoo | Premium Tunisian Olive Oil Brands",
    description:
      "Discover Qalaa and Laya — two premium Tunisian olive oil brands under Tunevoo. Crafted for elegance, made for taste.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tunevoo | Premium Tunisian Olive Oil Brands",
    description:
      "Discover Qalaa and Laya — two premium Tunisian olive oil brands under Tunevoo. Crafted for elegance, made for taste.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
