import React from 'react';
import { Link } from 'react-router-dom';
import { FaMusic, FaAward, FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { IMAGES } from '../utils/images';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center bg-no-repeat pt-20 pb-20 sm:pt-28 sm:pb-28 overflow-hidden min-h-[80vh] flex items-center"
      style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
    >
      
      {/* Dark Purple Premium Mask Overlay */}
      <div className="absolute inset-0 bg-[#1A0933]/90 mix-blend-multiply pointer-events-none z-0"></div>
      
      {/* Elegant grid/pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Content Row: Title (Left) and Badges/Dates (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Titles & Guinness Record Label */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <span className="text-amber-300 font-semibold uppercase tracking-widest text-xs sm:text-sm">
              Somasrachem Proimukh Konknni Samskrtik Sanghattan
            </span>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Po'ylo Vishv <br />
              <span className="text-amber-300">
                Konknni So'ngeet
              </span> <br />
              Mo'hame'll
            </h1>
            
            {/* Guinness Callout (Glassmorphic) */}
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl max-w-lg">
              <div className="w-16 h-16 shrink-0 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
                <div className="flex flex-col items-center">
                  <FaAward className="text-3xl text-amber-300" />
                  <span className="text-[7px] font-bold uppercase tracking-tighter">Guinness</span>
                </div>
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">Guinness World Record</h4>
                <p className="text-xs text-purple-100 mt-1 leading-snug font-medium">
                  12 dees voram monuttam Niro'ntor Zo'mya Gayenacho Guinness Dakhlo Rorch'chem Pro'to'n
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Globe Badge, Date Cards, Location Pill */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
            
            {/* Globe & Violins Mascot Badge */}
            <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm p-1 shadow-2xl animate-float flex items-center justify-center relative border border-white/20">
              <div className="w-full h-full rounded-full bg-[#1A0933] border border-purple-500/30 flex flex-col items-center justify-center text-white">
                <FaGlobe className="text-4xl text-amber-300 animate-spin-slow" />
                <FaMusic className="text-lg text-amber-300 absolute bottom-6 right-6" />
                <span className="text-[9px] font-bold mt-1.5 text-center leading-none text-purple-200 px-2 tracking-wider">WORLD RECORD</span>
              </div>
            </div>
            
            {/* Date Widget */}
            <div className="flex flex-col items-center lg:items-end space-y-3 w-full sm:w-auto">
              <div className="flex items-center gap-3">
                
                {/* Opening Date */}
                <div className="bg-[#2E0B4E] border border-purple-500/20 text-white p-3 rounded-xl shadow-xl text-center w-24">
                  <div className="text-2xl font-bold font-serif leading-none text-white">03</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider mt-0.5 text-purple-200">Nov 2026</div>
                  <div className="h-[1px] bg-white/10 my-1"></div>
                  <div className="text-[9px] text-amber-300 font-bold uppercase tracking-wider">Opening</div>
                </div>
                
                {/* TO separator */}
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center font-bold text-xs text-white shadow-lg">
                  TO
                </div>
                
                {/* Grand Finale Date */}
                <div className="bg-[#2E0B4E] border border-purple-500/20 text-white p-3 rounded-xl shadow-xl text-center w-24">
                  <div className="text-2xl font-bold font-serif leading-none text-white">15</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider mt-0.5 text-purple-200">Nov 2026</div>
                  <div className="h-[1px] bg-white/10 my-1"></div>
                  <div className="text-[9px] text-amber-300 font-bold uppercase tracking-wider">Grand Finale</div>
                </div>
                
              </div>
              
              {/* Location Pill */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full shadow-xl border border-white/20 mt-2">
                <FaMapMarkerAlt className="text-amber-300 text-sm animate-bounce" />
                <span className="text-xs font-bold text-white tracking-wide">Town Hall, Mangalore</span>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
}
