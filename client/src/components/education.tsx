import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "B.E - Computer Science and Engineering",
    specialization: "Specialization in Cyber Security",
    institution: "Sathyabama Institute of Science and Technology",
    period: "2023 - 2027",
    status: "Current",
    description: "Pursuing Bachelor's degree with specialized focus on cybersecurity, including advanced coursework in:",
    coursework: [
      "Network Security and Cryptography",
      "Ethical Hacking and Penetration Testing",
      "Digital Forensics and Incident Response",
      "Secure Software Development",
    ],
  },
  {
    degree: "Higher Secondary Education",
    institution: "Motilal Forma Santana Dharma Higher Secondary School",
    period: "2022 - 2023",
    status: "Completed",
    details: [
      "12th Standard - Completed 2023",
      "11th Standard - Completed 2022",
    ],
  },
  {
    degree: "Secondary Education",
    institution: "Sri LG G Mat Higher Secondary School",
    period: "2021",
    status: "Completed",
    details: [
      "10th Standard - Completed 2021",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-4xl font-bold text-center mb-12 text-cyber-green"
        >
          <GraduationCap className="inline mr-4" size={40} />
          Education
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-dark-card p-6 rounded-lg border border-dark-border"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-orbitron text-2xl font-bold text-cyber-green">
                      {edu.degree}
                    </h3>
                    {edu.specialization && (
                      <p className="text-gray-300 text-lg">{edu.specialization}</p>
                    )}
                    <p className="text-gray-400">{edu.institution}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-cyber-green font-semibold">{edu.period}</p>
                    <p className="text-gray-400">{edu.status}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {edu.description && (
                    <p className="text-gray-300">{edu.description}</p>
                  )}
                  
                  {edu.coursework && (
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {edu.coursework.map((course, i) => (
                        <li key={i}>{course}</li>
                      ))}
                    </ul>
                  )}
                  
                  {edu.details && (
                    <div className="space-y-1">
                      {edu.details.map((detail, i) => (
                        <p key={i} className="text-gray-300">{detail}</p>
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
