import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Book, Users, ArrowLeft, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative">
      {/* Hero background */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('public/lovable-uploads/783a8bfb-77e0-44cd-81ae-9391a8bca754.png')" }}
      >
        <div className="section-container relative z-20 text-white">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2"
            >
              <span className="inline-block px-4 py-1 bg-kenya-red rounded-full text-sm font-medium mb-4">Welcome to</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Jimba Gede Secondary School
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl"
            >
              Nurturing excellence, character, and leadership for Kenya's future. We provide a comprehensive education that balances academic excellence with cultural values and personal development.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-kenya-green hover:bg-kenya-green/90 text-white px-6 py-6 text-lg rounded-lg"
              >
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-6 py-6 text-lg rounded-lg"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Info Cards */}
      <div className="bg-white py-6 relative z-20">
        <div className="section-container py-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <div className="flex items-start">
                <div className="p-3 bg-kenya-red/10 rounded-full mr-4">
                  <Calendar className="h-8 w-8 text-kenya-red" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">School Calendar</h3>
                  <p className="text-muted-foreground mb-3">Term 2 starts April 29, 2025. View our full academic calendar.</p>
                  <a href="#calendar" className="text-kenya-red font-medium flex items-center hover:underline">
                    View Calendar <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <div className="flex items-start">
                <div className="p-3 bg-kenya-green/10 rounded-full mr-4">
                  <Book className="h-8 w-8 text-kenya-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Academic Excellence</h3>
                  <p className="text-muted-foreground mb-3">Ranked among top focused schools in Kenya. With a recognized university placement rate.</p>
                  <a href="#curriculum" className="text-kenya-green font-medium flex items-center hover:underline">
                    Our Curriculum <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <div className="flex items-start">
                <div className="p-3 bg-kenya-accent/10 rounded-full mr-4">
                  <Users className="h-8 w-8 text-kenya-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Student Life</h3>
                  <p className="text-muted-foreground mb-3">Over 10 clubs and sports teams. Well-rounded development for every student.</p>
                  <a href="#student-life" className="text-kenya-accent font-medium flex items-center hover:underline">
                    Explore Activities <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
