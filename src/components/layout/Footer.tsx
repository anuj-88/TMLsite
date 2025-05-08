import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4 bg-white rounded-lg p-4">
              <Logo size={64}  />
              <span className="ml-3 text-xl font-bold text-black">
                The <span className="text-red-500">Machine</span> Language
              </span>
            </div>
            <p className="text-slate-300 mb-6">
              Innovative IT solutions to transform your business and drive growth in today's digital landscape.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/107081467/admin/dashboard/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/themaclang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61576201795013" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/themachinelanguage/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  IT Infrastructure Consulting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Web & Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-red-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  Gomti Nagar, Lucknow, India,226010
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-red-400 mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-slate-300 hover:text-white transition-colors">
                  +91 9151693938
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-red-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@themachinelanguage.com" className="text-slate-300 hover:text-white transition-colors">
                   themachinelanguage@outlook.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} The Machine Language. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="text-slate-400 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;