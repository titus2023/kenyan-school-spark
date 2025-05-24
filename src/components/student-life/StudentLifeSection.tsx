
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
      image: "src/assets/images/clubs-societies.jpg"
    },
    { 
      icon: HeartHandshake, 
      title: "Community Service",
      description: "Regular outreach programs that instill values of service and social responsibility.",
      image: "src/assets/images/community-service.jpg"
    },
    { 
      icon: Users, 
      title: "Leadership Development",
      description: "Student council, prefect body, and mentorship programs that build tomorrow's leaders.",
      image: "src/assets/images/leadership-development.jpg"
    },
    { 
      icon: Palette, 
      title: "Arts & Creativity",
      description: "Visual arts, creative writing, and design programs that nurture creative expression.",
      image: "src/assets/images/arts-creativity.jpg"
    },
  ];

  const testimonials = [
    {
      quote: "Being part of the debate team at Jimba-Gede has helped me develop confidence and critical thinking skills. The teachers here don't just focus on academics but help us grow in every aspect of life.",
      name: "Kelvin Katana",
      role: "Form 3 Student",
      image: "src/assets/images/student-kelvin.jpg"
    },
    {
      quote: "The sports program at Jimba-Gede has taught me discipline and teamwork. I've competed at national level in athletics, an opportunity I wouldn't have had elsewhere. The school celebrates both academic and extracurricular achievements.",
      name: "Alex Rimba",
      role: "Form 4 Student",
      image: "src/assets/images/student-alex.jpg"
    },
    {
      quote: "The community service projects organized by the school have opened my eyes to the needs around us. Through these activities, I've learned the importance of giving back and making a positive impact in society.",
      name: "Marrium Pole",
      role: "Form 4 Student",
      image: "src/assets/images/student-marrium.jpg"
    }
  ];

  const galleryPhotos = [
    { src: "public/lovable-uploads/ac9de82b-8a85-4948-a999-1a131b062691.png", alt: "Students in class" },
    { src: "public/lovable-uploads/bd7a7496-ec95-4df9-9a2a-63871be0c296.png", alt: "School activities" },
    { src: "public/lovable-uploads/817da9b6-7f73-442b-823d-6f0f2996eb0c.png", alt: "Student meeting" },
    { src: "public/lovable-uploads/ce14d638-3f18-4058-9228-11b5eed74dac.png", alt: "School assembly" },
    { src: "src/assets/images/sports-event.jpg", alt: "Sports event" },
    { src: "src/assets/images/art-class.jpg", alt: "Art class" },
    { src: "src/assets/images/school-trip.jpg", alt: "School trip" },
    { src: "src/assets/images/graduation-ceremony.jpg", alt: "Graduation ceremony" }
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
