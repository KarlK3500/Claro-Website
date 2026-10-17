import { NextRequest, NextResponse } from "next/server";

const knownPages = new Set([
  "/",
  "/coaching-hasselt",
  "/psycholoog-hasselt",
  "/burn-out-begeleiding-limburg",
  "/relatiebegeleiding-hasselt",
  "/ouder-en-gezinsbegeleiding-hasselt",
]);

export function proxy(request: NextRequest) {
  const pathname =
    request.nextUrl.pathname.replace(/\/+$/, "") || "/";

  const acceptsMarkdown = (
    request.headers.get("accept") ?? ""
  )
    .toLowerCase()
    .includes("text/markdown");

  // Geef AI-agents de homepage als Markdown.
  if (pathname === "/" && acceptsMarkdown) {
    return new Response(
      [
        "# Claro Balance",
        "",
        "## Waar richting helder wordt",
        "",
        "Claro Balance biedt coaching en persoonlijke begeleiding in Hasselt en Limburg.",
        "We begeleiden mensen bij persoonlijke groei, levensvragen, stress, burn-out, relatievraagstukken, gezinsvragen en belangrijke keuzes.",
        "",
        "## Onze begeleiding",
        "",
        "- [Coaching in Hasselt](https://www.clarobalance.com/coaching-hasselt)",
        "- [Psycholoog of coach in Hasselt](https://www.clarobalance.com/psycholoog-hasselt)",
        "- [Burn-out begeleiding in Limburg](https://www.clarobalance.com/burn-out-begeleiding-limburg)",
        "- [Relatiebegeleiding in Hasselt](https://www.clarobalance.com/relatiebegeleiding-hasselt)",
        "- [Ouder- en gezinsbegeleiding in Hasselt](https://www.clarobalance.com/ouder-en-gezinsbegeleiding-hasselt)",
        "",
        "## Meer informatie",
        "",
        "- [Homepage](https://www.clarobalance.com/)",
        "- [Sitemap](https://www.clarobalance.com/sitemap.xml)",
        "",
      ].join("\n"),
      {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Vary": "Accept",
        },
      }
    );
  }

  // Laat bestaande pagina's en Next.js-bestanden ongemoeid.
  if (
    knownPages.has(pathname) ||
    pathname.startsWith("/_next/")
  ) {
    return NextResponse.next();
  }

  // Gewone bezoekers krijgen de normale Next.js-foutpagina.
  if (!acceptsMarkdown) {
    return NextResponse.next();
  }

  // AI-agents krijgen een duidelijke Markdown-404.
  return new Response(
    [
      "# Pagina niet gevonden",
      "",
      "De gevraagde pagina bestaat niet of is niet beschikbaar.",
      "Controleer het webadres of bezoek een van de volgende pagina's:",
      "",
      "- [Claro Balance homepage](https://www.clarobalance.com/)",
      "- [Sitemap](https://www.clarobalance.com/sitemap.xml)",
      "",
    ].join("\n"),
    {
      status: 404,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Vary": "Accept",
      },
    }
  );
}

export const config = {
  matcher: "/((?!_next/|.*\\..*).*)",
};