import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import NewsCard from './news/NewsCard';
import EventCard from './events/EventCard';
import SchoolCalendar from './events/SchoolCalendar';

const NewsEventsSection = () => {
  const newsItems = [
    {
      title: "Jimba-Gede Students Excel in National Science Competition",
      date: "April 10, 2025",
      excerpt: "Our Form 3 students won first place in the National Science Competition with their innovative water purification project.",
      image: "public/lovable-uploads/f30eb6b5-eeb4-47ed-ad31-fa4990f97919.png"
    },
    {
      title: "New Library Wing Opened by Education Cabinet Secretary",
      date: "March 15, 2025",
      excerpt: "The state-of-the-art facility adds 10,000 books and digital resources to our growing collection.",
      image: "public/lovable-uploads/81a28463-cdf6-4427-b230-877495d5db5b.png"
    },
    {
      title: "Jimba-Gede Choir Qualifies for East African Music Festival",
      date: "February 28, 2025",
      excerpt: "After winning the regional competition, our choir will represent Kenya at the East African Music Festival in Uganda.",
      image: "public/lovable-uploads/2e36467f-59c7-439a-bcc1-0ab6d9bebc53.png"
    }
  ];
  
  const upcomingEvents = [
    {
      title: "Annual Sports Day",
      date: "May 15, 2025",
      time: "8:00 AM - 4:00 PM",
      location: "School Sports Grounds",
      description: "A day filled with athletic competitions, team sports, and family activities."
    },
    {
      title: "Form 4 Parents Meeting",
      date: "May 20, 2025",
      time: "2:00 PM - 4:30 PM",
      location: "School Auditorium",
      description: "Discussion on KCSE preparation, university applications, and career guidance."
    },
    {
      title: "Cultural Arts Festival",
      date: "June 5-7, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "School Grounds",
      description: "Three days of music, dance, art exhibitions, and cultural performances from diverse Kenyan communities."
    },
    {
      title: "Science & Technology Fair",
      date: "July 12, 2025",
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
            Stay updated with the latest happenings at Jimba-Gede Secondary School and mark your calendar for upcoming events.
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
                <NewsCard key={index} {...news} index={index} />
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
                <EventCard key={index} {...event} index={index} />
              ))}
            </div>
            
            <SchoolCalendar />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default NewsEventsSection;
