import { motion } from "framer-motion";
import { Briefcase, Shield, Keyboard, Image, Key } from "lucide-react";

const experiences = [
  {
    title: "DCAPT Program",
    company: "Defronix Academic",
    period: "September 2024 - Present",
    status: "Ongoing",
    description: "Comprehensive training in Vulnerability Assessment and Penetration Testing (VAPT).",
    highlights: [
      "Hands-on lab sessions involving real-world scenarios and advanced tools",
      "Advanced penetration testing methodologies",
      "Vulnerability assessment techniques",
      "Security tool proficiency development",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company: "Pinnacle Labs",
    period: "August 2024 - September 2024",
    status: "1 month",
    location: "Tamil Nadu, India",
    description: "Successfully completed a comprehensive cybersecurity internship focusing on four critical security domains.",
    projects: [
      {
        name: "Text Encryption",
        icon: Shield,
        description: "Developed secure text encryption algorithms and implementations",
      },
      {
        name: "Keylogger Development",
        icon: Keyboard,
        description: "Created ethical keylogger software for security research purposes",
      },
      {
        name: "Image Encryption",
        icon: Image,
        description: "Implemented advanced image encryption and steganography techniques",
      },
      {
        name: "Password Analysis",
        icon: Key,
        description: "Conducted comprehensive password security analysis and cracking",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-4xl font-bold text-center mb-12 text-cyber-green"
        >
          <Briefcase className="inline mr-4" size={40} />
          Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-dark-bg p-6 rounded-lg border border-dark-border"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-orbitron text-2xl font-bold text-cyber-green">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300 text-lg">{exp.company}</p>
                    {exp.location && (
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    )}
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-cyber-green font-semibold">{exp.period}</p>
                    <p className="text-gray-400">{exp.status}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  
                  {exp.highlights && (
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  
                  {exp.projects && (
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      {exp.projects.map((project) => (
                        <div 
                          key={project.name}
                          className="bg-dark-card p-4 rounded-lg border border-dark-border"
                        >
                          <h4 className="font-semibold text-cyber-green mb-2 flex items-center">
                            <project.icon className="w-4 h-4 mr-2" />
                            {project.name}
                          </h4>
                          <p className="text-gray-300 text-sm">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
