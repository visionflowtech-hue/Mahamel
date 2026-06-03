import React from 'react';
import { FaAward, FaGlobe, FaMusic } from 'react-icons/fa';
import { IMAGES } from '../utils/images';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clock Tower Image Placeholder with Asymmetrical Rounded Corners */}
          <div className="lg:col-span-5 relative group">
            {/* Outline Decorative border */}
            <div className="absolute inset-0 border-2 border-secondary-gold rounded-tl-[80px] rounded-br-[80px] translate-x-3 translate-y-3 pointer-events-none group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
            
            <div className="relative aspect-[2/3] bg-gray-100 rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-xl border-4 border-white">
              <img 
                src={IMAGES.clockTowerVertical} 
                alt="Clock Tower Mangalore" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle gradient banner */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-purple/85 to-transparent p-6 text-white text-left">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest">Mangalore Landmark</span>
                <h4 className="text-sm font-bold mt-0.5">Town Hall Clock Tower</h4>
              </div>
            </div>
          </div>
          
          {/* Right Column: About Details & Core Pillars */}
          <div className="lg:col-span-7 text-left flex flex-col space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold text-deep-purple font-serif uppercase tracking-wider">
                About the Event
              </h2>
              <div className="w-20 h-1 bg-secondary-gold mt-2"></div>
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
              Po'ylo Vishv Konknni So'ngeet Mo'hame'll is a historic cultural initiative by Mandd Sobhann to create a Guinness World Record for the longest non-stop Konkani choral singing of 12 Days, 12 Minutes, 12 Seconds. This milestone attempt aims to bring together Konkani vocalists from around the world to demonstrate the harmony and rich legacy of Konkani choral music.
            </p>
            
            {/* Pill Features List */}
            <div className="flex flex-col space-y-5 mt-4">
              
              {/* Pillar 1: Purpose */}
              <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                <div className="w-12 h-12 rounded-full bg-primary-purple text-white flex items-center justify-center shrink-0 shadow-md">
                  <FaAward className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-deep-purple uppercase tracking-wider">Our Purpose</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    To promote, preserve and celebrate the rich Konkani musical heritage on a global platform.
                  </p>
                </div>
              </div>
              
              {/* Pillar 2: Vision */}
              <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                <div className="w-12 h-12 rounded-full bg-primary-purple text-white flex items-center justify-center shrink-0 shadow-md">
                  <FaGlobe className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-deep-purple uppercase tracking-wider">Our Vision</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Uniting Konkani speaking people worldwide through music, culture and community spirit.
                  </p>
                </div>
              </div>
              
              {/* Pillar 3: Culture */}
              <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                <div className="w-12 h-12 rounded-full bg-primary-purple text-white flex items-center justify-center shrink-0 shadow-md">
                  <FaMusic className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-deep-purple uppercase tracking-wider">Our Culture</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Honoring our roots, language and traditions for generations to come.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
