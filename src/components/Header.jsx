import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaMusic } from 'react-icons/fa';
import { IMAGES } from '../utils/images';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isAboutPage = location.pathname === '/about';
  const isSchedulePage = location.pathname === '/schedule';
  const isGuinnessPage = location.pathname === '/guinness-record';
  const isContactPage = location.pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle anchor link scrolling across pages
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (isAboutPage || isSchedulePage || isGuinnessPage || isContactPage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-3 h-20' : 'shadow-sm py-4 h-22'} flex items-center`}>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center group">
          <img 
            src={IMAGES.logo} 
            alt="Mandd Sobhann Logo" 
            className="h-14 w-auto object-contain hover:scale-105 transition-all duration-200"
          />
        </Link>

        {/* Navigation Section */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-4">
          
          {/* Home Link (with Icon on subpages) */}
          <Link 
            to="/" 
            className={`text-[12px] lg:text-[13px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition duration-200 ${
              (!isAboutPage && !isSchedulePage && !isGuinnessPage && !isContactPage)
                ? 'text-primary-purple relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary-purple' 
                : 'text-gray-700 hover:text-primary-purple'
            }`}
          >
            {(isAboutPage || isSchedulePage || isGuinnessPage || isContactPage) && (
              <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-primary-purple" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            )}
            Home
          </Link>

          {/* About Link (Pill Capsule on About Page) */}
          <Link 
            to="/about" 
            className={`text-[12px] lg:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 ${
              isAboutPage 
                ? 'text-white bg-primary-purple px-4 py-2 rounded-full shadow-sm hover:bg-primary-hover' 
                : 'text-gray-700 hover:text-primary-purple'
            }`}
          >
            About
          </Link>

          {/* Schedule Link (Pill Capsule on Schedule Page) */}
          <Link 
            to="/schedule" 
            className={`text-[12px] lg:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 ${
              isSchedulePage 
                ? 'text-white bg-primary-purple px-4 py-2 rounded-full shadow-sm hover:bg-primary-hover' 
                : 'text-gray-700 hover:text-primary-purple'
            }`}
          >
            Schedule
          </Link>

          {/* Guinness Record Link (Pill Capsule on Guinness Page) */}
          <Link 
            to="/guinness-record" 
            className={`text-[12px] lg:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 ${
              isGuinnessPage 
                ? 'text-white bg-primary-purple px-4 py-2 rounded-full shadow-sm hover:bg-primary-hover' 
                : 'text-gray-700 hover:text-primary-purple'
            }`}
          >
            Guinness Record
          </Link>

          {/* Contact Link (Pill Capsule on Contact Page) */}
          <Link 
            to="/contact" 
            className={`text-[12px] lg:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 ${
              isContactPage 
                ? 'text-white bg-primary-purple px-4 py-2 rounded-full shadow-sm hover:bg-primary-hover' 
                : 'text-gray-700 hover:text-primary-purple'
            }`}
          >
            Contact
          </Link>
        </nav>



      </div>
    </header>
  );
}
