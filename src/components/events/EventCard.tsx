
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  index: number;
}

const EventCard = ({ title, date, time, location, description, index }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md border-l-4 border-kenya-green card-hover"
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <div className="space-y-2 mb-4">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 text-kenya-green mr-2" />
          <span className="text-muted-foreground">{date}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 text-kenya-green mr-2" />
          <span className="text-muted-foreground">{time}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 text-kenya-green mr-2" />
          <span className="text-muted-foreground">{location}</span>
        </div>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default EventCard;
