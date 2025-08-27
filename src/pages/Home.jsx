import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Scale, Users, BookOpen, Shield, Heart, ArrowRight, Quote } from 'lucide-react';

import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import TeamSection from '../components/home/TeamSection';
import GetInvolvedSection from '../components/home/GetInvolvedSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <GetInvolvedSection />
      <ContactSection />
    </div>
  );
}