import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const team = [
  {
    name: "Federico Pineda",
    role: "Founder & Managing Partner",
    location: "Caracas, Venezuela",
    bio: "Board Member at Grupo Catatumbo, a diversified industrial holding company in Western Venezuela. Former JPMorgan associate advising hedge funds and family offices with $2.5B+ AUM. Head of Capital Markets at Divibank (Maya Capital & BTV backed). Venezuelan-American with on-the-ground presence and institutional capital markets background.",
  },
  {
    name: "Esteban Pineda",
    role: "Senior Advisor",
    location: "Maracaibo, Venezuela",
    bio: "President & CEO of Cementos Catatumbo, the only privately owned cement company in Venezuela. Deep operating experience in industrial assets under prolonged macro stress. First-hand expertise in logistics, labor, and government relations in complex environments.",
  },
  {
    name: "Carlos Naupari",
    role: "Senior Advisor",
    location: "São Paulo, Brazil",
    bio: "Managing Partner of Velvet Investments, a São Paulo-based asset manager with $250M+ deployed into global private companies including SpaceX, OpenAI, Anthropic, and Anduril. Board member at Nortian (US biotech). Brings international capital allocation perspective across Latin America, the US, and the Middle East.",
  },
  {
    name: "Miguel Jimenez",
    role: "Senior Advisor",
    location: "Miami, USA",
    bio: "Former VP at SoftBank Investment Advisers with energy and water sector focus; board observer at Swell Energy and Plenty. MIT Sloan MBA; Co-Managing Director of the MIT Clean Energy Prize. Mentor at Endeavor. Brings deep technology investment and clean energy expertise across Latin America and the United States.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("");

export function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Team"
          subtitle="On-the-ground operators and institutional investors, united by a shared conviction in Venezuela's essential economy."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.14 }}
              className="bg-card border border-border/60 p-8 group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-sm bg-background border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_16px_rgba(212,175,55,0.1)]">
                <span className="font-display text-xl font-bold text-primary">
                  {initials(member.name)}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-xs tracking-widest uppercase mb-1">
                {member.role}
              </p>
              <p className="text-muted-foreground/60 text-xs mb-5">
                {member.location}
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
