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

export const metadata: Metadata = {
  title: "Interiors of California",
  description:
    "We will floor you! Premium interior remodeling in Northern California.",
  openGraph: {
    title: "Interiors of California",
    description:
      "We will floor you! Premium interior remodeling in Northern California.",
    url: "https://www.interiorsofcalifornia.com",
    siteName: "Interiors of California",
    images: ["https://www.interiorsofcalifornia.com/og.jpg"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interiors of California",
    description:
      "We will floor you! Premium interior remodeling in Northern California.",
    images: ["https://www.interiorsofcalifornia.com/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
