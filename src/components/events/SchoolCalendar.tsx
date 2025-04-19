
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const SchoolCalendar = () => {
  return (
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
          <p className="text-muted-foreground">Jan 8 - Apr 5, 2025</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <h4 className="font-semibold mb-2">Term 2</h4>
          <p className="text-muted-foreground">Apr 29 - Aug 2, 2025</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <h4 className="font-semibold mb-2">Term 3</h4>
          <p className="text-muted-foreground">Aug 26 - Nov 1, 2025</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center">
          <h4 className="font-semibold mb-2">KCSE Exams</h4>
          <p className="text-muted-foreground">Nov 4 - Nov 29, 2025</p>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <Button className="bg-kenya-green hover:bg-kenya-green/90">
          Download Full Academic Calendar
        </Button>
      </div>
    </motion.div>
  );
};

export default SchoolCalendar;
