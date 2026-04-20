import { Quote, Star } from "lucide-react";
import matteo from "@/assets/founder-matteo.jpg";
import amedeo from "@/assets/founder-amedeo.jpg";

const founders = [
  {
    name: "Matteo Magliano",
    role: "Co-fondatore & Amministratore · Cantieri",
    img: matteo,
    bio: "Savonese doc, cresciuto tra i cantieri di famiglia. Segue ogni lavoro in prima persona ed è il tuo referente quando si parla di tempi, materiali e squadre.",
  },
  {
    name: "Amedeo Carlone",
    role: "Co-fondatore & Amministratore · Progetti",
    img: amedeo,
    bio: "Si occupa di progettazione, preventivi e rapporto con il cliente. Trasforma le tue idee in un piano chiaro e dettagliato, prima ancora di iniziare i lavori.",
  },
];

const testimonials = [
  {
    quote:
      "Avevamo paura di iniziare la ristrutturazione del bagno. Matteo ci ha seguiti dall'inizio alla fine: tempi rispettati, preventivo invariato, zero sorprese.",
    name: "Laura M.",
    place: "Savona",
  },
  {
    quote:
      "Hanno rifatto tutto l'appartamento mentre lavoravo. Una sola persona di riferimento per ogni cosa: una pace. Consigliatissimi.",
    name: "Davide R.",
    place: "Savona",
  },
  {
    quote:
      "Serietà rara nel settore edile. Amedeo ha capito subito cosa volevamo, il preventivo era chiaro e la consegna puntuale.",
    name: "Sara e Luca P.",
    place: "Albisola",
  },
];

export function About() {
  return (
    <section id="chi-siamo" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Storia */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Chi siamo
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
            Due amici, <span className="italic">una promessa.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Easy Build S.R.L. nasce a Savona nel gennaio 2024 dall'esperienza di
            Matteo Magliano e Amedeo Carlone, due amici cresciuti in cantiere fin da
            ragazzi. Dopo anni a lavorare in altre imprese, hanno deciso di metterci
            la faccia: impresa artigiana iscritta all'Albo (SV-62950), un unico
            referente che ti segue, preventivi chiari e nessuna sorpresa a fine lavori.
          </p>
        </div>

        {/* Founders */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {founders.map((f) => (
            <article
              key={f.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-card"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={f.img}
                  alt={`${f.name}, ${f.role}`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                  {f.role}
                </p>
                <h3 className="font-display mt-2 text-2xl font-semibold text-foreground">
                  {f.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Cosa dicono di noi
            </p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              La fiducia di chi ha scelto EasyBuild
            </h3>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <li
                key={t.name}
                className="relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <Quote
                  aria-hidden
                  className="absolute right-5 top-5 h-8 w-8 text-primary/15"
                />
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                  "{t.quote}"
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-base font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{t.place}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
