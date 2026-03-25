import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const team = [
  {
    name: "Alexander Vance",
    role: "Managing Partner",
    bio: "Over 20 years of private equity experience. Formerly a Managing Director at global investment firms, leading investments in enterprise software and business services.",
    image: "team-1.png"
  },
  {
    name: "Eleanor Sterling",
    role: "Partner",
    bio: "Specializes in healthcare IT and consumer sectors. Drives operational value creation strategies across the portfolio.",
    image: "team-2.png"
  },
  {
    name: "Marcus Chen",
    role: "Principal",
    bio: "Focuses on deal execution, financial modeling, and strategic add-on acquisitions. Prior experience in M&A investment banking.",
    image: "team-3.png"
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Leadership Team" 
          subtitle="Experienced investors and operators dedicated to building extraordinary companies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-sm bg-muted">
                <img 
                  src={`${import.meta.env.BASE_URL}images/${member.image}`} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <button className="p-2 bg-background/80 hover:bg-primary hover:text-background backdrop-blur-sm rounded-full transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-background/80 hover:bg-primary hover:text-background backdrop-blur-sm rounded-full transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <h3 className="font-display text-2xl font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">{member.role}</p>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
