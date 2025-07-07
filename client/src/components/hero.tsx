import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import profilePhoto from "@assets/profile-photo.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg/80 to-dark-bg/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src={profilePhoto} 
              alt="Lalith Kumar J - Cybersecurity Professional" 
              className="w-48 h-48 rounded-full mx-auto border-4 border-cyber-green shadow-2xl animate-glow object-cover"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-orbitron text-5xl md:text-7xl font-bold mb-4 cyber-glow"
          >
            LALITH KUMAR J
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="terminal-text text-xl md:text-2xl mb-6 animate-typing"
          >
            &gt; Cybersecurity Specialist & Ethical Hacker
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Third-year cybersecurity student specializing in web exploitation, cryptography analysis, and penetration testing. CTF champion and bug bounty hunter.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-cyber-green text-black px-8 py-3 hover:bg-matrix-green transition-colors duration-300 animate-glow font-semibold"
            >
              Get In Touch
            </Button>
            <Button
              onClick={() => scrollToSection("about")}
              variant="outline"
              className="border-2 border-cyber-green text-cyber-green px-8 py-3 hover:bg-cyber-green hover:text-black transition-colors duration-300 font-semibold"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
