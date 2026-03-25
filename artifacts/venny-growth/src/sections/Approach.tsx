import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export function Approach() {
  return (
    <section id="approach" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="The Value Creation Playbook" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-gold opacity-10 blur-2xl rounded-3xl"></div>
            {/* abstract architectural business building */}
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" 
              alt="Modern architectural lines representing structure and growth" 
              className="relative w-full rounded-sm object-cover aspect-[4/3] border border-border/50 shadow-2xl"
            />
            
            {/* Floating stat card */}
            <div className="absolute -bottom-8 -right-8 bg-card border border-border/50 p-6 rounded-sm shadow-xl hidden md:block glass-card">
              <div className="text-4xl font-display font-bold text-primary mb-1">3x</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Average Revenue Growth</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="font-display text-3xl font-semibold leading-tight">
              We provide the framework, you provide the vision.
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              Our portfolio approach goes far beyond board meetings and financial engineering. 
              We utilize a proprietary value creation playbook designed specifically for mid-market 
              companies navigating critical inflection points.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                "Go-to-market strategy refinement and sales force effectiveness",
                "Digital transformation and technology stack modernization",
                "Strategic add-on acquisitions and post-merger integration",
                "Talent acquisition and organizational design"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground/90 font-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
