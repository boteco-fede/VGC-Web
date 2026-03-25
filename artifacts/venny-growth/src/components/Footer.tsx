import { Link } from "wouter";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" onClick={scrollToTop} className="shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/vgc-logo.png`}
              alt="Venny Growth Capital"
              className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Venny Growth Capital. All rights reserved.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-border/30">
          <p className="text-muted-foreground/60 text-xs text-center leading-relaxed max-w-3xl mx-auto">
            This website is for informational purposes only and does not constitute an offer to sell
            or solicitation of an offer to buy any securities.
          </p>
        </div>
      </div>
    </footer>
  );
}
