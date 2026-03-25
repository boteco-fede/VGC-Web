import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const handleScroll = () => {
    document.querySelector("#philosophy")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract dark financial background" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            Private Equity & Growth Capital
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-foreground mb-8">
            Unlocking <span className="text-gradient-gold italic">Growth</span> for <br/>
            Mid-Market Leaders.
          </h1>
          <p className="text-xl text-muted-foreground/90 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            We partner with exceptional management teams to build enduring value through strategic capital, operational excellence, and aligned incentives.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={handleScroll}
              className="group px-8 py-4 rounded-sm font-medium bg-gradient-gold text-background hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center gap-2"
            >
              Explore Our Approach
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-sm font-medium border border-border bg-card/30 backdrop-blur-sm hover:bg-white/5 hover:border-primary/50 transition-all duration-300"
            >
              Partner With Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={handleScroll}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Discover</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-primary"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
