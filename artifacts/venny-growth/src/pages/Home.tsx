import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Philosophy } from "@/sections/Philosophy";
import { Criteria } from "@/sections/Criteria";
import { Approach } from "@/sections/Approach";
import { Team } from "@/sections/Team";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <Navigation />
      <Hero />
      <Philosophy />
      <Criteria />
      <Approach />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
