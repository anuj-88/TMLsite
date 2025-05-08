import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Lightbulb, 
  Users, 
  Award, 
  Target, 
  TrendingUp,
  Code,
  ArrowRight
} from 'lucide-react';
import AnimatedElement from '../components/ui/AnimatedElement';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedElement>
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                About Us
              </span>
            </AnimatedElement>
            
            <AnimatedElement delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Story, Our Vision
              </h1>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <p className="text-lg text-slate-600 mb-8">
                Founded on principles of innovation and excellence, The Machine Language has been transforming businesses through technology since our inception.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedElement>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  The Journey of The Machine Language
                </h2>
              </AnimatedElement>
              
              <AnimatedElement delay={100}>
                <p className="text-slate-600 mb-6">
                  The Machine Language was founded in 2020 by visionary tech entrepreneur Anuj Kumar, who recognized the growing gap between traditional business practices and the rapidly evolving digital landscape.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <p className="text-slate-600 mb-6">
                  What started as a small consulting operation has grown into a comprehensive IT solutions provider with expertise spanning software development, cloud infrastructure, and digital transformation.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={300}>
                <p className="text-slate-600 mb-6">
                  Throughout our journey, we've maintained our commitment to innovation, quality, and client satisfaction. Today, we're proud to serve clients across industries, helping them navigate the complexities of modern technology and unlock new opportunities for growth.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={400}>
                <div className="flex items-center mt-8">
                  <img 
                    src="/images/ceo.jpeg" 
                    alt="Anuj Kumar" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-slate-900">Anuj Kumar</h4>
                    <p className="text-slate-600">Founder & CEO</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
            
            <div className="relative">
              <AnimatedElement delay={200}>
                <img 
                  src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="The Machine Language Team" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card p-8 h-full">
              <AnimatedElement>
                <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
                  <Lightbulb size={24} className="text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                
                <p className="text-slate-600 mb-6">
                  To empower businesses through innovative technology solutions that drive efficiency, growth, and competitive advantage. We strive to be more than just service providers – we aim to be strategic partners in our clients' success.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Deliver high-quality, reliable technology solutions",
                    "Build long-term partnerships with our clients",
                    "Maintain the highest standards of integrity and professionalism",
                    "Continuously evolve our expertise to stay at the cutting edge"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedElement>
            </div>
            
            <div className="card p-8 h-full">
              <AnimatedElement delay={200}>
                <div className="bg-purple-50 p-3 rounded-lg w-fit mb-4">
                  <Target size={24} className="text-purple-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                
                <p className="text-slate-600 mb-6">
                  To be recognized as the premier technology partner for businesses seeking digital transformation, known for our innovation, expertise, and unwavering commitment to client success.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "Become a global leader in IT consulting and solutions",
                    "Pioneer new approaches to digital transformation",
                    "Foster a culture of continuous learning and innovation",
                    "Create measurable, sustainable value for our clients"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedElement>
            <h2 className="section-title text-center">Our Core Values</h2>
          </AnimatedElement>
          <AnimatedElement delay={100}>
            <p className="section-subtitle text-center">
              These principles guide everything we do and define our approach to business and client relationships.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Code size={28} className="text-blue-600" />,
                title: "Technical Excellence",
                description: "We maintain the highest standards in our work, using best practices and cutting-edge methodologies to deliver solutions that stand the test of time."
              },
              {
                icon: <Users size={28} className="text-green-600" />,
                title: "Client Partnership",
                description: "We view our client relationships as partnerships, taking the time to understand their unique challenges and business objectives."
              },
              {
                icon: <Lightbulb size={28} className="text-yellow-600" />,
                title: "Innovation",
                description: "We embrace creativity and forward thinking, constantly exploring new technologies and approaches to solve complex problems."
              },
              {
                icon: <Award size={28} className="text-purple-600" />,
                title: "Integrity",
                description: "We conduct our business with honesty, transparency, and ethical practices that build trust and credibility."
              },
              {
                icon: <TrendingUp size={28} className="text-red-600" />,
                title: "Continuous Growth",
                description: "We invest in ongoing learning and professional development, ensuring we stay at the forefront of technological advancement."
              },
              {
                icon: <Target size={28} className="text-cyan-600" />,
                title: "Results-Driven",
                description: "We focus on delivering measurable outcomes that contribute directly to our clients' business success and objectives."
              }
            ].map((value, index) => (
              <div key={index} className="card p-6 h-full">
                <AnimatedElement delay={200 + index * 100}>
                  <div className="bg-slate-50 p-4 rounded-lg w-fit mb-4">
                    {value.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                  
                  <p className="text-slate-600">{value.description}</p>
                </AnimatedElement>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-slate-50">
        <div className="container">
          <AnimatedElement>
            {/* <h2 className="section-title text-center">Meet Our Team</h2> */}
          </AnimatedElement>
          <AnimatedElement delay={100}>
            {/* <p className="section-subtitle text-center">
              Our talented professionals bring diverse expertise and a shared commitment to excellence.
            </p> */}
          </AnimatedElement>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                name: "Anuj Kumar",
                role: "Founder & CEO",
                image: "https://images.pexels.com/photos/7709358/pexels-photo-7709358.jpeg?auto=compress&cs=tinysrgb&w=600",
                bio: "With over 15 years in technology leadership, Anuj drives our strategic vision and innovation."
              },
              {
                name: "Priya Sharma",
                role: "CTO",
                image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600",
                bio: "An expert in emerging technologies, Priya leads our technical strategy and development teams."
              },
              {
                name: "David Wilson",
                role: "Head of Consulting",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
                bio: "David brings deep industry knowledge to help clients navigate complex digital transformation."
              },
              {
                name: "Lin Chen",
                role: "UX Director",
                image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600",
                bio: "Lin combines design thinking with technical expertise to create exceptional user experiences."
              }
            ].map((member, index) => (
              <div key={index} className="card overflow-hidden h-full">
                <AnimatedElement delay={200 + index * 100}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                    <p className="text-blue-600 mb-3">{member.role}</p>
                    <p className="text-slate-600">{member.bio}</p>
                  </div>
                </AnimatedElement>
              </div>
            ))}
          </div> */}
          
          <div className="mt-16 text-center">
            <AnimatedElement delay={600}>
              <div className="card p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Join Our Team</h3>
                <p className="text-slate-600 mb-6">
                  We are always looking for talented individuals who share our passion for technology and innovation. Join us a for a full time Job or as a Freelancer.
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScYwk804t5AGY6s0kCff6IBTDpvCGBwPIVyNAuJ-KJnghRzNw/viewform?usp=sharing" className="btn btn-primary">
                  Join Us
                </a>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work with Us?
              </h2>
            </AnimatedElement>
            
            <AnimatedElement delay={100}>
              <p className="text-blue-100 mb-8 text-lg">
                Let's discuss how The Machine Language can help transform your business through technology.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-blue-50">
                Get in Touch
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;