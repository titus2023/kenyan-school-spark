
import React from 'react';
import { motion } from 'framer-motion';
import { Music, Trophy, Users, HeartHandshake, Lightbulb, Palette } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ActivityCard from './ActivityCard';
import TestimonialCard from './TestimonialCard';
import PhotoGallery from './PhotoGallery';

const StudentLifeSection = () => {
  const activities = [
    { 
      icon: Trophy, 
      title: "Sports",
      description: "From football to athletics, our students excel in various sports at regional and national levels.",
      image: "public/lovable-uploads/b0aefe2a-2477-47fa-b0c5-cc45cae82a55.png"
    },
    { 
      icon: Music, 
      title: "Music & Drama",
      description: "Award-winning modern dance that perform at major Music Festival.",
      image: "public/lovable-uploads/dd2ac2c0-db22-44df-854e-5f6fd888272c.png"
    },
    { 
      icon: Lightbulb, 
      title: "Clubs & Societies",
      description: "Over 10 clubs including debate, science, scouts, and environmental conservation.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
    },
    { 
      icon: HeartHandshake, 
      title: "Community Service",
      description: "Regular outreach programs that instill values of service and social responsibility.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=80"
    },
    { 
      icon: Users, 
      title: "Leadership Development",
      description: "Student council, prefect body, and mentorship programs that build tomorrow's leaders.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?w=800&auto=format&fit=crop&q=80"
    },
    { 
      icon: Palette, 
      title: "Arts & Creativity",
      description: "Visual arts, creative writing, and design programs that nurture creative expression.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=80"
    },
  ];

  const testimonials = [
    {
      quote: "Being part of the debate team at Jimba-Gede has helped me develop confidence and critical thinking skills. The teachers here don't just focus on academics but help us grow in every aspect of life.",
      name: "Kelvin Katana",
      role: "Form 3 Student",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&auto=format&fit=crop&q=80"
    },
    {
      quote: "The sports program at Jimba-Gede has taught me discipline and teamwork. I've competed at national level in athletics, an opportunity I wouldn't have had elsewhere. The school celebrates both academic and extracurricular achievements.",
      name: "Alex Rimba",
      role: "Form 4 Student",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80"
    },
    {
      quote: "The community service projects organized by the school have opened my eyes to the needs around us. Through these activities, I've learned the importance of giving back and making a positive impact in society.",
      name: "Marrium Pole",
      role: "Form 4 Student",
      image: "https://images.unsplash.com/photo-1536336132818-7f88e1ea2aa6?w=200&auto=format&fit=crop&q=80"
    }
  ];

  const galleryPhotos = [
    { src: "public/lovable-uploads/ac9de82b-8a85-4948-a999-1a131b062691.png", alt: "Students in class" },
    { src: "public/lovable-uploads/bd7a7496-ec95-4df9-9a2a-63871be0c296.png", alt: "School activities" },
    { src: "public/lovable-uploads/817da9b6-7f73-442b-823d-6f0f2996eb0c.png", alt: "Student meeting" },
    { src: "public/lovable-uploads/ce14d638-3f18-4058-9228-11b5eed74dac.png", alt: "School assembly" },
    { src: "https://images.unsplash.com/photo-1526675072445-6ec053b1de6c?w=500&auto=format&fit=crop&q=80", alt: "Sports event" },
    { src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=80", alt: "Art class" },
    { src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=500&auto=format&fit=crop&q=80", alt: "School trip" },
    { src: "https://images.unsplash.com/photo-1610226594738-20a0f09abbcc?w=500&auto=format&fit=crop&q=80", alt: "Graduation ceremony" }
  ];

  return (
    <section id="student-life" className="pattern-bg py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Student Life</h2>
          <div className="w-20 h-1 bg-kenya-accent mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            At Jimba-Gede Secondary School, we believe in developing well-rounded individuals through diverse 
            extracurricular activities and experiences outside the classroom.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <ActivityCard key={activity.title} {...activity} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg p-8 shadow-md mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Student Testimonials</h3>
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>

        <PhotoGallery photos={galleryPhotos} />
      </div>
    </section>
  );
};

export default StudentLifeSection;
