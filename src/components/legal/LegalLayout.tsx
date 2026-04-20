import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";

interface LegalLayoutProps {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, updatedAt, children }: LegalLayoutProps) {
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Torna alla home
        </Link>

        <header className="mt-8 border-b border-border pb-8">
          <h1 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Ultimo aggiornamento: {updatedAt}
          </p>
        </header>

        <article className="prose prose-neutral mt-10 max-w-none text-foreground [&_a]:text-primary [&_a]:underline [&_h2]:font-display [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:font-display [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_li]:my-1.5 [&_p]:my-4 [&_p]:leading-relaxed [&_p]:text-foreground/80 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul_li]:text-foreground/80">
          {children}
        </article>
      </div>
      <Footer />
    </main>
  );
}
