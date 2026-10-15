
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

  // Laat bestaande pagina's en bestanden ongemoeid.
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

  // AI-agents krijgen een duidelijke foutmelding in Markdown.
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
