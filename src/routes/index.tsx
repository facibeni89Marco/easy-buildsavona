import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Gallery } from "@/components/landing/Gallery";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { About } from "@/components/landing/About";
import { Faq } from "@/components/landing/Faq";
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "@id": "https://easybuildsv.it/#business",
          name: "Easy Build S.R.L.",
          alternateName: "EasyBuild SV",
          legalName: "Easy Build S.R.L.",
          description:
            "Impresa edile artigiana a Savona specializzata in ristrutturazioni residenziali e commerciali, edilizia pubblica e privata.",
          url: "https://easybuildsv.it",
          telephone: "+39-348-672-4100",
          email: "easybuild.savona@gmail.com",
          vatID: "IT01893670099",
          taxID: "01893670099",
          foundingDate: "2024-01-23",
          founder: [
            { "@type": "Person", name: "Matteo Magliano" },
            { "@type": "Person", name: "Amedeo Carlone" },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via Paolo Gerolamo Brusco 1/4",
            addressLocality: "Savona",
            addressRegion: "SV",
            postalCode: "17100",
            addressCountry: "IT",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 44.3079,
            longitude: 8.4810,
          },
          areaServed: [
            { "@type": "City", name: "Savona" },
            { "@type": "City", name: "Albisola" },
            { "@type": "City", name: "Vado Ligure" },
            { "@type": "City", name: "Spotorno" },
            { "@type": "City", name: "Finale Ligure" },
            { "@type": "AdministrativeArea", name: "Provincia di Savona" },
          ],
          identifier: [
            { "@type": "PropertyValue", propertyID: "REA", value: "SV-238468" },
            { "@type": "PropertyValue", propertyID: "Albo Imprese Artigiane", value: "SV-62950" },
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+39-348-672-4100",
            contactType: "customer service",
            areaServed: "IT",
            availableLanguage: ["Italian"],
          },
          sameAs: [],
        }),
      },
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
      <Faq />
      <RequestForm />
      <Footer />
    </main>
  );
}
