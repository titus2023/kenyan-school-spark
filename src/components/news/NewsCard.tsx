
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  index: number;
}

const NewsCard = ({ title, date, excerpt, image, index }: NewsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <Calendar className="h-4 w-4 text-kenya-red mr-2" />
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <a href="#" className="text-kenya-red font-medium flex items-center hover:underline">
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default NewsCard;
