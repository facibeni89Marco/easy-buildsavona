import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

// TEMPORANEO: dominio easybuildsavona.it in fase di verifica su Resend.
// Resend in modalità test consente l'invio solo all'email del proprietario account.
// Le richieste vengono inoltrate a facibeni.89@gmail.com con Reply-To = easybuild.savona@gmail.com
// così nessuna richiesta viene persa. Una volta verificato il dominio,
// reimpostare RECIPIENT su "easybuild.savona@gmail.com".
const RECIPIENT = "facibeni.89@gmail.com";
const FORWARD_TO = "easybuild.savona@gmail.com";

const schema = z.object({
  workType: z.string().min(1).max(50),
  propertyType: z.string().min(1).max(50),
  zone: z.string().min(2).max(120),
  timing: z.string().min(1).max(50),
  fullName: z.string().min(2).max(120),
  phone: z.string().min(6).max(30),
  email: z.string().email().max(255),
});

const labels = {
  workType: {
    completa: "Ristrutturazione completa",
    parziale: "Ristrutturazione parziale (bagno, cucina…)",
    esterni: "Lavori esterni (facciata, giardino…)",
    nuovo: "Nuovo immobile / costruzione",
    altro: "Altro",
  } as Record<string, string>,
  propertyType: {
    appartamento: "Appartamento",
    indipendente: "Casa indipendente / villa",
    commerciale: "Locale commerciale",
    altro: "Altro",
  } as Record<string, string>,
  timing: {
    asap: "Prima possibile",
    "1-3": "Tra 1 e 3 mesi",
    "6m": "Entro 6 mesi",
    info: "Solo informazioni per ora",
  } as Record<string, string>,
};

export const Route = createFileRoute("/api/send-request")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const data = schema.parse(body);

          const apiKey = process.env.RESEND_API_KEY;
          if (!apiKey) {
            console.error("RESEND_API_KEY missing");
            return new Response(
              JSON.stringify({ error: "Email service not configured" }),
              { status: 500, headers: { "Content-Type": "application/json" } },
            );
          }

          const workLabel = labels.workType[data.workType] ?? data.workType;
          const propLabel = labels.propertyType[data.propertyType] ?? data.propertyType;
          const timingLabel = labels.timing[data.timing] ?? data.timing;

          const html = `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a1a">
              <h2 style="color:#0a4d3a;margin:0 0 16px">Nuova richiesta di sopralluogo</h2>
              <p style="color:#555;margin:0 0 24px">Hai ricevuto una nuova richiesta dal sito EasyBuild.</p>

              <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
                <tr><td style="padding:10px;background:#f5f5f5;font-weight:bold;width:40%">Nome e cognome</td><td style="padding:10px;background:#f5f5f5">${escapeHtml(data.fullName)}</td></tr>
                <tr><td style="padding:10px;font-weight:bold">Telefono</td><td style="padding:10px"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></td></tr>
                <tr><td style="padding:10px;background:#f5f5f5;font-weight:bold">Email</td><td style="padding:10px;background:#f5f5f5"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
                <tr><td style="padding:10px;font-weight:bold">Tipo di lavoro</td><td style="padding:10px">${escapeHtml(workLabel)}</td></tr>
                <tr><td style="padding:10px;background:#f5f5f5;font-weight:bold">Tipo di immobile</td><td style="padding:10px;background:#f5f5f5">${escapeHtml(propLabel)}</td></tr>
                <tr><td style="padding:10px;font-weight:bold">Zona</td><td style="padding:10px">${escapeHtml(data.zone)}</td></tr>
                <tr><td style="padding:10px;background:#f5f5f5;font-weight:bold">Tempistiche</td><td style="padding:10px;background:#f5f5f5">${escapeHtml(timingLabel)}</td></tr>
              </table>

              <p style="color:#888;font-size:12px;margin-top:32px;border-top:1px solid #eee;padding-top:16px">
                Email automatica generata dal form di richiesta sopralluogo del sito EasyBuild.
              </p>
            </div>
          `;

          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              from: "EasyBuild <onboarding@resend.dev>",
              to: [RECIPIENT],
              reply_to: data.email,
              subject: `[EasyBuild → inoltrare a ${FORWARD_TO}] Nuova richiesta sopralluogo — ${data.fullName}`,
              html,
            }),
          });

          if (!res.ok) {
            const errText = await res.text();
            console.error("Resend error:", res.status, errText);
            return new Response(
              JSON.stringify({ error: "Failed to send email" }),
              { status: 502, headers: { "Content-Type": "application/json" } },
            );
          }

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          if (err instanceof z.ZodError) {
            return new Response(
              JSON.stringify({ error: "Invalid input", details: err.issues }),
              { status: 400, headers: { "Content-Type": "application/json" } },
            );
          }
          console.error("send-request error:", err);
          return new Response(JSON.stringify({ error: "Server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
