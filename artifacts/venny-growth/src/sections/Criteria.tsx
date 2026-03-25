import { motion } from "framer-motion";
import { DollarSign, MapPin, Briefcase, Activity } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const criteria = [
  {
    title: "Financial Profile",
    icon: DollarSign,
    details: [
      "$10M - $100M in Annual Revenue",
      "Positive EBITDA and cash flow",
      "History of stable, organic growth"
    ]
  },
  {
    title: "Target Sectors",
    icon: Briefcase,
    details: [
      "Enterprise Software & Technology",
      "Healthcare IT & Services",
      "B2B Business Services",
      "Specialty Consumer"
    ]
  },
  {
    title: "Investment Stage",
    icon: Activity,
    details: [
      "Growth Equity investments",
      "Management Buyouts",
      "Founder recapitalizations",
      "Corporate carve-outs"
    ]
  },
  {
    title: "Geography",
    icon: MapPin,
    details: [
      "Headquartered in North America",
      "Focus on US and Canada",
      "Willing to support global expansion"
    ]
  }
];

export function Criteria() {
  return (
    <section id="criteria" className="py-24 bg-card/30 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-cover bg-fixed bg-center mix-blend-luminosity pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <SectionHeading 
              title="Investment Criteria" 
              alignment="left"
              subtitle="We maintain strict discipline in our investment focus, looking for businesses with specific structural characteristics."
            />
            <p className="text-muted-foreground font-light leading-relaxed mt-4">
              We look for established companies with defensible market positions, recurring revenue characteristics, and strong management teams that are ready to scale to the next level.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {criteria.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background border border-border/60 p-8 hover:border-primary/40 transition-colors shadow-lg shadow-black/10 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-card rounded-md group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                </div>
                <ul className="space-y-3">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground font-light text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
