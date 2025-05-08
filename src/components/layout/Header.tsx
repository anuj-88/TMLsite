import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Monitor, Code, Server } from 'lucide-react';
import Logo from '../ui/Logo';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo size={40} />
            <span className="ml-3 text-xl font-bold text-slate-900">
              The Machine Language
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Contact
            </NavLink>
            <Link to="/contact" className="ml-4 btn btn-primary">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 border-t border-slate-100">
            <nav className="flex flex-col space-y-3">
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => 
                  `block py-2 px-4 rounded-md ${isActive ? 'bg-red-50 text-red-600' : 'text-slate-700'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `block py-2 px-4 rounded-md ${isActive ? 'bg-red-50 text-red-600' : 'text-slate-700'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `block py-2 px-4 rounded-md ${isActive ? 'bg-red-50 text-red-600' : 'text-slate-700'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => 
                  `block py-2 px-4 rounded-md ${isActive ? 'bg-red-50 text-red-600' : 'text-slate-700'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `block py-2 px-4 rounded-md ${isActive ? 'bg-red-50 text-red-600' : 'text-slate-700'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
              <Link 
                to="/contact" 
                className="btn btn-primary w-full flex justify-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;