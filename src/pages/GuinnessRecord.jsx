import React from 'react';
import { Link } from 'react-router-dom';
import { FaMusic, FaAward, FaCalendarAlt, FaUsers, FaClock, FaCheckCircle, FaGlobe, FaTrophy, FaPlayCircle, FaArrowRight } from 'react-icons/fa';
import { IMAGES } from '../utils/images';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GuinnessRecord() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        
        {/* Banner/Hero Header */}
        <section className="relative bg-[#1A0933] py-20 text-white overflow-hidden">
          {/* Full-width Background Image Overlay */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <img 
              src={IMAGES.guinnessHeroBg} 
              alt="" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center space-y-4">
            
            {/* Guinness Badge Logo float next to title */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-20 h-20 shrink-0 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white">
                <div className="flex flex-col items-center">
                  <FaAward className="text-3xl text-amber-300 animate-pulse" />
                  <span className="text-[8px] font-black uppercase tracking-tighter mt-0.5">GUINNESS</span>
                </div>
              </div>
              
              <div className="text-center sm:text-left">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide">
                  Guinness World Record Attempt
                </h1>
                <p className="text-xs sm:text-sm text-purple-200 mt-1 max-w-xl font-light">
                  12 Days, 12 Minutes, 12 Seconds Non-Stop Konkani Choral Singing
                </p>
              </div>
            </div>
            
            {/* Breadcrumbs */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-amber-300 mt-2">
              <Link to="/" className="hover:underline">Home</Link>
              <span>&gt;</span>
              <span className="text-white">Guinness Record</span>
            </div>
          </div>
        </section>

        {/* Our Record Goal Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-purple font-serif uppercase tracking-wider">
                Our Record Goal
              </h2>
              <div className="gold-divider mt-2">
                <div className="gold-divider-diamond"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
              
              {/* Left Column Purple Box (Span 5) */}
              <div className="lg:col-span-5 bg-[#2E0B4E] text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden group">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 text-3xl text-amber-300 shadow-inner">
                  <FaClock />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-serif text-amber-300 leading-tight">12 DAYS 12 MIN 12 SEC</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-purple-200 mt-1 block">Non-Stop Singing</span>
                <div className="h-[1px] bg-white/10 w-24 my-4"></div>
                <p className="text-xs sm:text-sm text-purple-100 font-light leading-relaxed">
                  To create a Guinness World Record for the longest non-stop Konkani choral singing of 12 Days, 12 Minutes, 12 Seconds with the largest number of registered participants singing in complete unison.
                </p>
              </div>

              {/* Right Column Stats Cards (Span 7) */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                {[
                  { label: 'Voices Singing as One', val: '1000+', color: 'bg-purple-50 text-purple-600', icon: <FaUsers /> },
                  { label: 'Days of Unity', val: '12', color: 'bg-amber-50 text-amber-600', icon: <FaClock /> },
                  { label: 'Historic World Record', val: '1', color: 'bg-red-50 text-red-600', icon: <FaMusic /> },
                  { label: 'Global Recognition', val: 'For Konkani', color: 'bg-blue-50 text-blue-600', icon: <FaGlobe /> },
                ].map((glance, idx) => (
                  <div key={idx} className="p-6 rounded-2xl border border-gray-150 shadow-sm flex flex-col items-center justify-center gap-2 bg-slate-50 hover:shadow transition duration-200">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-inner ${glance.color}`}>
                      {glance.icon}
                    </div>
                    <div className="text-2xl font-black text-slate-800 leading-none mt-2">
                      {glance.val}
                    </div>
                    <div className="text-[10px] font-bold text-deep-purple uppercase tracking-wider text-center mt-1 leading-snug">
                      {glance.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Requirements & Guidelines Section */}
        <section id="guidelines" className="py-16 bg-slate-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-purple font-serif uppercase tracking-wider">
                Requirements & Guidelines
              </h2>
              <div className="gold-divider mt-2">
                <div className="gold-divider-diamond"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10">
              
              {/* Requirements Cards (Span 8) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { title: 'Registration', desc: 'Complete your registration and receive official confirmation.', icon: <FaCheckCircle className="text-purple-600" /> },
                  { title: 'Rehearsals', desc: 'Attend all scheduled choral rehearsals and training sessions.', icon: <FaUsers className="text-purple-600" /> },
                  { title: 'Punctuality', desc: 'Be on time for all training events and the final performance.', icon: <FaClock className="text-purple-600" /> },
                  { title: 'Discipline', desc: 'Follow instructions from organizers strictly.', icon: <FaAward className="text-purple-600" /> },
                  { title: 'Unity', desc: 'Sing with complete dedication and be one in voice with the choir.', icon: <FaMusic className="text-purple-600" /> },
                  { title: 'Commitment', desc: 'Stay committed to the 12 Days, 12 Minutes, 12 Seconds of non-stop performance.', icon: <FaTrophy className="text-purple-600" /> },
                ].map((req, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-gray-150 shadow-sm text-left flex gap-3 items-start hover:shadow transition">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 mt-0.5">
                      {req.icon}
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black text-deep-purple uppercase tracking-wider leading-none">{req.title}</h4>
                      <p className="text-[10px] text-gray-500 font-light leading-normal mt-1.5">{req.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mega Alert Card (Span 4) - Guidelines Downloads */}
              <div className="lg:col-span-4 bg-white rounded-xl border border-amber-250 p-6 shadow-sm text-left relative overflow-hidden flex flex-col justify-between">
                {/* Visual vectors backdrop */}
                <div className="absolute right-[-10px] bottom-[-10px] w-28 h-28 opacity-5 pointer-events-none">
                  <FaMusic className="w-full h-full text-primary-purple" />
                </div>
                
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-300 text-amber-700 text-[9px] font-black uppercase tracking-widest rounded-full">
                    Official Guidelines
                  </div>
                  <h4 className="text-xs font-black text-deep-purple uppercase tracking-wide">Metam Metamni</h4>
                  <p className="text-[10px] text-gray-500 leading-normal font-light">
                    Download the official Mandd Sobhann guidelines (Metam Metamni) to ensure full compliance with strict Guinness rules.
                  </p>
                  
                  {/* Guidelines Download Links */}
                  <div className="flex flex-col space-y-2 pt-2">
                    <a 
                      href="https://drive.google.com/file/d/156UDudI6oWGQkJ_hJsn2tudYcG-Vg280/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-primary-purple hover:bg-primary-hover text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm transition flex items-center justify-between group cursor-pointer"
                    >
                      <span>Konkani Version (Part 1)</span>
                      <FaTrophy className="text-amber-300 transition-transform group-hover:scale-110" />
                    </a>
                    
                    <div className="w-full py-2.5 px-4 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-lg flex items-center justify-between cursor-not-allowed">
                      <span>English Version (Part 2)</span>
                      <span className="text-[8px] font-extrabold text-slate-400 bg-slate-200 px-1.5 py-0.5 rounded uppercase">Coming Soon</span>
                    </div>
                    
                    <a 
                      href="https://drive.google.com/file/d/1t4QGbHPDF80-Y0OgWR-agcnhUfJ6nFu3/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-primary-purple hover:bg-primary-hover text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm transition flex items-center justify-between group cursor-pointer"
                    >
                      <span>Konkani Version (Part 2)</span>
                      <FaTrophy className="text-amber-300 transition-transform group-hover:scale-110" />
                    </a>
                  </div>
                </div>
                
                <div className="h-[2px] bg-amber-400 w-16 mt-6"></div>
              </div>

            </div>

          </div>
        </section>

        {/* Our Progress Section */}
        <section className="py-16 bg-deep-purple text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white font-serif uppercase tracking-wider">
                Our Progress
              </h2>
              <div className="gold-divider mt-2 mb-8">
                <div className="gold-divider-diamond"></div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Circular Progress (Span 4) */}
                <div className="md:col-span-4 flex flex-col items-center">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" className="stroke-white/10" strokeWidth="6" fill="transparent" />
                      <circle cx="50" cy="50" r="42" className="stroke-amber-400" strokeWidth="6" fill="transparent"
                        strokeDasharray="263.89" strokeDashoffset={263.89 * (1 - 0.78)} strokeLinecap="round" />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-amber-300 leading-none">78%</span>
                      <span className="text-[8px] font-bold text-purple-200 uppercase tracking-widest mt-1">Goal Status</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-purple-200 uppercase tracking-wider mt-3">Towards Our Goal</span>
                </div>

                {/* Progress bar and metrics (Span 8) */}
                <div className="md:col-span-8 text-left space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-serif text-amber-300">We are getting closer to history!</h3>
                    
                    {/* Horizontal Progress Bar */}
                    <div className="w-full h-3 bg-white/10 rounded-full mt-3 overflow-hidden shadow-inner">
                      <div className="h-full bg-gradient-to-r from-secondary-gold to-amber-400 rounded-full animate-pulse" style={{ width: '78%' }}></div>
                    </div>
                  </div>

                  {/* 4 metrics row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-4">
                    {[
                      { val: '812', label: 'Registered Singers', icon: <FaUsers /> },
                      { val: '650', label: 'Active Participants', icon: <FaCheckCircle /> },
                      { val: '48', label: 'Rehearsals Completed', icon: <FaMusic /> },
                      { val: '12', label: 'Days to Go', icon: <FaCalendarAlt /> },
                    ].map((metric, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start">
                        <div className="text-base text-amber-300 shrink-0 mt-0.5">{metric.icon}</div>
                        <div>
                          <div className="text-sm font-black leading-none">{metric.val}</div>
                          <div className="text-[8px] font-bold text-purple-200/80 uppercase tracking-widest mt-1.5 leading-snug">{metric.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="relative py-16 bg-gradient-to-r from-deep-purple to-primary-purple overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between items-center px-10">
            <FaMusic className="text-9xl text-white transform -rotate-12 animate-pulse-slow" />
            <FaMusic className="text-8xl text-white transform rotate-45 translate-y-10 animate-float" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                Your Voice. Our Unity. History in the Making!
              </h2>
              <p className="text-xs sm:text-sm text-purple-200 mt-1 leading-relaxed">
                Join thousands of voices across the world and be part of this historic Guinness World Record Attempt.
              </p>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <Link 
                to="/register" 
                className="inline-flex items-center gap-2 bg-secondary-gold hover:bg-secondary-hover text-deep-purple font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-transform duration-250 hover:-translate-y-0.5"
              >
                Register Now <FaArrowRight className="text-xs" />
              </Link>
              <span className="text-[9px] font-semibold text-purple-200 mt-2">Registration is Free!</span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
