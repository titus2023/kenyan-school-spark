
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Target, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="pattern-bg py-8 md:py-18">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Our School</h2>
          <div className="w-20 h-1 bg-kenya-accent mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Founded in 1985, Jimba-Gede Secondary School has been a beacon of academic excellence and character 
            development in Kilifi County, Kenya for over three decades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 border-l-4 border-kenya-red pl-4">Our History & Heritage</h3>
            <p className="mb-4 text-muted-foreground">
              Jimba-Gede Secondary School was established with a vision to provide quality education 
              that would empower young Kenyans to become leaders in their communities and beyond.
            </p>
            <p className="mb-6 text-muted-foreground">
              Over the years, we have grown from a small institution with just 50 students to one of 
              the most respected educational establishments in the region, with state-of-the-art 
              facilities and a track record of excellence.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <Check className="text-kenya-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                <p>Consistently ranked among the top 10 schools in KCSE result in Watamu Zone</p>
              </div>
              <div className="flex items-start">
                <Check className="text-kenya-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                <p>Over 5,000 alumni in leadership positions across the globe</p>
              </div>
              <div className="flex items-start">
                <Check className="text-kenya-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                <p>Award-winning programs in science, arts, and athletics</p>
              </div>
              <div className="flex items-start">
                <Check className="text-kenya-green mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                <p>Strong community service emphasis with national recognition</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80" 
              alt="School building" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              style={{ height: "450px" }}
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
              <p className="text-lg font-medium">"Our beautiful school boasts modern facilities and a nurturing environment."</p>
            </div>
          </motion.div>
        </div>
        
        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md card-hover"
          >
            <div className="p-3 bg-kenya-red/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-kenya-red" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide a holistic education that nurtures academic excellence, character development, 
              and leadership skills, empowering our students to be responsible citizens and transformative 
              leaders in Kenya and beyond.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md card-hover"
          >
            <div className="p-3 bg-kenya-green/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-kenya-green" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the leading secondary school in Kenya, recognized for our academic excellence, 
              innovative teaching methods, and graduates who are ethical leaders making significant 
              contributions to society.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md card-hover"
          >
            <div className="p-3 bg-kenya-accent/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-kenya-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Values</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-kenya-accent rounded-full mr-2"></span>
                <span>Excellence in all endeavors</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-kenya-accent rounded-full mr-2"></span>
                <span>Integrity and ethical conduct</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-kenya-accent rounded-full mr-2"></span>
                <span>Respect for diversity and inclusion</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-kenya-accent rounded-full mr-2"></span>
                <span>Innovation and creativity</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-kenya-accent rounded-full mr-2"></span>
                <span>Community service and responsibility</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
