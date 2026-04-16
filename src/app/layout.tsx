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
  title: "Interiors of Idaho",
  description:
    "We will floor you! Premium interior remodeling in Idaho",
  openGraph: {
    title: "Interiors of Idaho",
    description:
      "We will floor you! Premium interior remodeling in Idaho.",
    url: "https://www.interiorsofcalifornia.com",
    siteName: "Interiors of Idaho",
    images: ["https://www.interiorsofcalifornia.com/og.jpg"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interiors of Idaho",
    description:
      "We will floor you! Premium interior remodeling in Idaho.",
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
