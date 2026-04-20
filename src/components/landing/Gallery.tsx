import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";
import w7 from "@/assets/work-7.jpg";
import w8 from "@/assets/work-8.jpg";

const works = [
  { src: w1, title: "Cucina su misura", tag: "Ristrutturazione completa", span: "lg:col-span-2 lg:row-span-2" },
  { src: w2, title: "Bagno in pietra naturale", tag: "Ristrutturazione parziale", span: "" },
  { src: w4, title: "Restauro facciata", tag: "Lavori esterni", span: "" },
  { src: w5, title: "Open space", tag: "Ristrutturazione completa", span: "lg:col-span-2" },
  { src: w3, title: "Cantiere in corso", tag: "Demolizioni e murature", span: "" },
  { src: w6, title: "Terrazza panoramica", tag: "Lavori esterni", span: "" },
  { src: w7, title: "Impianti e cartongessi", tag: "Lavori tecnici", span: "" },
  { src: w8, title: "Locale commerciale", tag: "Ristrutturazione commerciale", span: "lg:col-span-2" },
];

export function Gallery() {
  return (
    <section id="lavori" className="bg-surface-dark text-surface-dark-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Portfolio
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              I nostri lavori
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-surface-dark-foreground/70">
            Una selezione dei cantieri realizzati nella provincia di Savona.
            Ogni progetto è seguito da un unico referente, dalla prima visita alla consegna.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]">
          {works.map((w, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-xl bg-black/40 ring-1 ring-white/5 ${w.span}`}
            >
              <img
                src={w.src}
                alt={w.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {w.tag}
                </p>
                <p className="font-display mt-1 text-lg font-medium text-white">
                  {w.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
