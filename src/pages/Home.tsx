import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Server, 
  Smartphone, 
  Cloud, 
  PenTool, 
  ArrowRight, 
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import AnimatedElement from '../components/ui/AnimatedElement';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedElement>
                <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Innovative IT Solutions
                </span>
              </AnimatedElement>
              
              <AnimatedElement delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  Transforming Ideas Into <span className="text-blue-600">Digital Reality</span>
                </h1>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <p className="text-lg text-slate-600 mb-8 max-w-xl">
                  The Machine Language delivers cutting-edge technology solutions to help your business innovate, adapt, and thrive in today's fast-paced digital landscape.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn btn-primary">
                    Get Started
                  </Link>
                  <Link to="/services" className="btn btn-outline">
                    Explore Services
                  </Link>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={400}>
                <div className="mt-12 flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-600 font-medium">
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-600">Trusted by businesses worldwide</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
            
            <div className="relative">
              <AnimatedElement delay={300}>
                <img 
                  src="/images/hand.jpeg" 
                  alt="IT Professionals Working Together" 
                  className="w-full h-auto rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                      <CheckCircle size={16} />
                    </div>
                    <span className="font-semibold text-slate-900">Sustainable and Scalable</span>
                  </div>
                  <div className="flex items-end justify-between">
                    {/* <span className="text-3xl font-bold text-slate-900">98.5%</span>
                    <span className="text-green-600 flex items-center">
                      +12.7% 
                      <ChevronRight size={16} />
                    </span> */}
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedElement>
            <h2 className="section-title text-center">Our Services</h2>
          </AnimatedElement>
          <AnimatedElement delay={100}>
            <p className="section-subtitle text-center">
              We provide comprehensive IT solutions tailored to meet your business needs and challenges.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard 
              title="Custom Software Development" 
              description="Tailored software solutions designed to address your unique business challenges and streamline your operations."
              icon={<Code size={24} />}
              link="/services"
              delay={200}
            />
            
            <ServiceCard 
              title="IT Infrastructure Consulting" 
              description="Expert guidance on optimizing your IT infrastructure for enhanced performance, security, and scalability."
              icon={<Server size={24} />}
              link="/services"
              delay={300}
            />
            
            <ServiceCard 
              title="Web & Mobile App Development" 
              description="Creating responsive web and mobile applications with intuitive interfaces and robust functionality."
              icon={<Smartphone size={24} />}
              link="/services"
              delay={400}
            />
            
            <ServiceCard 
              title="Cloud Solutions" 
              description="Secure and scalable cloud services to improve collaboration, reduce costs, and enhance business continuity."
              icon={<Cloud size={24} />}
              link="/services"
              delay={500}
            />
            
            <ServiceCard 
              title="Digital Transformation" 
              description="Comprehensive strategies to integrate digital technology into all areas of your business."
              icon={<PenTool size={24} />}
              link="/services"
              delay={600}
            />
            
            <div className="card p-6 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center h-full bg-slate-50">
              <AnimatedElement delay={700}>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Need a Custom Solution?</h3>
                <p className="text-slate-600 mb-6">Let's discuss how we can help with your specific requirements.</p>
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <AnimatedElement>
                <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  About The Machine Language
                </span>
              </AnimatedElement>
              
              <AnimatedElement delay={100}>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Where Innovation Meets Excellence
                </h2>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <p className="text-slate-600 mb-6">
                  Founded by tech visionary Anuj Kumar, The Machine Language has been at the forefront of digital innovation since our inception.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={300}>
                <p className="text-slate-600 mb-8">
                  Our mission is to empower businesses through technology, delivering solutions that drive efficiency, growth, and competitive advantage. With a team of expert developers, engineers, and consultants, we're equipped to handle projects of any size and complexity.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={400}>
                <ul className="space-y-4 mb-8">
                  {[
                    "10+ years of industry experience",
                    "Team of certified IT professionals",
                    "Proven track record of successful projects",
                    "Client-centric approach to every solution"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedElement>
              
              <AnimatedElement delay={500}>
                <Link to="/about" className="inline-flex items-center text-blue-600 font-medium group">
                  Learn more about our company 
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </AnimatedElement>
            </div>
            
            <div className="order-1 lg:order-2">
              <AnimatedElement delay={200}>
                <div className="relative">
                  <img 
                    src="/images/lapgraph.jpg" 
                    alt="The Machine Language Team" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-medium mb-2">"Innovation is our language, excellence is our standard."</p>
                    <p className="text-sm text-blue-100">- Anuj Kumar, Founder</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedElement>
            <h2 className="section-title text-center">What Our Clients Say</h2>
          </AnimatedElement>
          <AnimatedElement delay={100}>
            <p className="section-subtitle text-center">
              Don't just take our word for it - here's what our clients have to say about our services.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TestimonialCard 
              name="Garima Dwivedi"
              role="CEO"
              company="Saturn Mediaworks"
              testimonial="The Machine Language team exceeded our expectations. They delivered our software project on time and within budget, and their ongoing support has been exceptional."
              rating={5}
              image="/images/Garima.png"
              delay={200}
            />
            
            <TestimonialCard 
              name="Manas Shukla"
              role="Operations Manager"
              company="Globex Corporation"
              testimonial="Their expertise in cloud infrastructure helped us reduce costs by 30% while improving performance. A true partner who understands our business needs."
              rating={5}
              image="/images/manas.jpg"
              delay={300}
            />
            
            <TestimonialCard 
              name="Raghav Dubey"
              role="Marketing Director"
              company="Innovate Digital"
              testimonial="The web application they built for us has transformed how we engage with customers. User-friendly, scalable, and exactly what we needed."
              rating={4}
              image="/images/raghav.jpeg"
              delay={400}
            />
          </div>
          
          <div className="text-center mt-12">
            <AnimatedElement delay={500}>
              <Link to="/portfolio" className="btn btn-outline">
                View More Success Stories
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with Technology?
              </h2>
            </AnimatedElement>
            
            <AnimatedElement delay={100}>
              <p className="text-blue-100 mb-8 text-lg">
                Let's collaborate to build innovative solutions that drive your business forward.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-blue-50">
                  Schedule a Consultation
                </Link>
                <Link to="/services" className="btn border-2 border-white text-white hover:bg-blue-700">
                  Explore Our Services
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;