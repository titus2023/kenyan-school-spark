
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-kenya-red rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-kenya-green rounded-full"></div>
                  </div>
                </div>
                <span className="text-xl font-bold text-kenya-black">Jimba-Gede Secondary School</span>
              </div>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="nav-link cursor-pointer" 
              onClick={() => scrollToSection('home')}
            >
              Home
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="nav-link cursor-pointer" 
              onClick={() => scrollToSection('about')}
            >
              About
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative nav-link cursor-pointer"
            >
              <div className="flex items-center">
                Academics
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
              <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-48">
                <div className="py-1 px-2 hover:bg-muted rounded cursor-pointer" onClick={() => scrollToSection('curriculum')}>Curriculum</div>
                <div className="py-1 px-2 hover:bg-muted rounded cursor-pointer" onClick={() => scrollToSection('facilities')}>Facilities</div>
                <div className="py-1 px-2 hover:bg-muted rounded cursor-pointer" onClick={() => scrollToSection('achievements')}>Achievements</div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="nav-link cursor-pointer" 
              onClick={() => scrollToSection('student-life')}
            >
              Student Life
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="nav-link cursor-pointer" 
              onClick={() => scrollToSection('admissions')}
            >
              Admissions
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="nav-link cursor-pointer" 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </motion.div>
          </div>

          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button 
                onClick={() => scrollToSection('admissions')} 
                className="bg-kenya-green hover:bg-kenya-green/90 text-white"
              >
                Apply Now
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-kenya-accent focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted cursor-pointer" onClick={() => scrollToSection('home')}>Home</div>
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted cursor-pointer" onClick={() => scrollToSection('about')}>About</div>
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted cursor-pointer" onClick={() => scrollToSection('curriculum')}>Curriculum</div>
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted cursor-pointer" onClick={() => scrollToSection('student-life')}>Student Life</div>
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted cursor-pointer" onClick={() => scrollToSection('facilities')}>Facilities</div>
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted cursor-pointer" onClick={() => scrollToSection('admissions')}>Admissions</div>
            <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</div>
            <div className="mt-4">
              <Button onClick={() => scrollToSection('admissions')} className="w-full bg-kenya-green hover:bg-kenya-green/90 text-white">Apply Now</Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
