import logo from "@/assets/easybuild-logo.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="EasyBuild SV" className="h-9 w-auto" width={120} height={36} />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#lavori" className="transition-colors hover:text-foreground">I nostri lavori</a>
          <a href="#richiesta" className="transition-colors hover:text-foreground">Come funziona</a>
          <a href="#richiesta" className="transition-colors hover:text-foreground">Contatti</a>
        </nav>
        <a
          href="#richiesta"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Richiedi sopralluogo
        </a>
      </div>
    </header>
  );
}
