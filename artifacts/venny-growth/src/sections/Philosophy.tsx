import { motion } from "framer-motion";
import { Hourglass, TrendingUp, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const principles = [
  {
    icon: Hourglass,
    title: "Patient Capital",
    description: "We are not driven by arbitrary fund lifecycles. We provide flexible, long-term capital that aligns with the natural growth trajectory of your business."
  },
  {
    icon: TrendingUp,
    title: "Operational Excellence",
    description: "Beyond capital, we bring deep operational expertise. We roll up our sleeves to optimize processes, refine strategies, and accelerate market expansion."
  },
  {
    icon: ShieldCheck,
    title: "Aligned Incentives",
    description: "True partnership requires shared outcomes. We structure our investments so that we only succeed when founders and management teams succeed."
  }
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Philosophy" 
          subtitle="We believe in building great companies, not just engineering financial outcomes. Our approach is rooted in partnership, patience, and operational rigor."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              
              <div className="w-14 h-14 rounded-lg bg-background border border-border flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:border-primary/30 transition-colors">
                <principle.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">
                {principle.title}
              </h3>
              
              <p className="text-muted-foreground font-light leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
