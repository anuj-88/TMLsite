import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../components/ui/AnimatedElement';
import ProjectCard from '../components/ui/ProjectCard';
import TestimonialCard from '../components/ui/TestimonialCard';

const Portfolio: React.FC = () => {
  // Portfolio filter categories
  const categories = ["All", "Web Development", "Mobile Apps", "IT Infrastructure", "Cloud Solutions", "Digital Transformation"];
  
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Project data
  const projects = [
    {
      id: 1,
      title: "NextGen E-Commerce Platform",
      category: "Web Development",
      description: "A scalable e-commerce solution with advanced inventory management and customer analytics.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      id: 2,
      title: "HealthTrack Mobile App",
      category: "Mobile Apps",
      description: "A comprehensive health monitoring application with personalized insights and telemedicine features.",
      image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React Native", "Firebase", "TensorFlow"]
    },
    {
      id: 3,
      title: "Enterprise Infrastructure Overhaul",
      category: "IT Infrastructure",
      description: "Modernization of legacy IT systems for a multinational financial services company.",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Virtualization", "Network Security", "Disaster Recovery"]
    },
    {
      id: 4,
      title: "Cloud Migration Strategy",
      category: "Cloud Solutions",
      description: "End-to-end migration of on-premises applications to a hybrid cloud environment.",
      image: "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["AWS", "Azure", "Kubernetes", "Docker"]
    },
    {
      id: 5,
      title: "Supply Chain Management System",
      category: "Digital Transformation",
      description: "IoT-enabled supply chain solution with real-time tracking and predictive analytics.",
      image: "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["IoT", "Blockchain", "AI/ML", "Cloud"]
    },
    {
      id: 6,
      title: "Educational Platform Redesign",
      category: "Web Development",
      description: "Complete UX/UI overhaul and performance optimization for an online learning platform.",
      image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "GraphQL", "Node.js", "PostgreSQL"]
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Testimonial data
  const testimonials = [
    {
      name: "Garima Dwivedi",
      role: "CEO",
      company: "Saturn Mediaworks",
      testimonial: "The Machine Language team exceeded our expectations. They delivered our software project on time and within budget, and their ongoing support has been exceptional.",
      rating: 5,
      image: "/images/Garima.png"
    },
    {
      name: "Manas Shukla",
      role: "Operations Manager",
      company: "Globex Corporation",
      testimonial: "Their expertise in cloud infrastructure helped us reduce costs by 30% while improving performance. A true partner who understands our business needs.",
      rating: 5,
      image: "/images/manas.jpg"
    },
    {
      name: "Raghav Dubey",
      role: "Marketing Director",
      company: "Innovate Digital",
      testimonial: "The web application they built for us has transformed how we engage with customers. User-friendly, scalable, and exactly what we needed.",
      rating: 4,
      image: "/images/raghav.jpeg"
    },
    {
      name: "Kunj Sharma",
      role: "CEO",
      company: "HealthTech Solutions",
      testimonial: "Working with The Machine Language on our mobile health app was a game-changer. Their technical expertise and understanding of the healthcare industry made all the difference.",
      rating: 5,
      image: "/images/kunj.jpeg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedElement>
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Portfolio
              </span>
            </AnimatedElement>
            
            <AnimatedElement delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Showcasing Our Success Stories
              </h1>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <p className="text-lg text-slate-600 mb-8">
                Explore our portfolio of successful projects across various industries and technologies.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedElement>
            <h2 className="section-title">Featured Project</h2>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <AnimatedElement delay={100}>
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-sm font-medium mb-4">
                  Digital Transformation
                </span>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Enterprise Digital Transformation for Global Retailer
                </h3>
                
                <p className="text-slate-600 mb-6">
                  We partnered with a leading global retail chain to completely transform their digital ecosystem, from customer-facing applications to back-office operations.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-semibold text-slate-900">Challenge</h4>
                      <p className="text-slate-600">Fragmented systems leading to data silos, inefficient operations, and poor customer experience.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-semibold text-slate-900">Solution</h4>
                      <p className="text-slate-600">Comprehensive digital transformation including unified data platform, omnichannel customer experience, and AI-driven operations.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-semibold text-slate-900">Results</h4>
                      <p className="text-slate-600">42% increase in operational efficiency, 28% growth in online sales, and significantly improved customer satisfaction scores.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Cloud Migration", "Data Integration", "AI/ML", "Custom Software", "UX/UI Design"].map((tech, index) => (
                    <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </AnimatedElement>
            </div>
            
            <div>
              <AnimatedElement delay={200}>
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Digital Transformation Project" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter & Projects */}
      <section className="section bg-slate-50">
        <div className="container">
          <AnimatedElement>
            <h2 className="section-title text-center">Our Projects</h2>
          </AnimatedElement>
          <AnimatedElement delay={100}>
            <p className="section-subtitle text-center">
              Browse through our diverse portfolio of successful client projects.
            </p>
          </AnimatedElement>
          
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-12 mb-10">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                delay={200 + index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedElement>
            <h2 className="section-title text-center">Client Testimonials</h2>
          </AnimatedElement>
          <AnimatedElement delay={100}>
            <p className="section-subtitle text-center">
              Don't just take our word for it - here's what our clients have to say about working with us.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                image={testimonial.image}
                delay={200 + index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section bg-slate-50">
        <div className="container">
          <AnimatedElement>
            <h2 className="section-title text-center">Companies We've Worked With</h2>
          </AnimatedElement>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <AnimatedElement key={index} delay={200 + index * 100}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-center justify-center h-24">
                  <div className="text-slate-300 font-bold text-lg">Client Logo</div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your Success Story?
              </h2>
            </AnimatedElement>
            
            <AnimatedElement delay={100}>
              <p className="text-blue-100 mb-8 text-lg">
                Let's discuss how we can help you achieve your technology goals and create your own success story.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-blue-50">
                Start Your Project
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;