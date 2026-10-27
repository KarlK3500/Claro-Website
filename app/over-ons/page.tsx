
import Link from "next/link";

export const metadata = {
  title: "Over Claro | Karl Ketelslagers en Ils Camps",
  description:
    "Leer Claro kennen: Karl Ketelslagers en Ils Camps begeleiden mensen met aandacht, diepgang en respect voor ieders tempo.",
  alternates: {
    canonical: "https://www.clarobalance.com/over-ons",
  },
};

export default function OverOnsPage() {
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
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <Link
          href="/"
          style={{ color: "inherit", textDecoration: "none", fontSize: 14 }}
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
            marginBottom: 32,
          }}
        >
          Wie zijn wij
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.8 }}>
          Claro is ontstaan vanuit een gedeelde overtuiging: dat echte
          begeleiding vraagt om betrokkenheid, helderheid en respect.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.8 }}>
          Karl Ketelslagers en Ils Camps begeleiden elk vanuit hun eigen
          expertise. We werken zelfstandig, maar blijven met elkaar in dialoog.
          Door ervaringen en perspectieven te delen, kunnen we blijven
          reflecteren, elkaar uitdagen en onze aanpak verdiepen.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.8 }}>
          Ook organiseren we samen momenten en retraites waarin ruimte ontstaat
          om stil te staan, afstand te nemen van de dagelijkse drukte en opnieuw
          richting te vinden.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.8 }}>
          Bij Claro staat niet een standaardoplossing centraal, maar de mens
          achter de vraag. We creëren ruimte om te onderzoeken wat speelt, om
          woorden te geven aan wat vastzit en om bewust te kijken naar wat
          verder kan.
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(30px, 4vw, 44px)",
            fontWeight: 400,
            marginTop: 56,
            marginBottom: 20,
          }}
        >
          Onze begeleiding
        </h2>

        <p style={{ fontSize: 18, lineHeight: 1.8 }}>
          We begeleiden mensen die zoeken naar richting in hun relatie, hun
          gezin, hun werk of in zichzelf. Individueel of in groep, met aandacht
          voor de concrete vraag en het tempo van de persoon of de mensen die
          we begeleiden.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.8 }}>
          Ontdek ook onze pagina’s over{" "}
          <Link href="/coaching-hasselt" style={{ color: "inherit" }}>
            coaching in Hasselt
          </Link>
          ,{" "}
          <Link
            href="/burn-out-begeleiding-limburg"
            style={{ color: "inherit" }}
          >
            burn-outbegeleiding in Limburg
          </Link>
          ,{" "}
          <Link
            href="/relatiebegeleiding-hasselt"
            style={{ color: "inherit" }}
          >
            relatiebegeleiding
          </Link>{" "}
          en{" "}
          <Link
            href="/ouder-en-gezinsbegeleiding-hasselt"
            style={{ color: "inherit" }}
          >
            ouder- en gezinsbegeleiding
          </Link>
          .
        </p>

        <p style={{ marginTop: 40 }}>
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
            Neem contact op →
          </Link>
        </p>
      </div>
    </main>
  );
}
