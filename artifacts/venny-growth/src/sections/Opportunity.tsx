import { motion } from "framer-motion";

export function Opportunity() {
  return (
    <section id="opportunity" className="py-24 bg-card/40 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/6 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-1 bg-gradient-gold mb-8" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Venezuela is the most dislocated market in the world.
            </h2>
          </motion.div>

          {/* Right — body */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="space-y-7 pt-2 lg:pt-10"
          >
            <p className="text-foreground/80 font-light leading-relaxed text-lg">
              An 80% GDP contraction over a decade has created capital scarcity, succession gaps
              in family-owned businesses, and attractive valuations across essential sectors.
              Businesses are mispriced due to balance-sheet stress, not fundamental demand weakness.
            </p>
            <p className="text-foreground/80 font-light leading-relaxed text-lg">
              We are not underwriting macro recovery. We are acquiring essential businesses at
              dislocated prices and creating value through normalization, governance, and
              operational discipline, with multiple expansion as the upside.
            </p>

            {/* Stat strip */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50">
              {[
                { stat: "80%", label: "GDP contraction over a decade" },
                { stat: "0", label: "Institutional capital presence" },
                { stat: "∞", label: "Holding horizon" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <div className="font-display text-3xl font-bold text-primary mb-1">{stat}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
