import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedElement from './AnimatedElement';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, delay = 0 }) => {
  return (
    <AnimatedElement delay={delay}>
      <div className="card p-6 h-full flex flex-col">
        <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
          <div className="text-blue-600">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 mb-6 flex-grow">{description}</p>
        <Link to={link} className="text-blue-600 font-medium inline-flex items-center group">
          Learn More 
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </AnimatedElement>
  );
};

export default ServiceCard;