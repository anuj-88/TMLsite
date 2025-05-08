import React from 'react';
import { Star } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  image?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  company, 
  testimonial, 
  rating, 
  image, 
  delay = 0 
}) => {
  return (
    <AnimatedElement delay={delay}>
      <div className="card p-6 h-full flex flex-col">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star 
              key={index} 
              size={18} 
              className={index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'} 
            />
          ))}
        </div>
        <p className="text-slate-700 italic mb-6 flex-grow">"{testimonial}"</p>
        <div className="flex items-center mt-auto">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover mr-4" 
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <h4 className="font-semibold text-slate-900">{name}</h4>
            <p className="text-sm text-slate-600">{role}, {company}</p>
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default TestimonialCard;