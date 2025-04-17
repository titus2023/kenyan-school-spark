
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Contact Us</h2>
          <div className="w-20 h-1 bg-kenya-accent mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            We'd love to hear from you. Reach out to us with any questions or schedule a visit to our campus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-green"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-green"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-green"
                  placeholder="Email Address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-green"
                  placeholder="Phone Number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-green">
                  <option value="">Select Subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="tour">Campus Tour Request</option>
                  <option value="employment">Employment Opportunities</option>
                  <option value="general">General Information</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-kenya-green"
                  rows={5}
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-kenya-red hover:bg-kenya-red/90">
                Send Message
              </Button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="p-2 bg-kenya-red/10 rounded-full mr-4 mt-1">
                  <MapPin className="h-5 w-5 text-kenya-red" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Our Location</h4>
                  <p className="text-muted-foreground">Nyota Road, Karen, Nairobi, Kenya</p>
                  <p className="text-muted-foreground">P.O. Box 12345-00100, Nairobi</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-kenya-green/10 rounded-full mr-4 mt-1">
                  <Phone className="h-5 w-5 text-kenya-green" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone Numbers</h4>
                  <p className="text-muted-foreground">Main Office: +254 712 345 678</p>
                  <p className="text-muted-foreground">Admissions: +254 723 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-kenya-accent/10 rounded-full mr-4 mt-1">
                  <Mail className="h-5 w-5 text-kenya-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Addresses</h4>
                  <p className="text-muted-foreground">General Inquiries: info@nyotaschool.ac.ke</p>
                  <p className="text-muted-foreground">Admissions: admissions@nyotaschool.ac.ke</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-kenya-earth/10 rounded-full mr-4 mt-1">
                  <Clock className="h-5 w-5 text-kenya-earth" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Office Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 8:00 AM - 12:00 PM (By appointment)</p>
                  <p className="text-muted-foreground">Sunday & Public Holidays: Closed</p>
                </div>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="p-3 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5 text-[#1877F2]" />
              </a>
              <a href="#" className="p-3 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 rounded-full transition-colors duration-300">
                <Twitter className="h-5 w-5 text-[#1DA1F2]" />
              </a>
              <a href="#" className="p-3 bg-[#E4405F]/10 hover:bg-[#E4405F]/20 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5 text-[#E4405F]" />
              </a>
              <a href="#" className="p-3 bg-[#FF0000]/10 hover:bg-[#FF0000]/20 rounded-full transition-colors duration-300">
                <Youtube className="h-5 w-5 text-[#FF0000]" />
              </a>
            </div>
            
            <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.60214748951!2d36.7054340152655!3d-1.317285413047619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0xf022aae2e16eef33!2sKaren%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1714248046517!5m2!1sen!2ske" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
