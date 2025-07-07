import { motion } from "framer-motion";
import { Cog, Code, Bug, Search, Monitor, Trophy, Lock } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
    ],
  },
  {
    title: "Penetration Testing",
    icon: Bug,
    skills: [
      { name: "Web App Testing", level: 95 },
      { name: "Network Testing", level: 85 },
      { name: "Android Testing", level: 80 },
    ],
  },
  {
    title: "Security Research",
    icon: Search,
    skills: [
      { name: "VAPT", level: 90 },
      { name: "OWASP Top 10", level: 95 },
      { name: "Social Engineering", level: 85 },
    ],
  },
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: [
      { name: "Linux", level: 90 },
      { name: "Windows", level: 85 },
    ],
  },
  {
    title: "CTF Player",
    icon: Trophy,
    skills: [
      { name: "1st Place Wins", level: 100, isNumber: true, value: "2" },
      { name: "Active Player", level: 100, isStatus: true },
    ],
  },
  {
    title: "Cryptography",
    icon: Lock,
    skills: [
      { name: "Analysis", level: 85 },
      { name: "Encryption", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-4xl font-bold text-center mb-12 text-cyber-green"
        >
          <Cog className="inline mr-4" size={40} />
          Skills & Expertise
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dark-card p-6 rounded-lg border border-dark-border skill-card"
              >
                <div className="text-center mb-4">
                  <category.icon className="w-12 h-12 text-cyber-green mb-4 mx-auto" />
                  <h3 className="font-orbitron text-xl font-bold text-cyber-green">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-white">{skill.name}</span>
                        {skill.isNumber ? (
                          <span className="text-cyber-green font-bold text-2xl">{skill.value}</span>
                        ) : skill.isStatus ? (
                          <span className="text-cyber-green font-semibold">Active</span>
                        ) : (
                          <span className="text-cyber-green">{skill.level}%</span>
                        )}
                      </div>
                      {!skill.isNumber && !skill.isStatus && (
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="progress-bar h-2 rounded-full"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
