import React, { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function Sponsors() {
  const sponsors = [
    {
      id: 1,
      name: 'SBI',
      logo: 'https://placehold.co/250x120?text=SBI',
    },
    {
      id: 2,
      name: 'MRPL',
      logo: 'https://placehold.co/250x120?text=MRPL',
    },
    {
      id: 3,
      name: 'Karnataka Bank',
      logo: 'https://placehold.co/250x120?text=Karnataka+Bank',
    },
    {
      id: 4,
      name: 'Adani Foundation',
      logo: 'https://placehold.co/250x120?text=Adani+Foundation',
    },
    {
      id: 5,
      name: 'NITTE',
      logo: 'https://placehold.co/250x120?text=NITTE',
    },
    {
      id: 6,
      name: 'Cochin Shipyard',
      logo: 'https://placehold.co/250x120?text=Cochin+Shipyard',
    },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -220, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 220, behavior: 'smooth' });
    }
  };

  return (
    <section id="sponsors" className="py-16 bg-slate-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Title */}
        <div>
          <h2 className="text-2xl font-extrabold text-deep-purple font-serif uppercase tracking-wider">
            Our Proud Sponsors
          </h2>
          <div className="gold-divider mt-2">
            <div className="gold-divider-diamond"></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center mt-8 px-8">
          
          {/* Left Arrow Button */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 shadow hover:bg-gray-50 focus:outline-none transition-colors duration-200 cursor-pointer"
            aria-label="Scroll left"
          >
            <span className="text-lg font-bold rotate-180 inline-block">→</span>
          </button>
          
          {/* Logo Cards Row */}
          <div 
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-none py-4 w-full justify-between items-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {sponsors.map((spons) => (
              <div 
                key={spons.id} 
                className="min-w-[180px] max-w-[200px] h-24 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-4 hover:shadow-md transition-all duration-300 group shrink-0"
              >
                <img 
                  src={spons.logo} 
                  alt={spons.name} 
                  className="max-h-full max-w-full object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 shadow hover:bg-gray-50 focus:outline-none transition-colors duration-200 cursor-pointer"
            aria-label="Scroll right"
          >
            <span className="text-lg font-bold inline-block">→</span>
          </button>
          
        </div>

      </div>
    </section>
  );
}
