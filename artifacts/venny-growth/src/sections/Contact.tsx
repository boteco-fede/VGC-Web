import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-28 bg-card/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-10" />

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            For qualified investors and introducers
          </h2>

          <p className="text-muted-foreground font-light leading-relaxed text-lg mb-12">
            VGC Group works exclusively through trusted relationships. If you have been introduced
            or would like to learn more, reach out directly.
          </p>

          <a
            href="mailto:federico@vennygrowthcapital.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-sm font-medium bg-gradient-gold text-background hover:opacity-90 hover:shadow-[0_0_28px_rgba(212,175,55,0.35)] transition-all duration-300 hover:-translate-y-0.5 text-base"
          >
            <Mail className="w-5 h-5" />
            federico@vennygrowthcapital.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
