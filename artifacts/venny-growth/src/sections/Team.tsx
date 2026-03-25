import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const team = [
  {
    name: "Federico Pineda",
    role: "Founder & Managing Partner",
    bio: "Board Member at Grupo Catatumbo, a diversified industrial holding company in Western Venezuela. Former JPMorgan associate advising hedge funds and family offices with $2.5B+ AUM. Head of Capital Markets at Divibank (Maya Capital & BTV backed). Venezuelan-American with on-the-ground presence and institutional capital markets background.",
    image: "team-1.png",
  },
  {
    name: "Esteban Pineda",
    role: "Senior Advisor",
    bio: "President & CEO of Cementos Catatumbo, a privately owned cement company in Venezuela. Deep operating experience in industrial assets under prolonged macro stress. First-hand expertise in logistics, labor, and government relations in complex environments.",
    image: "team-2.png",
  },
  {
    name: "Carlos Naupari",
    role: "Senior Advisor",
    bio: "Managing Partner of Velvet Investments, a São Paulo-based asset manager with $250M+ deployed into global private companies including SpaceX, OpenAI, Anthropic, and Anduril. Board member at Nortian (US biotech). Brings international capital allocation perspective across Latin America, the US, and the Middle East.",
    image: "team-3.png",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Team"
          subtitle="On-the-ground operators and institutional investors, united by a shared conviction in Venezuela's essential economy."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.14 }}
              className="group"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-sm bg-muted">
                <img
                  src={`${import.meta.env.BASE_URL}images/${member.image}`}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-xs tracking-widest uppercase mb-4">
                {member.role}
              </p>
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
