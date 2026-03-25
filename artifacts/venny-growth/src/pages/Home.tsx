import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { WhatWeDo } from "@/sections/WhatWeDo";
import { Opportunity } from "@/sections/Opportunity";
import { Team } from "@/sections/Team";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <Opportunity />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
