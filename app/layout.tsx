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
  title: "Claro Balance | Therapie, Coaching & Persoonlijke Groei in Hasselt en Limburg",
  
  description:
  "Claro Balance begeleidt mensen in Hasselt en Limburg bij persoonlijke groei, coaching, therapie, relatievraagstukken, stress, burn-out, levensvragen en mentale balans. Daarnaast organiseren wij retraites en begeleidingstrajecten in Málaga, Spanje.",

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
    "Claro Balance",
    "persoonlijke ontwikkeling",
"relatiebegeleiding",
"relatietherapie Limburg",
"levenscoach Hasselt",
"coach Limburg",
"therapeut Limburg",
"persoonlijke begeleiding",
"emotioneel welzijn",
"burn-out coach",
"retreat Malaga",
"retreat Spain",
"retraite Andalusië",
"persoonlijke ontwikkeling Spanje"
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
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
