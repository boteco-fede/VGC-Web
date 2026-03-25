import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6" onClick={scrollToTop}>
              <div className="w-8 h-8 rounded bg-gradient-gold flex items-center justify-center">
                <span className="font-display font-bold text-background text-xl pt-1">V</span>
              </div>
              <span className="font-display font-semibold text-2xl tracking-wide">
                Venny Growth<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm font-light leading-relaxed">
              Unlocking exceptional growth potential in mid-market companies through 
              strategic capital, operational excellence, and aligned partnerships.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-foreground">Navigation</h4>
            <ul className="space-y-4">
              {["Philosophy", "Criteria", "Approach", "Team"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a href="mailto:info@vennygrowth.com" className="hover:text-primary transition-colors">
                  info@vennygrowth.com
                </a>
              </li>
              <li>100 Wall Street, Suite 4500<br/>New York, NY 10005</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Venny Growth Capital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
