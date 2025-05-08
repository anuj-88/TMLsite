import React from 'react';
import { Mail, Phone, MapPin, Clock, LinkedinIcon, TwitterIcon, FacebookIcon, InstagramIcon } from 'lucide-react';
import AnimatedElement from '../components/ui/AnimatedElement';
import ContactForm from '../components/ui/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedElement>
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Contact Us
              </span>
            </AnimatedElement>
            
            <AnimatedElement delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Get in Touch
              </h1>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <p className="text-lg text-slate-600 mb-8">
                Have a question, need a quote, or want to discuss a potential project? We're here to help.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <AnimatedElement>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              </AnimatedElement>
              
              <AnimatedElement delay={100}>
                <p className="text-slate-600 mb-8">
                  Feel free to reach out through any of the channels below. We look forward to hearing from you!
                </p>
              </AnimatedElement>
              
              <div className="space-y-6">
                <AnimatedElement delay={200}>
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Office Location</h3>
                      <p className="text-slate-600">
                      Gomti Nagar, Lucknow<br />
                      India,226010
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement delay={300}>
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                      <a href="mailto:info@themachinelanguage.com" className="text-blue-600 hover:underline">
                        themachinelanguage@outlook.in
                      </a>
                    </div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement delay={400}>
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                      <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                        +91 9151693938
                      </a>
                    </div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement delay={500}>
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                      <Clock className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                      <p className="text-slate-600">
                        Monday - Friday: 9am - 6pm<br />
                        Saturday: 9am-6pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
              
              <AnimatedElement delay={600}>
                <div className="mt-8">
                  <h3 className="font-semibold text-slate-900 mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/company/107081467/admin/dashboard/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-100 p-3 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon size={20} />
                    </a>
                    <a 
                      href="https://x.com/themaclang" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-100 p-3 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      aria-label="Twitter"
                    >
                      <TwitterIcon size={20} />
                    </a>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61576201795013" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-100 p-3 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      aria-label="Facebook"
                    >
                      <FacebookIcon size={20} />
                    </a>
                    <a 
                      href="https://www.instagram.com/themachinelanguage/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-100 p-3 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon size={20} />
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedElement>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              </AnimatedElement>
              
              <AnimatedElement delay={100}>
                <p className="text-slate-600 mb-8">
                  Fill out the form below, and our team will get back to you as soon as possible.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <ContactForm />
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-slate-50">
        <div className="container">
          <AnimatedElement>
            <h2 className="section-title text-center">Our Location</h2>
          </AnimatedElement>
          <AnimatedElement delay={100}>
            <p className="section-subtitle text-center">
              Visit us at our office or schedule a virtual meeting.
            </p>
          </AnimatedElement>
          
          {/* <AnimatedElement delay={200}>
            <div className="mt-12 bg-white p-2 rounded-xl shadow-sm border border-slate-100">
              <div className="w-full h-96 rounded-lg bg-slate-200 flex items-center justify-center">
                <p className="text-slate-500">Interactive map would be embedded here</p>
              </div>
            </div>
          </AnimatedElement> */
          <AnimatedElement delay={200}>
  <div className="mt-12 bg-white p-2 rounded-xl shadow-sm border border-slate-100">
    <div className="w-full h-96 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.98710560505!2d80.7776997130825!3d26.848902828916785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1746668867951!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</AnimatedElement>
}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedElement>
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
          </AnimatedElement>
          
          <div className="max-w-3xl mx-auto mt-12">
            {[
              {
                question: "What information should I provide for a project inquiry?",
                answer: "To help us respond effectively, please include your project scope, timeline, budget range, and any specific requirements or challenges. The more details you provide, the better we can tailor our response to your needs."
              },
              {
                question: "How quickly can I expect a response?",
                answer: "We typically respond to all inquiries within 24-48 business hours. For urgent matters, please indicate this in your message subject, and we'll prioritize your request."
              },
              {
                question: "Do you offer consultation calls before starting a project?",
                answer: "Yes, we offer complimentary initial consultation calls to discuss your project requirements, answer questions, and determine if we're the right fit for your needs. You can schedule this through our contact form."
              },
              {
                question: "Can you work with clients outside the US?",
                answer: "Absolutely! We work with clients globally and have experience managing projects across different time zones. Our team can accommodate virtual meetings at times convenient for your location."
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
    </>
  );
};

export default Contact;