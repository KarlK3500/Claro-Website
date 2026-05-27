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
  title: "Claro Balance | Therapie, Coaching & Mentale Begeleiding in Hasselt",
  
  description:
    "Claro Balance biedt therapie, coaching en mentale begeleiding in Hasselt en Limburg. Persoonlijke groei, relatiecoaching, stress, balans, levensvragen en retraites in Spanje Malaga.",

  keywords: [
    "therapeut Hasselt",
    "coach Hasselt",
    "coaching Limburg",
    "therapie Hasselt",
    "psycholoog Hasselt",
    "mentale begeleiding",
    "persoonlijke groei",
    "relatie coaching",
    "stress begeleiding",
    "life coach Limburg",
    "retreat Spanje",
    "retraite Malaga",
    "coaching Malaga",
    "burn-out begeleiding",
    "gezinsbegeleiding",
    "mindset coaching",
    "emotionele begeleiding",
    "zelfontwikkeling",
    "Claro Balance"
  ],

  openGraph: {
    title: "Claro Balance",
    description:
      "Therapie, coaching en mentale begeleiding in Hasselt & Limburg.",
    url: "https://clarobalance.com",
    siteName: "Claro Balance",
    locale: "nl_BE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
