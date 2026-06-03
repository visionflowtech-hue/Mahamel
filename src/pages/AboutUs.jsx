import React from 'react';
import { Link } from 'react-router-dom';
import { FaMusic, FaAward, FaUsers, FaTrophy, FaCheckCircle, FaGlobe, FaArrowRight } from 'react-icons/fa';
import { IMAGES } from '../utils/images';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        
        {/* About Header/Hero Banner */}
        <section className="relative bg-[#1A0933] py-20 text-white overflow-hidden">
          {/* Full-width Background Image Overlay */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <img 
              src={IMAGES.aboutHeroBg} 
              alt="" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-wide">
              About Event
            </h1>
            <p className="text-sm sm:text-base text-purple-200 max-w-xl font-light">
              Preserving Konkani Culture, Creating History Together
            </p>
            
            {/* Breadcrumbs */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-amber-300">
              <Link to="/" className="hover:underline">Home</Link>
              <span>&gt;</span>
              <span className="text-white">About Event</span>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Image Card */}
              <div className="lg:col-span-5 relative group">
                <div className="absolute inset-0 border-2 border-secondary-gold rounded-3xl translate-x-3 translate-y-3 pointer-events-none group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                <div className="relative aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src={IMAGES.choirPerformance} 
                    alt="Mandd Sobhann Choir Performance" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right Column: Organization Details */}
              <div className="lg:col-span-7 text-left flex flex-col space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-amber-100 border border-amber-300 text-secondary-gold text-[10px] font-bold tracking-widest rounded-full uppercase mb-2">
                    Who We Are
                  </span>
                  <h2 className="text-3xl font-extrabold text-deep-purple font-serif tracking-wide">
                    Mandd Sobhann®
                  </h2>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  Mandd Sobhann is a premier socio-cultural organization committed to preserving, promoting and celebrating the rich heritage of Konkani language, music, traditions and culture.
                </p>
                
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  For years, we have been conducting programs, competitions, concerts and training initiatives that inspire people of all ages to keep Konkani culture alive and vibrant. By nurturing local talent and organizing major choral summits, we ensure our ancestral traditions flourish globally.
                </p>

                {/* 4 Feature Pillars */}
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                  <div className="flex gap-3">
                    <FaAward className="text-2xl text-primary-purple shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-deep-purple uppercase tracking-wide">Cultural Preservation</h4>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaUsers className="text-2xl text-primary-purple shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-deep-purple uppercase tracking-wide">Community Unity</h4>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-2xl text-primary-purple shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-deep-purple uppercase tracking-wide">Youth Empowerment</h4>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FaTrophy className="text-2xl text-primary-purple shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-deep-purple uppercase tracking-wide">Excellence in Art & Music</h4>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Our Mission, Vision & Culture Section */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          
          {/* Visual Decorations on Left & Right */}
          <div className="absolute left-[-50px] bottom-[-20px] w-64 h-64 opacity-15 pointer-events-none hidden lg:block">
            <img src={IMAGES.illustrations.mandolin} alt="Mandolin Decor" className="w-full h-full object-contain rotate-12" />
          </div>
          <div className="absolute right-[-50px] top-[-20px] w-64 h-64 opacity-15 pointer-events-none hidden lg:block">
            <img src={IMAGES.illustrations.sunsetBeachCircle} alt="Coast Decor" className="w-full h-full object-contain rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-deep-purple font-serif uppercase tracking-wider">
                Our Mission, Vision & Culture
              </h2>
              <div className="gold-divider mt-2">
                <div className="gold-divider-diamond"></div>
              </div>
            </div>

            {/* 3 Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              
              {/* Mission Card */}
              <div className="bg-purple-50/50 p-8 rounded-2xl border border-purple-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary-purple text-white flex items-center justify-center shadow mb-5">
                  <FaAward className="text-xl" />
                </div>
                <h3 className="text-base font-extrabold text-deep-purple uppercase tracking-wider mb-3">Our Mission</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                  To promote, preserve and celebrate the rich Konkani musical heritage and traditions through meaningful cultural initiatives.
                </p>
              </div>
              
              {/* Vision Card */}
              <div className="bg-amber-50/50 p-8 rounded-2xl border border-amber-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary-gold text-white flex items-center justify-center shadow mb-5">
                  <FaGlobe className="text-xl" />
                </div>
                <h3 className="text-base font-extrabold text-deep-purple uppercase tracking-wider mb-3">Our Vision</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                  To unite Konkani speaking people worldwide through music, culture and community spirit and take our heritage to greater heights.
                </p>
              </div>
              
              {/* Culture Card */}
              <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow mb-5">
                  <FaUsers className="text-xl" />
                </div>
                <h3 className="text-base font-extrabold text-deep-purple uppercase tracking-wider mb-3">Our Culture</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                  We honor our roots, language and traditions while inspiring the next generation to carry forward our glorious legacy.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Why Initiative & Stats Glance Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column: Why Initiative */}
              <div className="text-left space-y-6">
                <div>
                  <h3 className="text-xl font-extrabold text-deep-purple font-serif uppercase tracking-wider">
                    Why This Initiative?
                  </h3>
                  <div className="w-16 h-0.5 bg-primary-purple mt-2"></div>
                </div>

                <ul className="space-y-4">
                  {[
                    "To create a Guinness World Record for the longest non-stop Konkani choral singing of 12 Days, 12 Minutes, 12 Seconds.",
                    "To give a global platform to Konkani music and our talented voices.",
                    "To strengthen unity among Konkani speaking communities across the world.",
                    "To inspire the youth and keep our culture alive for generations."
                  ].map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-purple text-lg shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Mandd Sobhann at a Glance */}
              <div className="text-left space-y-6">
                <div>
                  <h3 className="text-xl font-extrabold text-deep-purple font-serif uppercase tracking-wider">
                    Mandd Sobhann at a Glance
                  </h3>
                  <div className="w-16 h-0.5 bg-secondary-gold mt-2"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Years of Cultural Service', val: '25+', color: 'bg-purple-50 text-purple-600', icon: <FaUsers /> },
                    { label: 'Programs Organized', val: '1000+', color: 'bg-amber-50 text-amber-600', icon: <FaMusic /> },
                    { label: 'Lives Touched', val: '50K+', color: 'bg-red-50 text-red-600', icon: <FaUsers /> },
                    { label: 'Global Konkani Community', val: 'Global', color: 'bg-blue-50 text-blue-600', icon: <FaGlobe /> },
                  ].map((glance, idx) => (
                    <div key={idx} className="p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col items-start gap-2 bg-white hover:shadow transition-shadow duration-200">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${glance.color}`}>
                        {glance.icon}
                      </div>
                      <div className="text-xl font-black text-slate-800 leading-none mt-1">
                        {glance.val}
                      </div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5 leading-snug">
                        {glance.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="relative py-16 bg-gradient-to-r from-deep-purple to-primary-purple overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-start">
            <img src={IMAGES.choirPerformance} alt="" className="h-full object-cover opacity-60" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                Be a part of history. Be the voice of Konkani!
              </h2>
              <p className="text-xs sm:text-sm text-purple-200 mt-1">
                Join thousands of voices to create a Guinness World Record.
              </p>
            </div>
            <div>
              <Link 
                to="/register" 
                className="inline-flex items-center gap-2 bg-secondary-gold hover:bg-secondary-hover text-deep-purple font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
              >
                Register Now <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
