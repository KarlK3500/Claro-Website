
import Link from "next/link";

export const metadata = {
  title: "Contact | Claro Balance",
  description:
    "Neem contact op met Claro Balance voor coaching en persoonlijke begeleiding in Hasselt en Limburg.",
  alternates: {
    canonical: "https://www.clarobalance.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f1ea",
        color: "#28251f",
        padding: "120px 8% 80px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Link
          href="/"
          style={{
            color: "inherit",
            textDecoration: "none",
            fontSize: 14,
          }}
        >
          ← Terug naar Claro
        </Link>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(42px, 7vw, 76px)",
            fontWeight: 400,
            lineHeight: 1.05,
            marginTop: 64,
            marginBottom: 28,
          }}
        >
          Contact
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.8 }}>
          Wil je kennismaken met Claro of aftoetsen welke begeleiding bij jouw
          vraag past? We luisteren graag naar je verhaal.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.8 }}>
          Je kunt ons bereiken via{" "}
          <a href="mailto:info@clarobalance.com" style={{ color: "inherit" }}>
            info@clarobalance.com
          </a>
          .
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.8 }}>
          Je kunt ook het contactformulier op onze homepage gebruiken.
        </p>

        <p style={{ marginTop: 36 }}>
          <Link
            href="/#contact"
            style={{
              display: "inline-block",
              border: "1px solid currentColor",
              borderRadius: 999,
              padding: "14px 22px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Naar het contactformulier →
          </Link>
        </p>

        <p style={{ marginTop: 64, fontSize: 14 }}>
          <Link href="/privacy" style={{ color: "inherit" }}>
            Privacyverklaring
          </Link>
        </p>
      </div>
    </main>
  );
}
