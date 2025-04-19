
import React from 'react';
import { motion } from 'framer-motion';
import { Music, Trophy, Users, HeartHandshake, Lightbulb, Palette } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const StudentLifeSection = () => {
  const activities = [
    { 
      icon: <Trophy className="h-6 w-6" />, 
      title: "Sports",
      description: "From football to athletics, our students excel in various sports at regional and national levels.",
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&auto=format&fit=crop&q=80"
    },
    { 
      icon: <Music className="h-6 w-6" />, 
      title: "Music & Drama",
      description: "Award-winning modern dance that perform at major Music Festival.",
      image: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?w=800&auto=format&fit=crop&q=80"
    },
    { 
      icon: <Lightbulb className="h-6 w-6" />, 
      title: "Clubs & Societies",
      description: "Over 10 clubs including debate, science, scouts, and environmental conservation.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
    },
    { 
      icon: <HeartHandshake className="h-6 w-6" />, 
      title: "Community Service",
      description: "Regular outreach programs that instill values of service and social responsibility.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=80"
    },
    { 
      icon: <Users className="h-6 w-6" />, 
      title: "Leadership Development",
      description: "Student council, prefect body, and mentorship programs that build tomorrow's leaders.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?w=800&auto=format&fit=crop&q=80"
    },
    { 
      icon: <Palette className="h-6 w-6" />, 
      title: "Arts & Creativity",
      description: "Visual arts, creative writing, and design programs that nurture creative expression.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=80"
    },
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
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-kenya-green/10 rounded-full mr-3">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold">{activity.title}</h3>
                </div>
                <p className="text-muted-foreground">{activity.description}</p>
              </div>
            </motion.div>
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
              <CarouselItem className="md:basis-1/2">
                <div className="p-6">
                  <blockquote className="text-muted-foreground italic mb-4">
                    "Being part of the debate team at Jimba-Gede has helped me develop confidence and critical thinking skills. 
                    The teachers here don't just focus on academics but help us grow in every aspect of life."
                  </blockquote>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&auto=format&fit=crop&q=80" 
                      alt="Student portrait" 
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h5 className="font-medium">Kelvin Katana</h5>
                      <p className="text-sm text-muted-foreground">Form 3 Student</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <div className="p-6">
                  <blockquote className="text-muted-foreground italic mb-4">
                    "The sports program at Jimba-Gede has taught me discipline and teamwork. I've competed at national level
                    in athletics, an opportunity I wouldn't have had elsewhere. The school celebrates both academic
                    and extracurricular achievements."
                  </blockquote>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80" 
                      alt="Student portrait" 
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h5 className="font-medium">Alex Rimba</h5>
                      <p className="text-sm text-muted-foreground">Form 4 Student</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <div className="p-6">
                  <blockquote className="text-muted-foreground italic mb-4">
                    "The community service projects organized by the school have opened my eyes to the needs around us.
                    Through these activities, I've learned the importance of giving back and making a positive impact in society."
                  </blockquote>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1536336132818-7f88e1ea2aa6?w=200&auto=format&fit=crop&q=80" 
                      alt="Student portrait" 
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h5 className="font-medium">Marrium Pole</h5>
                      <p className="text-sm text-muted-foreground">Form 4 Student</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">School Life Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  className="h-auto max-w-full rounded-lg transition-transform duration-500 hover:scale-110" 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=80" 
                  alt="Students in class"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  className="h-auto max-w-full rounded-lg transition-transform duration-500 hover:scale-110" 
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?w=500&auto=format&fit=crop&q=80" 
                  alt="School choir"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  className="h-auto max-w-full rounded-lg transition-transform duration-500 hover:scale-110" 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=80" 
                  alt="Science experiment"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  className="h-auto max-w-full rounded-lg transition-transform duration-500 hover:scale-110" 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=80" 
                  alt="School band"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  className="h-auto max-w-full rounded-lg transition-transform duration-500 hover:scale-110" 
                  src="https://images.unsplash.com/photo-1526675072445-6ec053b1de6c?w=500&auto=format&fit=crop&q=80" 
                  alt="Sports event"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  className="h-auto max-w-full rounded-lg transition-transform duration-500 hover:scale-110" 
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=80" 
                  alt="Art class"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  className="h-auto max-w-full rounded-lg transition-transform duration-500 hover:scale-110" 
                  src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=500&auto=format&fit=crop&q=80" 
                  alt="School trip"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  className="h-auto max-w-full rounded-lg transition-transform duration-500 hover:scale-110" 
                  src="https://images.unsplash.com/photo-1610226594738-20a0f09abbcc?w=500&auto=format&fit=crop&q=80" 
                  alt="Graduation ceremony"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-kenya-accent hover:bg-kenya-accent/90">
              View Full Gallery
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentLifeSection;
