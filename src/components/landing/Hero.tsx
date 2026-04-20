import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const WHATSAPP_URL = "https://wa.me/393486724100";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* decorative background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-25"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col items-start justify-center px-6 py-24 sm:py-32 lg:px-8">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          EasyBuild SV · Savona
        </span>

        <h1 className="font-display max-w-3xl text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
          Ristrutturare casa
          <br />
          <span className="italic text-primary">senza impazzire.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Un unico referente. Dalla tua idea alla casa finita.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#richiesta"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-cta transition-all hover:translate-y-[-1px] hover:bg-primary/90 hover:shadow-lg active:translate-y-0"
          >
            Richiedi un sopralluogo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-muted"
          >
            <MessageCircle className="h-4 w-4 text-whatsapp" />
            Scrivici su WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
