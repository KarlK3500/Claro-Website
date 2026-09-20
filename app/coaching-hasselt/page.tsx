import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaching in Hasselt | Claro Balance",
  description:
    "Op zoek naar coaching in Hasselt? Claro Balance biedt persoonlijke coaching en begeleiding bij persoonlijke groei, levensvragen, stress, burn-out, relaties, werk en belangrijke keuzes.",
  alternates: {
    canonical: "https://clarobalance.com/coaching-hasselt",
  },
  openGraph: {
    title: "Coaching in Hasselt | Claro Balance",
    description:
      "Persoonlijke coaching en begeleiding in Hasselt en Limburg bij persoonlijke groei, levensvragen, stress, burn-out, relaties en belangrijke keuzes.",
    url: "https://clarobalance.com/coaching-hasselt",
    siteName: "Claro Balance",
    locale: "nl_BE",
    type: "website",
  },
};

export default function CoachingHasseltPage() {
  return (
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
          Je loopt vast in een keuze, een patroon, je werk, een relatie of
          gewoon in jezelf. Coaching kan helpen om stil te staan, helder te
          kijken naar wat speelt en opnieuw richting te vinden.
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
                Mensen zoeken coaching om verschillende redenen. Soms is er een
                duidelijke vraag. Soms vooral het gevoel dat het niet meer
                stroomt en dat er behoefte is aan helderheid.
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
                <li>druk of overbelasting ervaart in werk of privé;</li>
                <li>
                  moeilijkheden ervaart binnen een relatie of gezin;
                </li>
                <li>opnieuw richting wilt vinden in je leven.</li>
              </ul>
            </div>

            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Waarmee kan Claro je begeleiden?
              </h2>

              <p>
                Claro Balance biedt coaching en persoonlijke begeleiding in
                Hasselt en Limburg rond thema&apos;s die belangrijk kunnen zijn
                in verschillende fases van je leven.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>persoonlijke groei en ontwikkeling</li>
                <li>levensvragen en richting</li>
                <li>stress en overbelasting</li>
                <li>burn-out en vastlopen</li>
                <li>relaties en relationele uitdagingen</li>
                <li>gezinsvragen</li>
                <li>werk en belangrijke keuzes</li>
              </ul>
            </div>

            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Hoe werkt coaching bij Claro?
              </h2>

              <p>
                Bij Claro creëren we ruimte om te vertragen en stil te staan bij
                wat er werkelijk speelt. Niet om snel een antwoord te geven,
                maar om samen helder te krijgen wat vastzit, welke patronen
                meespelen en waar ruimte ontstaat voor verandering.
              </p>

              <p>
                We luisteren, stellen vragen, spiegelen en dagen uit waar dat
                helpend kan zijn. Zo ontstaat ruimte om bewuster te kijken naar
                wat je wilt, wat je tegenhoudt en welke volgende stap bij jou
                past.
              </p>

              <p>
                Individueel of in groep, steeds met aandacht, diepgang en
                respect voor ieders tempo.
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
                Coaching en psychologische hulp zijn niet hetzelfde. Coaching
                kan passend zijn wanneer je wilt stilstaan bij persoonlijke
                groei, keuzes, relaties, werk, stress of andere levensvragen.
              </p>

              <p>
                Wanneer je psychologische klachten ervaart of gespecialiseerde
                psychologische of medische hulp nodig hebt, is het belangrijk om
                een daarvoor gekwalificeerde zorgprofessional te raadplegen.
                Verschillende vormen van ondersteuning kunnen in sommige
                situaties ook naast elkaar bestaan.
              </p>

              <p>
                Wil je eerst meer lezen over het verschil tussen psychologische
                hulp en coaching? Bekijk dan ook onze pagina over{" "}
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
              Claro Balance is een praktijk voor coaching en persoonlijke
              begeleiding in Hasselt en Limburg. We begeleiden mensen die
              zoeken naar meer helderheid, richting en balans in hun
              persoonlijke, relationele of professionele leven.
            </p>

            <p>
              We werken individueel en in groep, met aandacht voor wat er
              speelt en respect voor het tempo van iedere persoon.
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
                Coaching is een vorm van begeleiding waarbij je stilstaat bij
                wat er speelt, inzicht krijgt in patronen en onderzoekt welke
                keuzes of veranderingen voor jou passend kunnen zijn.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Waarvoor kan ik een coach in Hasselt zoeken?
              </h3>
              <p>
                Dat kan bijvoorbeeld bij persoonlijke groei, levensvragen,
                belangrijke keuzes, stress, werk, relaties, gezin of wanneer je
                het gevoel hebt dat je vastloopt.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Is coaching hetzelfde als therapie?
              </h3>
              <p>
                Nee. Coaching en psychologische of therapeutische hulp hebben
                niet dezelfde functie. Welke begeleiding passend is, hangt af
                van wat er precies speelt en wat je nodig hebt.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Waar geeft Claro Balance coaching?
              </h3>
              <p>
                Claro Balance is gevestigd in Hasselt en begeleidt mensen uit
                Hasselt en de ruimere regio Limburg.
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
  );
}