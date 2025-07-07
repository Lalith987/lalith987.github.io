import { motion } from "framer-motion";
import { Languages as LanguagesIcon, MessageCircle, Globe, Heart } from "lucide-react";

const languages = [
  {
    name: "Hindi",
    level: "Native",
    proficiency: 100,
    description: "Native or Bilingual proficiency",
    icon: MessageCircle,
  },
  {
    name: "English",
    level: "Fluent",
    proficiency: 90,
    description: "Professional working proficiency",
    icon: Globe,
  },
  {
    name: "Tamil",
    level: "Intermediate",
    proficiency: 55,
    description: "Conversational proficiency",
    icon: Heart,
  },
];

export default function Languages() {
  return (
    <section id="languages" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-4xl font-bold text-center mb-12 text-cyber-green"
        >
          <LanguagesIcon className="inline mr-4" size={40} />
          Languages
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-dark-card p-8 rounded-lg border border-dark-border text-center skill-card"
              >
                <div className="mb-6">
                  <lang.icon className="w-12 h-12 text-cyber-green mb-4 mx-auto" />
                  <h3 className="font-orbitron text-2xl font-bold text-cyber-green">
                    {lang.name}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="text-lg font-semibold text-white">{lang.level}</div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="progress-bar h-3 rounded-full"
                    />
                  </div>
                  <p className="text-gray-300 text-sm">{lang.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
