import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Certifications from "@/components/certifications";
import Languages from "@/components/languages";
import Contact from "@/components/contact";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const sections = [
  "home",
  "about",
  "skills",
  "experience",
  "education",
  "certifications",
  "languages",
  "contact",
];

export default function Home() {
  const activeSection = useScrollSpy(sections);

  useEffect(() => {
    // Set the document title
    document.title = "Lalith Kumar J - Cybersecurity Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <footer className="bg-dark-bg py-8 border-t border-dark-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-cyber-green rounded flex items-center justify-center">
                <span className="text-black font-bold">🛡️</span>
              </div>
              <span className="font-orbitron font-bold text-xl text-cyber-green">Lalith Kumar J</span>
            </div>
            <div className="text-center text-gray-400">
              <p>&copy; 2024 Lalith Kumar J. All rights reserved.</p>
              <p className="terminal-text text-sm mt-2">
                &gt; Securing the digital world, one vulnerability at a time.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
