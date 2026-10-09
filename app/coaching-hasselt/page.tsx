import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coach in Hasselt | Coaching bij stress en groei – Claro Balance",
description:
  "Zoek je een coach in Hasselt? Claro Balance biedt persoonlijke begeleiding bij stress, overbelasting, burn-out, relaties en belangrijke keuzes. Ontdek welke begeleiding bij jou past.",
  alternates: {
    canonical: "https://www.clarobalance.com/coaching-hasselt",
  },
  openGraph: {
    title: "Coaching in Hasselt | Claro Balance",
    description:
      "Persoonlijke coaching en begeleiding in Hasselt en Limburg bij persoonlijke groei, levensvragen, stress, burn-out, relaties en belangrijke keuzes.",
    url: "https://www.clarobalance.com/coaching-hasselt",
    siteName: "Claro Balance",
    locale: "nl_BE",
    type: "website",
  },
};

export default function CoachingHasseltPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Claro Balance",
        "item": "https://www.clarobalance.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Coaching in Hasselt",
        "item": "https://www.clarobalance.com/coaching-hasselt",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen bg-[#f5f1ea] text-neutral-900">
        <section className="max-w-5xl mx-auto px-6 md:px-10 pt-28 md:pt-40 pb-20">
        <p className="text-sm tracking-[0.25em] uppercase text-neutral-500 mb-8">
          Claro Balance · Hasselt & Limburg
        </p>

        <h1
          className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight max-w-4xl"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Coaching in Hasselt:
          <br />
          wanneer je voelt dat het niet meer stroomt.
        </h1>

        <p className="mt-10 max-w-2xl text-lg md:text-xl leading-[1.7] text-neutral-600">
  Soms weet je dat er iets moet veranderen, maar nog niet precies wat.
  Misschien loop je vast in een keuze, een patroon, je werk of een relatie.
  Misschien merk je dat stress en overbelasting zich opstapelen en dat je
  steeds moeilijker ruimte vindt om stil te staan bij wat er werkelijk speelt.
  Coaching kan helpen om te vertragen, helder te kijken naar wat er gebeurt en
  opnieuw richting te vinden.
</p>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl space-y-8 text-lg leading-[1.8] text-neutral-700">
            <div>
  <h2
    className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6"
    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
  >
    Wanneer kan coaching helpen?
  </h2>

  <p>
    Mensen zoeken coaching om verschillende redenen. Soms is er een duidelijke
    vraag. Soms vooral het gevoel dat het niet meer stroomt en dat er behoefte
    is aan helderheid.
  </p>

  <p>
    Coaching kan bijvoorbeeld passend zijn wanneer je:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>vastloopt in een keuze of belangrijke verandering;</li>
    <li>
      merkt dat dezelfde patronen telkens opnieuw terugkomen;
    </li>
    <li>meer inzicht wilt in wat je nodig hebt;</li>
    <li>
      merkt dat stress of overbelasting steeds meer ruimte inneemt;
    </li>
    <li>
      het gevoel hebt dat je richting kwijt bent of moeilijk tot rust komt;
    </li>
    <li>
      moeilijkheden ervaart binnen een relatie of gezin;
    </li>
    <li>
      opnieuw richting wilt vinden in je leven of werk.
    </li>
  </ul>

  <p>
    Soms merk je pas na een tijdje dat je draagkracht kleiner wordt. Je blijft
    doorgaan, maar voelt dat het steeds moeilijker wordt om overzicht te houden,
    keuzes te maken of ruimte te vinden voor jezelf. Ook dan kan het helpen om
    even stil te staan bij wat er werkelijk speelt.
  </p>
</div>

            <div>
  <h2
    className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6"
    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
  >
    Waarmee kan Claro je begeleiden?
  </h2>

  <p>
    Bij Claro kijken we niet alleen naar de vraag waarmee je binnenkomt, maar
    ook naar wat eronder ligt. Soms gaat het over een concrete keuze of
    verandering. Soms over een langere periode van stress, twijfel of
    vastlopen.
  </p>

  <p>
    We begeleiden onder andere bij:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>persoonlijke groei en ontwikkeling;</li>
    <li>levensvragen en het zoeken naar richting;</li>
    <li>stress, overbelasting en het gevoel dat het te veel wordt;</li>
    <li>burn-out en langdurig vastlopen;</li>
    <li>relaties en relationele uitdagingen;</li>
    <li>gezinsvragen en veranderingen binnen het gezin;</li>
    <li>werk, keuzes en belangrijke veranderingen in je leven.</li>
  </ul>

  <p>
    Het doel is niet om voor jou te bepalen wat de juiste oplossing is. We
    creëren ruimte om helder te kijken naar wat er speelt, wat je nodig hebt
    en welke beweging voor jou mogelijk is.
  </p>
</div>

            <div>
  <h2
    className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6"
    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
  >
    Hoe werkt coaching bij Claro?
  </h2>

  <p>
    Bij Claro begint begeleiding bij wat er op dat moment werkelijk speelt.
    Soms is dat meteen duidelijk. Soms vraagt het tijd om woorden te geven aan
    wat wringt of vastzit.
  </p>

  <p>
    We creëren ruimte om te vertragen en stil te staan. We luisteren, stellen
    vragen, spiegelen en dagen uit waar dat helpend kan zijn. Zo ontstaat er
    ruimte om patronen te herkennen, andere perspectieven te zien en opnieuw te
    voelen wat voor jou belangrijk is.
  </p>

  <p>
    We werken niet vanuit een vast stappenplan. De begeleiding sluit aan bij
    jouw vraag, jouw situatie en het tempo dat op dat moment passend is.
  </p>

  <p>
    Individueel of in groep, steeds met aandacht, diepgang en respect voor
    ieders tempo.
  </p>
</div>

            <div>
  <h2
    className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6"
    style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
  >
    Coaching of psychologische hulp?
  </h2>

  <p>
    Coaching en psychologische hulp zijn niet hetzelfde. Coaching kan passend
    zijn wanneer je wilt stilstaan bij persoonlijke groei, keuzes, relaties,
    werk, stress of andere levensvragen.
  </p>

  <p>
    Wanneer er sprake is van psychologische klachten of wanneer gespecialiseerde
    psychologische of medische hulp nodig is, is het belangrijk om een daarvoor
    gekwalificeerde zorgprofessional te raadplegen. Verschillende vormen van
    ondersteuning kunnen in sommige situaties ook naast elkaar bestaan.
  </p>

  <p>
    Twijfel je welke vorm van begeleiding bij jouw situatie past? Dan kan het
    helpen om eerst rustig te kijken naar wat er precies speelt en wat je
    nodig hebt.
  </p>

  <p>
    Wil je meer lezen over het verschil tussen psychologische hulp en coaching?
    Bekijk dan ook onze pagina over{" "}
    <a
      href="/psycholoog-hasselt"
      className="underline underline-offset-4 hover:no-underline"
    >
      psycholoog of coach in Hasselt
    </a>
    .
  </p>
</div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
  <div className="max-w-5xl mx-auto px-6 md:px-10">
    <h2
      className="text-4xl md:text-5xl font-bold mb-10"
      style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
    >
      Coaching in Hasselt en Limburg
    </h2>

    <div className="max-w-3xl text-lg leading-[1.8] text-neutral-700 space-y-6">
      <p>
        Claro Balance is gevestigd in Hasselt en biedt coaching en persoonlijke
        begeleiding aan mensen uit Hasselt en de ruimere regio Limburg.
      </p>

      <p>
        We begeleiden mensen die zoeken naar meer helderheid, richting en
        balans. Dat kan gaan over persoonlijke groei, belangrijke keuzes,
        stress of overbelasting, relaties, werk of een periode waarin je het
        gevoel hebt dat je bent vastgelopen.
      </p>

      <p>
        De begeleiding kan individueel of in groep plaatsvinden. Steeds staat
        de persoon en zijn of haar vraag centraal, met aandacht voor wat er
        werkelijk speelt en respect voor ieders tempo.
      </p>
    </div>
  </div>
</section>
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Veelgestelde vragen over coaching
          </h2>

          <div className="max-w-3xl space-y-10 text-neutral-700 leading-[1.75]">
  <div>
    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
      Wat is coaching?
    </h3>
    <p>
      Coaching is een vorm van begeleiding waarbij je stilstaat bij wat er
      speelt, inzicht krijgt in patronen en onderzoekt welke keuzes of
      veranderingen voor jou passend kunnen zijn. Het kan zowel gaan over
      persoonlijke groei als over een periode waarin je vastloopt of meer
      helderheid nodig hebt.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
      Waarvoor kan ik een coach in Hasselt zoeken?
    </h3>
    <p>
      Bijvoorbeeld bij persoonlijke groei, levensvragen, belangrijke keuzes,
      stress en overbelasting, werk, relaties of gezin. Ook wanneer je moeilijk
      kunt benoemen wat er precies aan de hand is, maar wel voelt dat er iets
      moet veranderen, kan coaching een eerste stap zijn.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
      Kan coaching helpen bij stress of burn-out?
    </h3>
    <p>
      Coaching kan helpen om stil te staan bij wat je belast, welke patronen
      meespelen en waar opnieuw ruimte kan ontstaan. Wanneer er sprake is van
      ernstige of aanhoudende psychologische of medische klachten, is het
      belangrijk om ook een gekwalificeerde zorgprofessional te raadplegen.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
      Is coaching hetzelfde als therapie?
    </h3>
    <p>
      Nee. Coaching en psychologische of therapeutische hulp hebben niet
      dezelfde functie. Welke begeleiding passend is, hangt af van wat er
      precies speelt en wat je nodig hebt.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
      Waar geeft Claro Balance coaching?
    </h3>
    <p>
      Claro Balance is gevestigd in Hasselt en begeleidt mensen uit Hasselt en
      de ruimere regio Limburg. De begeleiding kan individueel of in groep
      plaatsvinden.
    </p>
  </div>
</div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Wil je helder krijgen wat er voor jou speelt?
          </h2>

          <p className="max-w-2xl text-lg leading-[1.8] text-neutral-600 mb-8">
            Als je voelt dat er iets wringt, maar nog niet precies weet welke
            begeleiding bij jou past, kun je contact opnemen met Claro Balance.
          </p>

          <a
            href="/#contact"
            className="inline-block border border-neutral-900 px-7 py-4 text-sm tracking-[0.15em] uppercase hover:bg-neutral-900 hover:text-white transition-colors"
          >
            Contact opnemen
          </a>
        </div>
      </section>
    </main>
    </>
  );
  }
