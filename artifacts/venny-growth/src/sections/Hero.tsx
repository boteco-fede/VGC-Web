import { motion } from "framer-motion";

export function Hero() {
  const handleContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt=""
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/vgc-logo.png`}
            alt="Venny Growth Capital"
            className="h-24 w-auto"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-primary font-medium tracking-[0.22em] uppercase text-sm mb-8"
        >
          Permanent capital. Venezuelan essential businesses.
        </motion.p>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="text-foreground/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12"
        >
          VGC Group is a permanent capital platform acquiring positions in Venezuelan essential
          businesses. We deploy patient, structured capital where institutional investors are
          absent — and build value through governance, operational discipline, and long time horizons.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={handleContact}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-sm font-medium bg-gradient-gold text-background hover:opacity-90 hover:shadow-[0_0_28px_rgba(212,175,55,0.35)] transition-all duration-300 hover:-translate-y-0.5 text-base"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
