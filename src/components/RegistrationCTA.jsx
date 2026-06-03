import React from 'react';
import { Link } from 'react-router-dom';
import { FaMusic, FaArrowRight } from 'react-icons/fa';

export default function RegistrationCTA() {
  return (
    <section id="register" className="relative py-16 bg-gradient-to-r from-deep-purple to-primary-purple overflow-hidden">
      
      {/* Decorative Musical Vector Layout */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between items-center px-10">
        <FaMusic className="text-9xl text-white transform -rotate-12 animate-pulse-slow" />
        <FaMusic className="text-8xl text-white transform rotate-45 translate-y-10 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 backdrop-blur-sm p-8 sm:p-12 rounded-2xl border border-white/10 shadow-2xl">
          
          {/* Left: Heading and Subtitle */}
          <div className="text-left max-w-2xl flex flex-col space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-wide">
              BE A PART OF HISTORY!
            </h2>
            <p className="text-sm sm:text-base text-purple-100 leading-relaxed font-light">
              Join thousands of voices from across the globe to create a Guinness World Record and make our Konkani culture proud on the international stage. Every single voice matters.
            </p>
          </div>

          {/* Right: CTA Button and Link info */}
          <div className="flex flex-col items-center shrink-0">
            <Link 
              to="/register" 
              className="inline-flex items-center justify-center bg-secondary-gold hover:bg-secondary-hover text-deep-purple font-extrabold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Register Now
            </Link>
            <Link 
              to="/register" 
              className="mt-3 text-xs font-bold text-amber-300 hover:text-white flex items-center gap-1.5 transition-colors duration-200"
            >
              Participant Registration <FaArrowRight className="text-[10px]" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
