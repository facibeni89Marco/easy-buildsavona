import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo serve per ricevere un preventivo?",
    a: "Dopo il sopralluogo gratuito, ti consegniamo un preventivo dettagliato entro 5-7 giorni lavorativi. Niente cifre buttate al volo: ogni voce è chiara e ragionata.",
  },
  {
    q: "Quanto dura in media una ristrutturazione?",
    a: "Dipende dall'intervento: una ristrutturazione parziale (bagno o cucina) richiede in media 3-5 settimane, una ristrutturazione completa di un appartamento dai 2 ai 4 mesi. Ti diamo sempre una data di consegna prima di iniziare.",
  },
  {
    q: "Il preventivo può cambiare in corso d'opera?",
    a: "Il preventivo che firmi è quello che paghi. Eventuali extra possono nascere solo se sei tu a chiedere modifiche o varianti, e in quel caso vengono concordati per iscritto prima di procedere.",
  },
  {
    q: "Chi gestisce il cantiere giorno per giorno?",
    a: "Avrai un unico referente — Matteo o Amedeo — che segue il tuo cantiere dall'inizio alla fine. Nessun rimpallo tra figure diverse: una sola persona da chiamare per qualsiasi cosa.",
  },
  {
    q: "Vi occupate anche di pratiche e permessi?",
    a: "Sì. Gestiamo SCIA, CILA, pratiche edilizie e tutti i permessi necessari, in collaborazione con tecnici di fiducia. Tu ci dici cosa vuoi fare, ai documenti pensiamo noi.",
  },
  {
    q: "In quali zone operate?",
    a: "Lavoriamo in tutta la provincia di Savona: Savona città, Cairo Montenotte, Albisola, Vado Ligure, Spotorno, Finale Ligure e dintorni. In fase di richiesta verifichiamo se la tua zona rientra nel raggio di intervento.",
  },
  {
    q: "Come funziona il pagamento?",
    a: "Lavoriamo con stati di avanzamento concordati prima dell'inizio dei lavori: nessun acconto sproporzionato, nessun saldo richiesto prima della consegna. Tutto regolarmente fatturato.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Domande frequenti
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
            Tutto quello che <span className="italic">vuoi sapere.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Le risposte ai dubbi più comuni su tempi, costi e gestione del cantiere.
            Se non trovi quello che cerchi, scrivici su WhatsApp.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-14 w-full space-y-3"
          defaultValue="item-0"
        >
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-xl border border-border bg-card px-5 shadow-soft data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="font-display py-5 text-left text-lg font-medium text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
