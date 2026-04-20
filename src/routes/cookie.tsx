import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const Route = createFileRoute("/cookie")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — EasyBuild SV" },
      {
        name: "description",
        content:
          "Cookie policy di EasyBuild SRL: tipologie di cookie utilizzati e modalità di gestione del consenso.",
      },
    ],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <LegalLayout title="Cookie Policy" updatedAt="20 aprile 2026">
      <p>
        Questa Cookie Policy descrive le tipologie di cookie e tecnologie similari
        utilizzate dal sito di EasyBuild SRL e fornisce informazioni su come gestirne le
        preferenze.
      </p>

      <h2>1. Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti visitati inviano al terminale
        dell'utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti
        alla visita successiva.
      </p>

      <h2>2. Tipologie di cookie utilizzati</h2>
      <h3>Cookie tecnici (necessari)</h3>
      <p>
        Servono al corretto funzionamento del sito (navigazione, sicurezza, gestione
        delle preferenze di consenso). Non richiedono il consenso preventivo
        dell'utente, ai sensi dell'art. 122 del Codice Privacy.
      </p>

      <h3>Cookie analitici</h3>
      <p>
        Utilizziamo strumenti di misurazione anonimi e aggregati per comprendere come
        viene utilizzato il sito. Questi cookie vengono installati solo previo
        consenso dell'utente.
      </p>

      <h3>Cookie di terze parti</h3>
      <p>
        Quando l'utente clicca su "Scrivici su WhatsApp" viene reindirizzato al
        servizio WhatsApp, che applica la propria informativa privacy disponibile su{" "}
        <a
          href="https://www.whatsapp.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          whatsapp.com/legal/privacy-policy
        </a>
        .
      </p>

      <h2>3. Gestione delle preferenze</h2>
      <p>
        L'utente può modificare in ogni momento le proprie preferenze sui cookie
        attraverso le impostazioni del browser, eliminando o bloccando i cookie
        installati. La disabilitazione dei cookie tecnici può compromettere il corretto
        funzionamento del sito.
      </p>

      <h2>4. Contatti</h2>
      <p>
        Per qualsiasi domanda relativa alla presente Cookie Policy puoi scrivere a{" "}
        <a href="mailto:easybuild.savona@gmail.com">easybuild.savona@gmail.com</a>.
      </p>
    </LegalLayout>
  );
}
