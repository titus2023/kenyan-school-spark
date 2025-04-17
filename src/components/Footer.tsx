
import React from 'react';
import { PhoneCall, Mail, MapPin, ArrowRight, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-kenya-red rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-kenya-green rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-bold">Nyota Secondary School</span>
            </div>
            <p className="text-gray-400 mb-6">
              Nurturing excellence, character, and leadership for Kenya's future. Providing quality education since 1985.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> About Us
                </a>
              </li>
              <li>
                <a href="#curriculum" className="text-gray-400 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Academics
                </a>
              </li>
              <li>
                <a href="#student-life" className="text-gray-400 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Student Life
                </a>
              </li>
              <li>
                <a href="#admissions" className="text-gray-400 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Admissions
                </a>
              </li>
              <li>
                <a href="#news-events" className="text-gray-400 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> News & Events
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-kenya-red mr-3 mt-1" />
                <span className="text-gray-400">
                  Nyota Road, Karen, Nairobi, Kenya<br />
                  P.O. Box 12345-00100, Nairobi
                </span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 text-kenya-red mr-3" />
                <span className="text-gray-400">+254 712 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-kenya-red mr-3" />
                <span className="text-gray-400">info@nyotaschool.ac.ke</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive school updates and announcements.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-red text-white"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-kenya-red hover:bg-kenya-red/90 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Nyota Secondary School. All Rights Reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-500 hover:text-gray-400 mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 mx-2">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 mx-2">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
