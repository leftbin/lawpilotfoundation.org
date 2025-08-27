import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scale, Users, BookOpen, FileText, Heart, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    {
      icon: Scale,
      title: "Free Legal Consultations",
      description: "Professional legal advice and consultations for marginalized groups at no cost",
      color: "bg-blue-500",
      lightColor: "bg-blue-50"
    },
    {
      icon: BookOpen,
      title: "Legal Literacy Camps",
      description: "Educational workshops to increase legal awareness and understanding of rights",
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50"
    },
    {
      icon: FileText,
      title: "FIR Support & Court Representation",
      description: "Assistance in filing FIRs and professional representation in legal proceedings",
      color: "bg-amber-500",
      lightColor: "bg-amber-50"
    },
    {
      icon: Shield,
      title: "Research & Documentation",
      description: "Comprehensive research and documentation of caste-based injustice cases",
      color: "bg-purple-500",
      lightColor: "bg-purple-50"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            LawPilot Foundation is committed to providing comprehensive legal aid and rights awareness 
            to India's Scheduled Castes (SC), Scheduled Tribes (ST), and other marginalized communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${service.lightColor} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                    <div className={`w-10 h-10 ${service.color} rounded-xl flex items-center justify-center`}>
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Who We Help Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Who We Help
            </h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We focus specifically on providing legal aid and rights awareness to India's 
              Scheduled Castes (SC), Scheduled Tribes (ST), and other marginalized communities 
              who face systemic barriers in accessing justice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}