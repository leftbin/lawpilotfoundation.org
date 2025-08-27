
import React from 'react';
import { Button } from '@/components/ui/button';
import { Scale, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                  <Scale className="w-7 h-7 text-slate-900" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                    LawPilot
                    <span className="block text-amber-400">Foundation</span>
                  </h1>
                </div>
              </div>

              <p className="text-xl lg:text-2xl text-slate-200 font-light leading-relaxed">
                Legal Aid for the Marginalized. Justice for All.
              </p>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                <p className="text-lg text-slate-300 italic mb-2">
                  Led by Dr. B. Karthik Navayan
                </p>
                <p className="text-slate-400">
                  Former Amnesty International Human Rights Advocate
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('get-involved')}
              >
                Request Legal Help
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Inspiration Quotes */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-amber-400">Inspiration & Legacy</h3>
              
              <div className="space-y-8">
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-amber-400 opacity-50" />
                  <blockquote className="text-slate-200 text-lg italic leading-relaxed pl-6">
                    "Justice has always evoked ideas of equality."
                  </blockquote>
                  <cite className="block text-amber-400 font-semibold mt-3 pl-6">
                    — Dr. B.R. Ambedkar
                  </cite>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-amber-400 opacity-50" />
                  <blockquote className="text-slate-200 text-lg italic leading-relaxed pl-6">
                    "Lack of education leads to lack of wisdom, which leads to slavery."
                  </blockquote>
                  <cite className="block text-amber-400 font-semibold mt-3 pl-6">
                    — Jyotirao Phule
                  </cite>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-amber-400 opacity-50" />
                  <blockquote className="text-slate-200 text-lg italic leading-relaxed pl-6">
                    "Law without justice is a wound without a cure."
                  </blockquote>
                  <cite className="block text-amber-400 font-semibold mt-3 pl-6">
                    — Justice V.R. Krishna Iyer
                  </cite>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
