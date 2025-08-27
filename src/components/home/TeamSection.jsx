import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. B. Karthik Navayan",
      role: "Founder & Advocate",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6a63f6ffb_WhatsAppImage2025-08-25at160840.jpg"
    },
    {
      name: "Srikanth Chintala",
      role: "Coordinator & Advocate",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/eb06f97ad_WhatsAppImage2025-08-25at1608393.jpeg"
    },
    {
      name: "Swapna Gumpula",
      role: "Coordinator & Advocate",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/fbf2395ba_WhatsAppImage2025-08-25at1608331.jpg"
    },
    {
      name: "Senior Advocate",
      role: "Legal Advisor",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/71893c999_WhatsAppImage2025-08-25at160839.jpg"
    },
    {
      name: "Legal Advocate",
      role: "Senior Counsel",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f7997741e_WhatsAppImage2025-08-25at1608381.jpeg"
    },
    {
      name: "Senior Legal Professional",
      role: "Advocate",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7979eaf7c_WhatsAppImage2025-08-25at160838.jpeg"
    },
    {
      name: "Legal Expert",
      role: "Human Rights Advocate",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c0d8612c1_WhatsAppImage2025-08-25at1608391.jpeg"
    },
    {
      name: "Senior Counsel",
      role: "Legal Advisor",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/66189cf87_WhatsAppImage2025-08-25at1608392.jpg"
    },
    {
      name: "Legal Advocate",
      role: "Rights Activist",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/81d6c71e5_WhatsAppImage2025-08-25at1608371.jpg"
    },
    {
      name: "Senior Legal Advisor",
      role: "Constitutional Expert",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f55a3a173_WhatsAppImage2025-08-25at1608372.jpeg"
    },
    {
      name: "Legal Professional",
      role: "Social Justice Advocate",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2974fe9cc_WhatsAppImage2025-08-25at160837.jpeg"
    },
    {
      name: "Senior Advocate",
      role: "Legal Researcher",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c7a179e73_WhatsAppImage2025-08-25at160836.jpeg"
    }
  ];

  return (
    <section id="team" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            Our Team
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Legal Professionals Fighting for Justice
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated team of legal experts, advocates, and human rights activists 
            committed to serving marginalized communities across India.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
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
              Building a Network of Justice
            </h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Our growing network of legal professionals, advocates, and volunteers work together 
              to ensure that no one is denied justice due to their social or economic status.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}