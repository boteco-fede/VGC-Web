import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hourglass, TrendingUp, ShieldCheck, DollarSign, MapPin, Briefcase, Activity, CheckCircle2, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const tabs = [
  { id: "philosophy", label: "Philosophy" },
  { id: "criteria",   label: "Criteria"   },
  { id: "approach",   label: "Approach"   },
  { id: "team",       label: "Team"       },
];

/* ─── Philosophy ─────────────────────────────────────────────── */
const principles = [
  {
    icon: Hourglass,
    title: "Patient Capital",
    description:
      "We are not driven by arbitrary fund lifecycles. We provide flexible, long-term capital that aligns with the natural growth trajectory of your business.",
  },
  {
    icon: TrendingUp,
    title: "Operational Excellence",
    description:
      "Beyond capital, we bring deep operational expertise. We roll up our sleeves to optimize processes, refine strategies, and accelerate market expansion.",
  },
  {
    icon: ShieldCheck,
    title: "Aligned Incentives",
    description:
      "True partnership requires shared outcomes. We structure our investments so that we only succeed when founders and management teams succeed.",
  },
];

function PhilosophyPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {principles.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.12 }}
          className="bg-background border border-border/60 p-8 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
          <div className="w-14 h-14 rounded-lg bg-card border border-border flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:border-primary/30 transition-colors">
            <p.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
          </div>
          <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">{p.title}</h3>
          <p className="text-muted-foreground font-light leading-relaxed">{p.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Criteria ────────────────────────────────────────────────── */
const criteria = [
  {
    title: "Financial Profile",
    icon: DollarSign,
    details: ["$10M – $100M in Annual Revenue", "Positive EBITDA and cash flow", "History of stable, organic growth"],
  },
  {
    title: "Target Sectors",
    icon: Briefcase,
    details: ["Enterprise Software & Technology", "Healthcare IT & Services", "B2B Business Services", "Specialty Consumer"],
  },
  {
    title: "Investment Stage",
    icon: Activity,
    details: ["Growth Equity investments", "Management Buyouts", "Founder recapitalizations", "Corporate carve-outs"],
  },
  {
    title: "Geography",
    icon: MapPin,
    details: ["Headquartered in North America", "Focus on US and Canada", "Willing to support global expansion"],
  },
];

function CriteriaPanel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {criteria.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: i * 0.08 }}
          className="bg-background border border-border/60 p-8 hover:border-primary/40 transition-colors shadow-lg shadow-black/10 group"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-card rounded-md group-hover:bg-primary/10 transition-colors">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold">{item.title}</h3>
          </div>
          <ul className="space-y-3">
            {item.details.map((d, j) => (
              <li key={j} className="flex items-start gap-2 text-muted-foreground font-light text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Approach ────────────────────────────────────────────────── */
const playbook = [
  "Go-to-market strategy refinement and sales force effectiveness",
  "Digital transformation and technology stack modernization",
  "Strategic add-on acquisitions and post-merger integration",
  "Talent acquisition and organizational design",
];

function ApproachPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent blur-2xl rounded-3xl" />
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
          alt="Architecture representing structure and growth"
          className="relative w-full rounded-sm object-cover aspect-[4/3] border border-border/50 shadow-2xl"
        />
        <div className="absolute -bottom-6 -right-6 bg-card border border-border/50 p-5 rounded-sm shadow-xl hidden md:block">
          <div className="text-4xl font-display font-bold text-primary mb-1">3x</div>
          <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Average Revenue Growth</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h3 className="font-display text-3xl font-semibold leading-tight">
          We provide the framework, you provide the vision.
        </h3>
        <p className="text-muted-foreground font-light leading-relaxed text-lg">
          Our portfolio approach goes far beyond board meetings and financial engineering. We utilize a
          proprietary value creation playbook designed specifically for mid-market companies navigating
          critical inflection points.
        </p>
        <div className="space-y-4 pt-2">
          {playbook.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
              className="flex items-start gap-4"
            >
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground/90 font-light">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Team ───────────────────────────────────────────────────── */
const team = [
  {
    name: "Alexander Vance",
    role: "Managing Partner",
    bio: "Over 20 years of private equity experience. Formerly a Managing Director at global investment firms, leading investments in enterprise software and business services.",
    image: "team-1.png",
  },
  {
    name: "Eleanor Sterling",
    role: "Partner",
    bio: "Specializes in healthcare IT and consumer sectors. Drives operational value creation strategies across the portfolio.",
    image: "team-2.png",
  },
  {
    name: "Marcus Chen",
    role: "Principal",
    bio: "Focuses on deal execution, financial modeling, and strategic add-on acquisitions. Prior experience in M&A investment banking.",
    image: "team-3.png",
  },
];

function TeamPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {team.map((member, i) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: i * 0.14 }}
          className="group"
        >
          <div className="relative overflow-hidden aspect-[4/5] mb-5 rounded-sm bg-muted">
            <img
              src={`${import.meta.env.BASE_URL}images/${member.image}`}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <div className="flex gap-3">
                <button className="p-2 bg-background/80 hover:bg-primary hover:text-background backdrop-blur-sm rounded-full transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="p-2 bg-background/80 hover:bg-primary hover:text-background backdrop-blur-sm rounded-full transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-1">{member.name}</h3>
          <p className="text-primary font-medium text-xs tracking-widest uppercase mb-3">{member.role}</p>
          <p className="text-muted-foreground font-light text-sm leading-relaxed">{member.bio}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
const panelMap: Record<string, () => ReactNode> = {
  philosophy: () => <PhilosophyPanel />,
  criteria:   () => <CriteriaPanel />,
  approach:   () => <ApproachPanel />,
  team:       () => <TeamPanel />,
};

export function TabbedSection() {
  const [active, setActive] = useState("philosophy");

  useEffect(() => {
    const handler = (e: Event) => {
      const tab = (e as CustomEvent<string>).detail;
      if (tabs.some((t) => t.id === tab)) setActive(tab);
    };
    window.addEventListener("switchTab", handler);
    return () => window.removeEventListener("switchTab", handler);
  }, []);

  return (
    <section id="philosophy" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What We Stand For"
          subtitle="Everything we do flows from a set of deeply held beliefs about how the best companies are built and sustained."
        />

        {/* Tab bar */}
        <div className="mt-14 mb-12 flex flex-wrap gap-2 border-b border-border/50 pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={[
                "relative px-7 py-3 text-sm font-medium tracking-wider uppercase transition-colors duration-200 focus:outline-none",
                active === tab.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")}
            >
              {tab.label}
              {active === tab.id && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {panelMap[active]()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
