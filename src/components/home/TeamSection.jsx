import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Nimma Narayana",
      role: "District Judge (Retired), Advocate, High Court for the State of Telangana",
      image: "/team/nimma-narayana.jpeg"
    },
    {
      name: "Benjamin Paul Babu Kaila",
      role: "Social Activist and IT Professional, America",
      image: "/team/benjamin-paul-babu-kaila.jpeg"
    },
    {
      name: "R Ravi Kumar",
      role: "Activist, Former Secretary, National Dalit Forum, Hyderabad",
      image: "/team/r-ravi-kumar.jpeg"
    },
    {
      name: "M A Shakeel",
      role: "Advocate, High Court of Telangana",
      image: "/team/m-a-shakeel.jpeg"
    },
    {
      name: "Satish Kumar",
      role: "Advocate, High Court of Rajasthan",
      image: "/team/satish-kumar.jpeg"
    },
    {
      name: "U D Jai Bhima Rao",
      role: "Advocate, High Court of Andhra Pradesh, Vijayawada",
      image: "/team/u-d-jai-bhima-rao.jpeg"
    },
    {
      name: "Dr B Karthik Navayan",
      role: "Advocate, High Court of Telangana, Hyderabad",
      image: "/team/dr-b-karthik-navayan.jpeg"
    },
    {
      name: "Nitin Meshram",
      role: "Advocate, Supreme Court of India",
      image: "/team/nitin-meshram.jpeg"
    },
    {
      name: "Satya Prakash Gautam",
      role: "Advocate, Supreme Court of India",
      image: "/team/satya-prakash-gautam.jpeg"
    },
    {
      name: "Dr Nalamasa Krishna",
      role: "Advocate, High Court of Telangana",
      image: "/team/dr-nalamasa-krishna.jpeg"
    },
    {
      name: "Srikanth Chintala",
      role: "Advocate, High Court of Telangana",
      image: "/team/srikanth-chintala.jpeg"
    },
    {
      name: "Kavita Nirmala Waman",
      role: "Legal Professional, Pune",
      image: "/team/kavita-nirmala-waman.jpeg"
    },
    {
      name: "Swapna Gumpula",
      role: "Advocate, Hyderabad",
      image: "/team/swapna-gumpula.jpeg"
    },
    {
      name: "Dr Sindhujaa Iyengar",
      role: "Legal Professional, Bangalore",
      image: "/team/dr-sindhujaa-iyengar.jpeg"
    },
    {
      name: "Degree Prasad Chouhan",
      role: "Advocate, High Court of Chhattisgarh, Bilaspur",
      image: "/team/degree-prasad-chouhan.jpeg"
    },
    {
      name: "E Sudarshan",
      role: "Advocate, Hyderabad",
      image: "/team/e-sudarshan.jpeg"
    },
    {
      name: "Paleti Maheshwar Rao",
      role: "Advocate, High Court of Andhra Pradesh",
      image: "/team/paleti-maheshwar-rao.jpeg"
    },
    {
      name: "G Rajasekhar",
      role: "Activist, Hyderabad",
      image: "/team/g-rajasekhar.jpeg"
    },
    {
      name: "Suraj Rajoriya",
      role: "Advocate, High Court of Madhya Pradesh",
      image: "/team/suraj-rajoriya.jpeg"
    },
    {
      name: "Tarun Tej",
      role: "Junior Advocate",
      image: "/team/tarun-tej.jpeg"
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
                    alt={`${member.name}${member.role ? ' - ' + member.role : ''}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg leading-tight">
                    {member.name}
                  </h3>
                  {member.role && (
                    <p className="text-slate-600 text-sm">
                      {member.role}
                    </p>
                  )}
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