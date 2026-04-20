import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Gallery } from "@/components/landing/Gallery";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { About } from "@/components/landing/About";
import { RequestForm } from "@/components/landing/RequestForm";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EasyBuild SV — Ristrutturazioni a Savona senza pensieri" },
      {
        name: "description",
        content:
          "Impresa edile a Savona. Un unico referente per la tua ristrutturazione, dalla prima idea alla consegna. Richiedi un sopralluogo gratuito.",
      },
      { property: "og:title", content: "EasyBuild SV — Ristrutturare casa senza impazzire" },
      {
        property: "og:description",
        content:
          "Un unico referente. Dalla tua idea alla casa finita. Ristrutturazioni residenziali e commerciali nella provincia di Savona.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Gallery />
      <HowItWorks />
      <About />
      <RequestForm />
      <Footer />
    </main>
  );
}
