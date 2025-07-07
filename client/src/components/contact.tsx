import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "lalithborana72@gmail.com",
    href: "mailto:lalithborana72@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9884183594",
    href: "tel:+919884183594",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Chennai-600001, India",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Lalith Kumar J",
    href: "https://linkedin.com/in/lalith-kumar-j",
  },
];

const availability = [
  "Available for new opportunities",
  "Open to cybersecurity internships",
  "Ready for CTF collaborations",
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-4xl font-bold text-center mb-12 text-cyber-green"
        >
          <Mail className="inline mr-4" size={40} />
          Get In Touch
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-xl text-gray-300 mb-8">
              Ready to collaborate on cybersecurity projects or discuss opportunities? Let's connect!
            </p>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400" 
              alt="Modern office building representing professional networking" 
              className="rounded-xl shadow-2xl w-full h-64 object-cover border-2 border-cyber-green/30"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {contactInfo.map((contact, index) => (
                <div key={contact.title} className="bg-dark-bg p-6 rounded-lg border border-dark-border">
                  <div className="flex items-center space-x-4">
                    <contact.icon className="w-8 h-8 text-cyber-green" />
                    <div>
                      <h3 className="font-orbitron text-lg font-bold text-cyber-green">
                        {contact.title}
                      </h3>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-gray-300 hover:text-cyber-green transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-dark-bg p-6 rounded-lg border border-dark-border">
                <h3 className="font-orbitron text-2xl font-bold text-cyber-green mb-6">
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  <Button className="w-full bg-cyber-green text-black hover:bg-matrix-green transition-colors duration-300 animate-glow">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-colors duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>

              <div className="bg-dark-bg p-6 rounded-lg border border-dark-border">
                <h3 className="font-orbitron text-2xl font-bold text-cyber-green mb-6">
                  Availability
                </h3>
                <div className="space-y-4">
                  {availability.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
