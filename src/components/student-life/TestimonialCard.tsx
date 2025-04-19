
import React from 'react';
import { CarouselItem } from "@/components/ui/carousel";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialCard = ({ quote, name, role, image }: TestimonialCardProps) => {
  return (
    <CarouselItem className="md:basis-1/2">
      <div className="p-6">
        <blockquote className="text-muted-foreground italic mb-4">
          {quote}
        </blockquote>
        <div className="flex items-center">
          <img 
            src={image} 
            alt={`${name}'s portrait`} 
            className="h-12 w-12 rounded-full object-cover mr-4"
          />
          <div>
            <h5 className="font-medium">{name}</h5>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};

export default TestimonialCard;
