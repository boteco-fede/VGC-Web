import { motion } from "framer-motion";
import { Infinity, CreditCard, Wheat } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const pillars = [
  {
    icon: Infinity,
    title: "Permanent Capital",
    description:
      "No fixed fund life. No forced exits. We acquire and compound positions over long time horizons.",
  },
  {
    icon: CreditCard,
    title: "Private Credit & Private Equity",
    description:
      "We deploy both structured credit and equity capital — acquiring positions, implementing institutional reporting, and professionalizing family-owned businesses.",
  },
  {
    icon: Wheat,
    title: "Essential Businesses",
    description:
      "We focus on non-discretionary sectors — agro & food processing, energy services, and financial services — with resilient demand regardless of macro conditions.",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What We Do" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.14 }}
              className="bg-card border border-border/60 p-8 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="w-14 h-14 rounded-lg bg-background border border-border flex items-center justify-center mb-7 shadow-md group-hover:border-primary/30 transition-colors">
                <p.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground leading-snug">
                {p.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
