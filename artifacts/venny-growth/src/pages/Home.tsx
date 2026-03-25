import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { TabbedSection } from "@/sections/TabbedSection";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <Navigation />
      <Hero />
      <TabbedSection />
      <Contact />
      <Footer />
    </main>
  );
}
