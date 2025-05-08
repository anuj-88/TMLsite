import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Server, 
  Smartphone, 
  Cloud, 
  PenTool, 
  Database, 
  Shield, 
  LineChart,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import AnimatedElement from '../components/ui/AnimatedElement';

const Services: React.FC = () => {
  // Service data
  const services = [
    {
      id: "custom-software",
      icon: <Code size={32} className="text-blue-600" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your unique business challenges and streamline your operations.",
      benefits: [
        "Personalized solutions tailored to your specific needs",
        "Scalable architecture to grow with your business",
        "Seamless integration with existing systems",
        "Ongoing support and maintenance"
      ],
      technologies: ["React", "Node.js", "Python", "Java", ".NET", "SQL/NoSQL"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "it-infrastructure",
      icon: <Server size={32} className="text-indigo-600" />,
      title: "IT Infrastructure Consulting",
      description: "Expert guidance on optimizing your IT infrastructure for enhanced performance, security, and scalability.",
      benefits: [
        "Reduced operational costs through optimized infrastructure",
        "Enhanced system reliability and performance",
        "Strategic technology roadmapping",
        "Proactive security measures"
      ],
      technologies: ["Network Design", "Server Management", "IT Governance", "Virtualization"],
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "web-mobile",
      icon: <Smartphone size={32} className="text-green-600" />,
      title: "Web & Mobile App Development",
      description: "Creating responsive web and mobile applications with intuitive interfaces and robust functionality.",
      benefits: [
        "Cross-platform compatibility",
        "Intuitive user interfaces",
        "Performance optimization",
        "Accessibility compliance"
      ],
      technologies: ["React", "React Native", "Flutter", "Angular", "Vue.js", "Swift", "Kotlin"],
      image: "https://images.pexels.com/photos/927546/pexels-photo-927546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "cloud-solutions",
      icon: <Cloud size={32} className="text-cyan-600" />,
      title: "Cloud Solutions",
      description: "Secure and scalable cloud services to improve collaboration, reduce costs, and enhance business continuity.",
      benefits: [
        "Reduced capital expenditure on hardware",
        "Scalable resources to match business demands",
        "Improved disaster recovery capabilities",
        "Enhanced team collaboration"
      ],
      technologies: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Kubernetes", "Docker"],
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "digital-transformation",
      icon: <PenTool size={32} className="text-purple-600" />,
      title: "Digital Transformation & Tech Strategy",
      description: "Comprehensive strategies to integrate digital technology into all areas of your business.",
      benefits: [
        "Enhanced customer experience",
        "Improved operational efficiency",
        "Data-driven decision making",
        "Competitive advantage through innovation"
      ],
      technologies: ["Business Process Automation", "Digital Strategy", "Change Management", "Analytics"],
      image: "https://images.pexels.com/photos/2747448/pexels-photo-2747448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "data-analytics",
      icon: <Database size={32} className="text-yellow-600" />,
      title: "Data Management & Analytics",
      description: "Transform raw data into actionable insights to drive better business decisions and outcomes.",
      benefits: [
        "Unified data strategy across the organization",
        "Enhanced data quality and governance",
        "Actionable business intelligence",
        "Predictive analytics capabilities"
      ],
      technologies: ["Data Warehousing", "Business Intelligence", "Machine Learning", "Big Data"],
      image: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                Our Services
              </span>
            </AnimatedElement>
            
            <AnimatedElement delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Comprehensive IT Solutions for Your Business
              </h1>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <p className="text-lg text-slate-600 mb-8">
                We offer a wide range of technology services designed to help your business innovate, optimize, and grow in today's digital landscape.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <AnimatedElement key={service.id} delay={200 + index * 100}>
                <div className="card h-full flex flex-col">
                  <div className="p-6 border-b border-slate-100">
                    <div className="bg-slate-50 p-4 rounded-lg w-fit mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                  <div className="p-6 mt-auto">
                    <a href={`#${service.id}`} className="text-blue-600 font-medium inline-flex items-center group">
                      Learn More 
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          id={service.id} 
          key={service.id} 
          className={`section ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}>
                <AnimatedElement>
                  <div className="bg-slate-100 p-3 rounded-lg w-fit mb-4">
                    {service.icon}
                  </div>
                </AnimatedElement>
                
                <AnimatedElement delay={100}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    {service.title}
                  </h2>
                </AnimatedElement>
                
                <AnimatedElement delay={200}>
                  <p className="text-lg text-slate-600 mb-8">
                    {service.description}
                  </p>
                </AnimatedElement>
                
                <AnimatedElement delay={300}>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedElement>
                
                <AnimatedElement delay={400}>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </AnimatedElement>
                
                <AnimatedElement delay={500}>
                  <Link to="/contact" className="btn btn-primary">
                    Discuss Your Project
                  </Link>
                </AnimatedElement>
              </div>
              
              <div className={index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}>
                <AnimatedElement delay={200}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </AnimatedElement>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedElement>
            <h2 className="section-title text-center">Our Process</h2>
          </AnimatedElement>
          <AnimatedElement delay={100}>
            <p className="section-subtitle text-center">
              We follow a structured approach to ensure successful delivery of every project.
            </p>
          </AnimatedElement>
          
          <div className="relative mt-16">
            <div className="hidden md:block absolute top-1/2 left-12 right-12 h-1 bg-slate-200 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description: "We begin by thoroughly understanding your business needs, challenges, and objectives."
                },
                {
                  number: "02",
                  title: "Strategy & Planning",
                  description: "We develop a comprehensive roadmap tailored to your specific requirements and goals."
                },
                {
                  number: "03",
                  title: "Implementation",
                  description: "Our expert team executes the plan using agile methodologies for optimal results."
                },
                {
                  number: "04",
                  title: "Optimization & Support",
                  description: "We provide ongoing maintenance, support, and continuous improvement."
                }
              ].map((step, index) => (
                <AnimatedElement key={index} delay={200 + index * 100}>
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-slate-50">
        <div className="container">
          <AnimatedElement>
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
          </AnimatedElement>
          <AnimatedElement delay={100}>
            <p className="section-subtitle text-center">
              Find answers to common questions about our services and approach.
            </p>
          </AnimatedElement>
          
          <div className="max-w-3xl mx-auto mt-12">
            {[
              {
                question: "How do you approach custom software development projects?",
                answer: "We follow a collaborative, agile approach that begins with thorough requirements gathering and continues through iterative development, testing, and deployment phases. Throughout the process, we maintain close communication with clients to ensure the solution meets their evolving needs."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We have experience across multiple industries including finance, healthcare, retail, manufacturing, and education. Our team brings domain-specific knowledge that allows us to understand the unique challenges and requirements of different sectors."
              },
              {
                question: "How do you ensure the security of client data and applications?",
                answer: "Security is integrated into every stage of our development and consulting process. We implement industry best practices, conduct regular security assessments, and stay updated on emerging threats. All our solutions are built with data protection and privacy as core considerations."
              },
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on scope, complexity, and requirements. A simple web application might take 2-3 months, while complex enterprise solutions may require 6-12 months. During our initial consultation, we'll provide a detailed timeline based on your specific project."
              },
              {
                question: "How do you handle ongoing support and maintenance?",
                answer: "We offer flexible support and maintenance plans tailored to each client's needs. These can include regular updates, performance monitoring, troubleshooting, and enhancement implementation. Our goal is to ensure your technology continues to perform optimally and evolve with your business."
              }
            ].map((faq, index) => (
              <AnimatedElement key={index} delay={200 + index * 100}>
                <div className="card p-6 mb-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
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
                Let's Build Something Amazing Together
              </h2>
            </AnimatedElement>
            
            <AnimatedElement delay={100}>
              <p className="text-blue-100 mb-8 text-lg">
                Ready to discuss your project? We're here to help bring your vision to life with the right technology solutions.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-blue-50">
                Schedule a Consultation
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;