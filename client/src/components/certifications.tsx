import { motion } from "framer-motion";
import { Award, Shield, University, Trophy, CheckCircle, Medal } from "lucide-react";

const certificationCategories = [
  {
    title: "Professional Certifications",
    icon: Shield,
    certifications: [
      "DCJSP (Defronix Certified Junior Security Professional)",
      "Master Ethical Hacking & Bug Bounty-OSCP 2.0",
    ],
  },
  {
    title: "Academic Certifications",
    icon: University,
    certifications: [
      "NPTEL Ethical Hacking",
      "NPTEL Java Programming",
    ],
  },
  {
    title: "CTF Achievements",
    icon: Trophy,
    certifications: [
      "1st Place - Horizon CTF",
      "1st Place - Innovative Challenge CTF",
    ],
  },
];

const stats = [
  { value: "5+", label: "Certifications" },
  { value: "2", label: "CTF Wins" },
  { value: "1", label: "Internship" },
  { value: "4", label: "Specializations" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-4xl font-bold text-center mb-12 text-cyber-green"
        >
          <Award className="inline mr-4" size={40} />
          Certifications & Achievements
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dark-bg p-6 rounded-lg border border-dark-border skill-card"
              >
                <div className="text-center mb-4">
                  <category.icon className="w-12 h-12 text-cyber-green mb-4 mx-auto" />
                  <h3 className="font-orbitron text-xl font-bold text-cyber-green">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.certifications.map((cert, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      {category.title === "CTF Achievements" ? (
                        <Medal className="w-5 h-5 text-cyber-green mt-0.5 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-cyber-green mt-0.5 flex-shrink-0" />
                      )}
                      <span className="text-gray-300 text-sm leading-relaxed">{cert}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Achievement Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 bg-dark-bg p-8 rounded-lg border border-dark-border"
          >
            <h3 className="font-orbitron text-2xl font-bold text-center mb-8 text-cyber-green">
              Achievement Statistics
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className="text-4xl font-bold text-cyber-green mb-2 cyber-glow">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
