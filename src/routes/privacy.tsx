import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Informativa Privacy — EasyBuild SV" },
      {
        name: "description",
        content:
          "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) di EasyBuild SRL.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout title="Informativa Privacy" updatedAt="20 aprile 2026">
      <p>
        La presente informativa è resa ai sensi dell'art. 13 del Regolamento UE 2016/679
        (GDPR) e descrive le modalità con cui EasyBuild SRL tratta i dati personali degli
        utenti che visitano il sito o richiedono un sopralluogo.
      </p>

      <h2>1. Titolare del trattamento</h2>
      <p>
        Il titolare del trattamento è <strong>EasyBuild SRL</strong>, con sede in Via
        Montenotte 7, 17100 Savona (SV) — P.IVA 0000000000.
        <br />
        Email: <a href="mailto:easybuild.savona@gmail.com">easybuild.savona@gmail.com</a>
        <br />
        Telefono / WhatsApp: 348 672 4100
      </p>

      <h2>2. Tipologie di dati trattati</h2>
      <ul>
        <li>
          <strong>Dati di contatto</strong> forniti volontariamente tramite il form di
          richiesta sopralluogo, WhatsApp o email (nome, cognome, telefono, email,
          indirizzo dell'immobile).
        </li>
        <li>
          <strong>Dati di navigazione</strong> raccolti automaticamente dai sistemi
          informatici (indirizzi IP, log di accesso, tipo di browser).
        </li>
      </ul>

      <h2>3. Finalità e base giuridica</h2>
      <ul>
        <li>
          Riscontro alle richieste di preventivo e sopralluogo (esecuzione di misure
          precontrattuali — art. 6.1.b GDPR).
        </li>
        <li>
          Adempimenti contrattuali, fiscali e amministrativi (obbligo legale —
          art. 6.1.c GDPR).
        </li>
        <li>
          Miglioramento del sito e analisi statistica aggregata (legittimo interesse —
          art. 6.1.f GDPR).
        </li>
      </ul>

      <h2>4. Modalità di trattamento e conservazione</h2>
      <p>
        I dati sono trattati con strumenti informatici e cartacei, adottando misure di
        sicurezza adeguate. I dati di contatto sono conservati per il tempo necessario
        all'evasione della richiesta e, in caso di rapporto contrattuale, per 10 anni
        come previsto dalla normativa fiscale.
      </p>

      <h2>5. Comunicazione e trasferimento</h2>
      <p>
        I dati possono essere comunicati a consulenti, commercialisti, tecnici e
        fornitori esterni nominati responsabili del trattamento, esclusivamente per le
        finalità sopra indicate. Non è previsto il trasferimento di dati al di fuori
        dell'Unione Europea.
      </p>

      <h2>6. Diritti dell'interessato</h2>
      <p>
        Ai sensi degli artt. 15-22 GDPR puoi esercitare in ogni momento i diritti di
        accesso, rettifica, cancellazione, limitazione, portabilità e opposizione,
        scrivendo a{" "}
        <a href="mailto:easybuild.savona@gmail.com">easybuild.savona@gmail.com</a>.
        Hai inoltre diritto di proporre reclamo al{" "}
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
          Garante per la protezione dei dati personali
        </a>
        .
      </p>
    </LegalLayout>
  );
}
