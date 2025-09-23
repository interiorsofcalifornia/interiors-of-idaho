import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Interiors of California",
  description: "We will floor you! Premium interior remodeling in Northern California.",
  openGraph: {
    title: "Interiors of California",
    description: "We will floor you! Premium interior remodeling in Northern California.",
    url: "https://www.interiorsofcalifornia.com",
    siteName: "Interiors of California",
    images: [
      {
        url: "https://www.interiorsofcalifornia.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Interiors of California",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interiors of California",
    description: "We will floor you! Premium interior remodeling in Northern California.",
    images: ["https://www.interiorsofcalifornia.com/og.jpg"],
  },
};

