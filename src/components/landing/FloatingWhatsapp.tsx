import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/393486724100";

export function FloatingWhatsapp() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const target = document.getElementById("richiesta");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contattaci su WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      className={`fixed right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg ring-2 ring-white/30 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40 ${
        hidden
          ? "pointer-events-none translate-y-6 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)" }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
