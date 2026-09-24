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
  title: "Claro Balance | Coaching & Persoonlijke Begeleiding in Hasselt en Limburg",
  
  description:
  "Claro Balance biedt coaching en persoonlijke begeleiding in Hasselt en Limburg bij persoonlijke groei, levensvragen, stress, burn-out, relatievraagstukken, gezin en belangrijke keuzes. Daarnaast organiseren wij retraites en begeleidingstrajecten in Málaga, Spanje.",

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
  "Coaching en persoonlijke begeleiding in Hasselt en Limburg voor persoonlijke groei, levensvragen, stress, relaties en belangrijke keuzes.",
    url: "https://www.clarobalance.com",
    siteName: "Claro Balance",
    locale: "nl_BE",
    type: "website",
  },
};
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.clarobalance.com/#organization",
  "name": "Claro Balance",
  "url": "https://www.clarobalance.com",
  "description":
    "Claro Balance biedt coaching en persoonlijke begeleiding in Hasselt en Limburg bij persoonlijke groei, levensvragen, stress, burn-out, relatievraagstukken, gezin en belangrijke keuzes.",
  "email": "info@clarobalance.com",
  "telephone": "+32 495 22 49 24",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Weggevoerdenstraat 39",
    "postalCode": "3500",
    "addressLocality": "Hasselt",
    "addressCountry": "BE"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Hasselt"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Limburg"
    }
  ]
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
<body className="min-h-full flex flex-col">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationSchema),
    }}
  />
  {children}
</body>
</html>
  );
}
