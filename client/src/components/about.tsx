import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-orbitron text-4xl font-bold text-center mb-12 text-cyber-green"
          >
            <UserCheck className="inline mr-4" size={40} />
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-dark-bg p-6 rounded-lg border border-dark-border">
                <h3 className="font-orbitron text-2xl font-bold mb-4 text-cyber-green">Professional Summary</h3>
                <p className="text-gray-300 leading-relaxed">
                  I am a passionate Third-year cybersecurity student at Sathyabama Institute of Science and Technology, specializing in web exploitation and cryptography analysis. As an active Capture the Flag (CTF) player, I have honed my skills in identifying and exploiting vulnerabilities in diverse environments.
                </p>
              </div>
              
              <div className="bg-dark-bg p-6 rounded-lg border border-dark-border">
                <h3 className="font-orbitron text-2xl font-bold mb-4 text-cyber-green">Current Focus</h3>
                <p className="text-gray-300 leading-relaxed">
                  Currently, I am expanding my expertise into the world of bug bounty hunting, focusing on real-world applications and VAPT practices. My goal is to become a leading cybersecurity professional who can protect organizations from emerging threats.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Cybersecurity workspace with multiple monitors" 
                className="rounded-xl shadow-2xl border-2 border-cyber-green/30 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
