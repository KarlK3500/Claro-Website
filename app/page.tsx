"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ClaroLandingPage() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-[#f5f1ea] text-neutral-900 overflow-x-hidden"
      style={{
        scrollBehavior: "smooth",
        fontFamily: '"Playfair Display", Georgia, serif',
      }}
    >
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#f5f1ea]/80 border-b border-black/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg width="42" height="42" viewBox="0 0 42 42" className="opacity-80">
              <path d="M32 9 C26 4, 13 7, 10 20 C8 31, 18 38, 30 32" stroke="currentColor" strokeWidth="0.9" fill="none" strokeLinecap="round" />
            </svg>
            <div className="text-2xl tracking-[0.35em] font-bold">CLARO</div>
            <span className="hidden md:block text-xs tracking-[0.25em] uppercase text-neutral-500 ml-2">
              Where direction becomes clear
            </span>
          </div>

          <button onClick={() => setOpen(!open)} className="relative flex items-center justify-center w-14 h-14 group" aria-label="Menu">
            <motion.svg
              animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.05, 1], x: [0, 3, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute w-14 h-14 opacity-40"
              viewBox="0 0 48 48"
            >
              <path d="M24 4 C35 6, 43 14, 42 24 C42 34, 35 42, 24 44 C14 43, 6 35, 5 24 C5 14, 13 6, 24 4" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
            </motion.svg>
            <div className="flex flex-col gap-1">
              <span className="w-8 h-[1px] bg-black block transition-all group-hover:w-6" />
              <span className="w-6 h-[1px] bg-black block transition-all group-hover:w-8" />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="absolute top-full right-4 md:right-6 bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden py-6 md:py-8 px-8 md:px-10"
            >
              <nav className="flex flex-col gap-5 text-lg tracking-wide">
                <button onClick={() => scrollToSection("home")} className="text-left">Home</button>
                <button onClick={() => scrollToSection("wie-title")} className="text-left">Wie zijn wij</button>
                <button onClick={() => scrollToSection("doen")} className="text-left">Wat doen wij</button>
                <button onClick={() => scrollToSection("contact")} className="text-left">Contact</button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-[#f7f3ed]">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4 }} className="absolute inset-0 opacity-20">
            <motion.div animate={{ y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 6.5 }} className="absolute top-1/3 left-[-10%] w-[500px] h-[500px]">
              <svg viewBox="0 0 500 500" className="w-full h-full">
                <path d="M250 20 C420 30, 470 180, 455 260 C430 410, 290 470, 180 450 C70 420, 20 300, 35 180 C55 70, 150 10, 250 20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
              </svg>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="relative text-center max-w-6xl">
            <div className="mb-10 flex flex-col items-center gap-5 relative">
              <svg width="110" height="110" viewBox="0 0 110 110" className="opacity-80">
                <path d="M80 24 C61 10, 29 20, 24 51 C22 77, 47 91, 74 79" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
              </svg>
              <div className="text-3xl md:text-6xl tracking-[0.35em] font-bold">CLARO</div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[8.5rem] font-bold leading-[0.95] mb-10 tracking-tight max-w-5xl mx-auto">
              <span className="block">Waar richting</span>
              <span className="block md:ml-24">helder wordt</span>
            </h1>

            <p className="text-neutral-500 italic text-lg md:text-xl mb-10 leading-[0.7]">Where direction becomes clear</p>
            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 3 }}>
              <button onClick={() => scrollToSection("contact")} className="inline-block border border-black/20 px-8 py-3 rounded-full text-sm tracking-[0.25em] uppercase">
                Contact opnemen
              </button>
            </motion.div>
          </motion.div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-24 md:py-40 space-y-10 md:space-y-12 text-lg leading-[1.08] relative text-neutral-700 scroll-mt-28" style={{ fontFamily: "Inter, sans-serif" }}>
          <div className="space-y-6 leading-[0.9]">
            <p>Wanneer praten niet meer volstaat.</p>
            <p>Wanneer het niet meer stroomt.</p>
            <p>Wanneer je voelt dat er iets wringt, maar niet precies weet wat of hoe je het moet aanpakken.</p>
            <p>Bij Claro creëren we ruimte om stil te staan. Om helder te kijken naar wat speelt.</p>
            <p>Om eerlijk te benoemen wat vastzit.</p>
            <p>En om bewust te kiezen hoe het verder mag.</p>
            <p>We begeleiden mensen die zoeken naar richting, in hun relatie, hun gezin, hun werk of in zichzelf. Individueel of in groep.</p>
            <p>Met aandacht, diepgang en respect voor ieders tempo.</p>
          </div>

          <p>Helder kijken.</p>
          <p>Eerlijk benoemen.</p>
          <p>Bewust kiezen.</p>

          <h2 id="doen" className="text-4xl md:text-5xl tracking-[0.3em] font-bold text-neutral-900 pt-8 mb-8 scroll-mt-28 ml-0" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
            WAT DOEN WIJ
          </h2>

          <div className="space-y-4 leading-[0.86]">
            <p>Claro is ontstaan vanuit een gedeelde overtuiging: dat echte begeleiding vraagt om betrokkenheid, helderheid en respect.</p>
            <p>We werken elk vanuit onze eigen expertise en begeleiden onze trajecten apart, maar blijven altijd met elkaar in gesprek.</p>
            <p>Onze achtergronden zijn verschillend, maar vullen elkaar aan.</p>
            <p className="pt-4">Ils begeleidt mensen en gezinnen die willen groeien, balans zoeken of tegen uitdagingen aanlopen.</p>
            <p>Karl ondersteunt mensen die vastlopen bij keuzes en uitdagingen in hun persoonlijke leven, werk of relaties.</p>
          </div>
        </section>

        <section id="wie" className="bg-white py-24 md:py-40 px-6 relative overflow-hidden">
          <div className="scroll-mt-32 absolute -top-32" id="wie-anchor" />
          <div className="max-w-6xl mx-auto mb-16 relative z-10">
            <h2 id="wie-title" className="text-4xl md:text-5xl tracking-[0.3em] font-bold text-neutral-900 scroll-mt-24" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              WIE ZIJN WIJ
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-start md:items-stretch relative z-10">
            <div className="flex flex-col">
              <motion.img
                initial={{ opacity: 0, y: 40, scale: 1.03 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src="/Karl2.jpeg"
                alt="Karl Ketelslagers"
                className="h-[420px] md:h-[560px] w-full object-cover object-center rounded-2xl mb-8 grayscale contrast-125 brightness-90 sepia-[0.15] shadow-2xl bg-neutral-200"
              />
              <h2 className="text-4xl font-bold mb-6">Karl Ketelslagers</h2>
              <p className="text-lg leading-[1.08] text-neutral-700">Karl begeleidt mensen die vastlopen bij belangrijke keuzes en uitdagingen in hun persoonlijke en professionele leven, of in relaties en gezinsdynamieken.</p>
            </div>

            <div className="flex flex-col">
              <motion.img
                initial={{ opacity: 0, y: 40, scale: 1.03 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                src="Ils1.jpg"
                alt="Ils Camps"
                className="h-[420px] md:h-[560px] w-full object-cover object-center rounded-2xl mb-8 grayscale contrast-125 brightness-90 sepia-[0.15] shadow-2xl bg-neutral-200"
              />
              <h2 className="text-4xl font-bold mb-6">Ils Camps</h2>
              <p className="text-lg leading-[1.08] text-neutral-700">Ils ondersteunt mensen en gezinnen bij persoonlijke groei, het vinden van balans en het omgaan met levensvragen, zowel privé als in werk- of gezinscontext.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-neutral-950 text-white py-20 md:py-36 px-6 relative overflow-hidden scroll-mt-28">
          <div className="max-w-5xl mx-auto mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl tracking-[0.3em] font-bold text-white" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              CONTACT
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div className="space-y-4 text-lg leading-[1.08] text-neutral-300">
              <p>karl.ktel@gmail.com</p>
              <p>0495/224924</p>
              <p>Weggevoerdenstraat 39, 3500 Hasselt</p>
            </div>

            <form
  action="https://formspree.io/f/mdaypvgy"
  method="POST"
  className="space-y-6"
>
  <input
    type="text"
    name="name"
    placeholder="Naam"
    required
    className="w-full p-4 rounded-xl bg-white/10 backdrop-blur text-white placeholder-white/60"
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    required
    className="w-full p-4 rounded-xl bg-white/10 backdrop-blur text-white placeholder-white/60"
  />
  <textarea
    name="message"
    placeholder="Bericht"
    rows={5}
    required
    className="w-full p-4 rounded-xl bg-white/10 backdrop-blur text-white placeholder-white/60"
  />
  <button
    type="submit"
    className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:opacity-90 transition"
  >
    Verstuur
  </button>
</form>
          </div>
        </section>
      </main>
    </div>
  );
}
