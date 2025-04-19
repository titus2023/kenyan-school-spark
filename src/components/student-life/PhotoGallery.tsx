
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface PhotoGalleryProps {
  photos: Array<{
    src: string;
    alt: string;
  }>;
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-center">School Life Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[0, 1, 2, 3].map((columnIndex) => (
          <div key={columnIndex} className="grid gap-4">
            {photos.slice(columnIndex * 2, columnIndex * 2 + 2).map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img 
                  className="h-auto max-w-full rounded-lg transition-transform duration-500 hover:scale-110" 
                  src={photo.src}
                  alt={photo.alt}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button className="bg-kenya-accent hover:bg-kenya-accent/90">
          View Full Gallery
        </Button>
      </div>
    </motion.div>
  );
};

export default PhotoGallery;
