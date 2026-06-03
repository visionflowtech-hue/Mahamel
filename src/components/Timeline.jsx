import React from 'react';
import { FaCalendarAlt, FaUsers, FaMusic, FaTrophy } from 'react-icons/fa';

export default function Timeline() {
  const steps = [
    {
      id: 1,
      date: '03 Nov 2026',
      title: 'Opening Ceremony',
      desc: 'Inauguration & Choir Assembly',
      icon: <FaCalendarAlt className="text-xl text-amber-500 animate-pulse" />,
    },
    {
      id: 2,
      date: '05 Nov 2026',
      title: 'Choir Rehearsals',
      desc: 'Practice Sessions & Workshops',
      icon: <FaUsers className="text-xl text-amber-500 animate-pulse" />,
    },
    {
      id: 3,
      date: '10 Nov 2026',
      title: 'Cultural Programs',
      desc: 'Cultural Events & Community Singing',
      icon: <FaMusic className="text-xl text-amber-500 animate-pulse" />,
    },
    {
      id: 4,
      date: '15 Nov 2026',
      title: 'Grand Finale',
      desc: '12 Days, 12 Minutes, 12 Seconds Non-Stop Singing World Record Attempt',
      icon: <FaTrophy className="text-xl text-amber-500 animate-pulse" />,
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-deep-purple text-white relative overflow-hidden">
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title with Gold Divider */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold font-serif uppercase tracking-wider text-white">
            Event Timeline
          </h2>
          <div className="gold-divider mt-2">
            <div className="gold-divider-diamond"></div>
          </div>
          <p className="text-xs sm:text-sm text-purple-200 max-w-md mx-auto">
            Follow the journey from the inaugural choir assembly to the historical world record attempt.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Connector Line (Desktop Horizontal) */}
          <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-1 bg-gradient-to-r from-secondary-gold via-amber-400 to-secondary-gold rounded-full opacity-60"></div>
          
          {/* Connector Line (Mobile Vertical) */}
          <div className="lg:hidden absolute top-6 bottom-6 left-8 w-1 bg-gradient-to-b from-secondary-gold via-amber-400 to-secondary-gold rounded-full opacity-60"></div>
          
          {/* Timeline Nodes */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group">
                
                {/* Timeline Icon Node */}
                <div className="lg:mb-6 shrink-0 relative">
                  {/* Outer circle halo */}
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {/* Inner circle node */}
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-deep-purple flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>

                {/* Timeline content details card */}
                <div className="ml-6 lg:ml-0 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10 shadow-md group-hover:bg-white/15 transition-all duration-300 w-full">
                  <span className="inline-block px-2.5 py-1 rounded bg-secondary-gold text-deep-purple text-[10px] font-black uppercase tracking-widest mb-3">
                    {step.date}
                  </span>
                  
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-amber-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-purple-100 mt-2 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
