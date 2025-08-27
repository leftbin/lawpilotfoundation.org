
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, HandHeart, Scale, Users, ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GetInvolvedSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const involvementOptions = [
    {
      icon: Scale,
      title: "Request Legal Help",
      description: "Get free legal consultation and support for discrimination, harassment, or rights violations",
      action: "Contact Us to Get Help",
      color: "bg-red-500",
      lightColor: "bg-red-50"
    },
    {
      icon: HandHeart,
      title: "Volunteer With Us",
      description: "Join our mission as a legal professional, researcher, or community advocate",
      action: "Contact Us to Volunteer",
      color: "bg-blue-500",
      lightColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Join Our Network",
      description: "Connect with legal professionals committed to social justice and human rights",
      action: "Contact Us to Join",
      color: "bg-green-500",
      lightColor: "bg-green-50"
    },
    {
      icon: Heart,
      title: "Support Our Cause",
      description: "Contribute financially or through in-kind support to help establish sustainable operations",
      action: "Contact Us to Support",
      color: "bg-purple-500",
      lightColor: "bg-purple-50"
    }
  ];

  return (
    <section id="get-involved" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-amber-600 border-amber-200">
            Get Involved
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            How You Can Make a Difference
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join our movement for justice and equality. Whether you need help or want to help others, 
            there are many ways to be part of the change.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {involvementOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${option.lightColor} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-10 h-10 ${option.color} rounded-xl flex items-center justify-center`}>
                      <option.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-4">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {option.description}
                  </p>
                  <Button 
                    size="lg"
                    className={`${option.color} hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full`}
                    onClick={scrollToContact}
                  >
                    {option.action}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Event Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <Calendar className="w-16 h-16 mx-auto mb-6 text-amber-400" />
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Join Our Inception Meeting
          </h3>
          <p className="text-xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            LawPilot Foundation's first Members' Meeting and Legal Training 
            scheduled for October 2-3, 2025, in Hyderabad, Telangana.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-slate-800/50 rounded-xl p-6">
              <h4 className="font-bold text-amber-400 mb-3">What's Included:</h4>
              <ul className="space-y-2 text-slate-200">
                <li>• Members' Meeting and strategic planning</li>
                <li>• Legal training workshops</li>
                <li>• Networking with legal professionals</li>
                <li>• Food and accommodation provided</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6">
              <h4 className="font-bold text-amber-400 mb-3">Who Should Attend:</h4>
              <ul className="space-y-2 text-slate-200">
                <li>• Lawyers and legal professionals</li>
                <li>• Human rights advocates</li>
                <li>• Social justice activists</li>
                <li>• Well-wishers and supporters</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <Button 
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={scrollToContact}
            >
              Register for Event
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
