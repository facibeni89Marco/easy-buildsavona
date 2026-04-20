import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/393486724100";

export function Footer() {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl font-semibold tracking-tight">
              EasyBuild<span className="text-primary">.</span>
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-surface-dark-foreground/60">
              È casa dalla A alla Z
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-surface-dark-foreground/70">
              Impresa edile specializzata in ristrutturazioni residenziali e commerciali
              nella provincia di Savona.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Contatti</h3>
            <ul className="mt-5 space-y-3 text-sm text-surface-dark-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Via Montenotte 7, Savona (SV) — 17100
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">348 672 4100</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:easybuild.savona@gmail.com" className="hover:text-white">
                  easybuild.savona@gmail.com
                </a>
              </li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Scrivici su WhatsApp
            </a>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Legale</h3>
            <ul className="mt-5 space-y-3 text-sm text-surface-dark-foreground/80">
              <li>Easybuild SRL</li>
              <li>P.IVA 0000000000</li>
              <li>
                <a href="#privacy" className="underline-offset-4 hover:text-white hover:underline">
                  Informativa privacy
                </a>
              </li>
              <li>
                <a href="#cookie" className="underline-offset-4 hover:text-white hover:underline">
                  Cookie policy
                </a>
              </li>
              <li>
                <a href="#termini" className="underline-offset-4 hover:text-white hover:underline">
                  Termini e condizioni
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-surface-dark-foreground/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} EasyBuild SRL — Tutti i diritti riservati.</p>
          <p>Savona (SV) · Italia</p>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
}
