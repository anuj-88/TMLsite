import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  technologies?: string[];
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  category, 
  description, 
  image, 
  link, 
  technologies = [], 
  delay = 0 
}) => {
  return (
    <AnimatedElement delay={delay}>
      <div className="card overflow-hidden h-full flex flex-col group">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform"
              >
                <ExternalLink size={20} className="text-blue-600" />
              </a>
            )}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <span className="text-sm text-blue-600 font-medium mb-2">{category}</span>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
          <p className="text-slate-600 mb-4 flex-grow">{description}</p>
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatedElement>
  );
};

export default ProjectCard;