import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const Route = createFileRoute("/termini")({
  head: () => ({
    meta: [
      { title: "Termini e Condizioni — EasyBuild SV" },
      {
        name: "description",
        content:
          "Termini e condizioni di utilizzo del sito EasyBuild SV e delle richieste di preventivo o sopralluogo.",
      },
    ],
  }),
  component: TerminiPage,
});

function TerminiPage() {
  return (
    <LegalLayout title="Termini e Condizioni" updatedAt="20 aprile 2026">
      <p>
        I presenti Termini e Condizioni regolano l'utilizzo del sito{" "}
        <strong>easybuildsv.it</strong> e le richieste di preventivo o sopralluogo
        inoltrate a EasyBuild SRL.
      </p>

      <h2>1. Titolare del sito</h2>
      <p>
        <strong>EasyBuild SRL</strong> — Via Montenotte 7, 17100 Savona (SV)
        <br />
        P.IVA 0000000000 — Email:{" "}
        <a href="mailto:easybuild.savona@gmail.com">easybuild.savona@gmail.com</a>
      </p>

      <h2>2. Oggetto del sito</h2>
      <p>
        Il sito ha finalità informativa e promozionale dei servizi di ristrutturazione
        edilizia offerti da EasyBuild SRL nella provincia di Savona. Le informazioni
        pubblicate non costituiscono offerta contrattuale ai sensi dell'art. 1336 c.c.
      </p>

      <h2>3. Richiesta di sopralluogo e preventivo</h2>
      <p>
        L'invio del modulo di richiesta è gratuito e non vincolante. EasyBuild SRL si
        impegna a contattare l'utente entro 24 ore lavorative per concordare il
        sopralluogo. Il preventivo viene rilasciato in forma scritta e diventa vincolante
        solo a seguito di accettazione formale da entrambe le parti.
      </p>

      <h2>4. Proprietà intellettuale</h2>
      <p>
        Tutti i contenuti del sito (testi, immagini, logo, grafica) sono di proprietà di
        EasyBuild SRL o utilizzati su licenza. È vietata la riproduzione totale o
        parziale senza autorizzazione scritta.
      </p>

      <h2>5. Limitazione di responsabilità</h2>
      <p>
        EasyBuild SRL non risponde di eventuali interruzioni del servizio, errori o
        inesattezze dei contenuti pubblicati. Gli utenti sono tenuti a verificare le
        informazioni tecniche con il personale dell'impresa prima di prendere decisioni.
      </p>

      <h2>6. Legge applicabile e foro competente</h2>
      <p>
        Per qualsiasi controversia relativa al sito o ai rapporti precontrattuali
        instaurati tramite lo stesso si applica la legge italiana. Il foro competente è
        quello di Savona, salvo diversa norma inderogabile a tutela del consumatore.
      </p>

      <h2>7. Modifiche</h2>
      <p>
        EasyBuild SRL si riserva il diritto di modificare in qualsiasi momento i presenti
        Termini. Le modifiche saranno efficaci dalla pubblicazione sul sito.
      </p>
    </LegalLayout>
  );
}
