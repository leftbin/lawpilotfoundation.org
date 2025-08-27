import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "lawpilotfoundation@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9985673139, +91 8179206638",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "H. No.4-133/5, Sai Priya Colony, Shadnagar, Rangareddy Dist. Telangana-509216",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "We respond to all inquiries within 24-48 hours",
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            Contact Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to seek legal help or join our mission? Reach out to us and be part of the 
            movement for justice and equality.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <info.icon className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">
                    {info.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed break-words">
                    {info.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-slate-200 text-center"
        >
          <p className="text-slate-600">
            © 2025 LawPilot Foundation · All Rights Reserved
          </p>
          <p className="text-slate-500 text-sm mt-2">
            A non-profit organization dedicated to legal empowerment and social justice
          </p>
        </motion.div>
      </div>
    </section>
  );
}