
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const NewsEventsSection = () => {
  const newsItems = [
    {
      title: "Nyota Students Excel in National Science Competition",
      date: "April 10, 2024",
      excerpt: "Our Form 3 students won first place in the National Science Competition with their innovative water purification project.",
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "New Library Wing Opened by Education Cabinet Secretary",
      date: "March 15, 2024",
      excerpt: "The state-of-the-art facility adds 10,000 books and digital resources to our growing collection.",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "Nyota Choir Qualifies for East African Music Festival",
      date: "February 28, 2024",
      excerpt: "After winning the regional competition, our choir will represent Kenya at the East African Music Festival in Uganda.",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&auto=format&fit=crop&q=80"
    },
  ];
  
  const upcomingEvents = [
    {
      title: "Annual Sports Day",
      date: "May 15, 2024",
      time: "8:00 AM - 4:00 PM",
      location: "School Sports Grounds",
      description: "A day filled with athletic competitions, team sports, and family activities."
    },
    {
      title: "Form 4 Parents Meeting",
      date: "May 20, 2024",
      time: "2:00 PM - 4:30 PM",
      location: "School Auditorium",
      description: "Discussion on KCSE preparation, university applications, and career guidance."
    },
    {
      title: "Cultural Arts Festival",
      date: "June 5-7, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "School Grounds",
      description: "Three days of music, dance, art exhibitions, and cultural performances from diverse Kenyan communities."
    },
    {
      title: "Science & Technology Fair",
      date: "July 12, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Science Complex",
      description: "Student projects and innovations showcasing scientific principles and technological solutions."
    },
  ];

  return (
    <section id="news-events" className="pattern-bg py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">News & Events</h2>
          <div className="w-20 h-1 bg-kenya-accent mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Stay updated with the latest happenings at Nyota Secondary School and mark your calendar for upcoming events.
          </p>
        </motion.div>

        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full md:w-fit mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="news">School News</TabsTrigger>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="news" className="focus-visible:outline-none focus-visible:ring-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-4 w-4 text-kenya-red mr-2" />
                      <span className="text-sm text-muted-foreground">{news.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                    <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                    <a href="#" className="text-kenya-red font-medium flex items-center hover:underline">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button className="bg-kenya-red hover:bg-kenya-red/90">
                View All News
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="events" className="focus-visible:outline-none focus-visible:ring-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-kenya-green card-hover"
                >
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-kenya-green mr-2" />
                      <span className="text-muted-foreground">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-kenya-green mr-2" />
                      <span className="text-muted-foreground">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-kenya-green mr-2" />
                      <span className="text-muted-foreground">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-10 bg-muted p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">School Calendar Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Term 1</h4>
                  <p className="text-muted-foreground">Jan 8 - Apr 5, 2024</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Term 2</h4>
                  <p className="text-muted-foreground">Apr 29 - Aug 2, 2024</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Term 3</h4>
                  <p className="text-muted-foreground">Aug 26 - Nov 1, 2024</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">KCSE Exams</h4>
                  <p className="text-muted-foreground">Nov 4 - Nov 29, 2024</p>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <Button className="bg-kenya-green hover:bg-kenya-green/90">
                  Download Full Academic Calendar
                </Button>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default NewsEventsSection;
