import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Award, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const objectives = [
    "Promote access to justice through free legal aid and representation",
    "Establish legal aid mechanisms including clinics and mobile services",
    "Enhance legal awareness through workshops and campaigns",
    "Collaborate with legal professionals for pro bono services",
    "Conduct research and advocacy for human rights reform",
    "Raise funds lawfully to support marginalized communities"
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-amber-600 border-amber-200">
            About Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Mission & Story
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* About Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed">
                LawPilot Foundation is a non-profit organization established to ensure equitable 
                legal access for India's most disadvantaged communities. Our mission is to fight 
                caste-based injustice through legal empowerment, advocacy, and action.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Founded by Dr. B. Karthik Navayan, a renowned human rights activist, LawPilot 
                Foundation stands at the intersection of law and justice.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Through partnerships, volunteer networks, and legal professionals, we are building 
                a future where everyone, regardless of caste or background, can access justice and 
                assert their constitutional rights.
              </p>
            </div>
          </motion.div>

          {/* Founder Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Founder's Vision
                    </h3>
                    <div className="w-12 h-1 bg-amber-500 rounded-full" />
                  </div>
                </div>
                
                <blockquote className="text-lg text-slate-700 italic leading-relaxed mb-6">
                  "The Indian Constitution guarantees justice for all, but access remains unequal. 
                  LawPilot Foundation is our step toward bridging that gap — especially for SC/ST 
                  and marginalized communities."
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Dr. B. Karthik Navayan
                    </p>
                    <p className="text-sm text-slate-600">
                      Founder & Human Rights Advocate
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Mission & Objectives */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Target className="w-8 h-8 text-amber-400" />
                <h3 className="text-3xl lg:text-4xl font-bold">
                  Mission & Objectives
                </h3>
              </div>
              <div className="w-20 h-1 bg-amber-400 rounded-full mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors duration-300"
                >
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-slate-900 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    {objective}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}