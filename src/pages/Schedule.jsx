import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMusic, FaAward, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaClock, FaCheckCircle, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { IMAGES } from '../utils/images';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Schedule() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  const timelineEvents = [
    {
      date: '03 Nov 2026',
      title: 'Opening Ceremony',
      time: '5:00 PM - 7:00 PM',
      desc: 'Inauguration, lamp lighting, choir assembly and welcome address.',
      image: 'https://placehold.co/600x400?text=Opening+Ceremony',
    },
    {
      date: '04 - 05 Nov 2026',
      title: 'Choir Rehearsals',
      time: '9:00 AM - 6:00 PM',
      desc: 'Practice sessions, voice training and sectional rehearsals.',
      image: 'https://placehold.co/600x400?text=Choir+Rehearsals',
    },
    {
      date: '06 - 10 Nov 2026',
      title: 'Cultural Programs',
      time: '5:00 PM - 9:00 PM',
      desc: 'Cultural evenings, music, dance, and community events.',
      image: 'https://placehold.co/600x400?text=Cultural+Programs',
    },
    {
      date: '11 Nov 2026',
      title: 'Final Rehearsal',
      time: '9:00 AM - 6:00 PM',
      desc: 'Full dress rehearsal and final preparations.',
      image: 'https://placehold.co/600x400?text=Final+Rehearsal',
    },
    {
      date: '15 Nov 2026',
      title: 'Grand Finale',
      time: '5:00 PM - 8:00 PM',
      desc: '12 Days, 12 Minutes, 12 Seconds Non-Stop Singing World Record Attempt.',
      image: 'https://placehold.co/600x400?text=Grand+Finale',
    },
  ];

  const detailedProgram = [
    { time: '05:00 PM - 05:30 PM', program: 'Registration', details: 'Participant registration & kit distribution' },
    { time: '05:30 PM - 06:00 PM', program: 'Choir Assembly', details: 'All choirs assemble at Town Hall' },
    { time: '06:00 PM - 06:30 PM', program: 'Inauguration', details: 'Lamp lighting and inaugural address' },
    { time: '06:30 PM - 07:00 PM', program: 'Welcome Address', details: 'By Mandd Sobhann dignitaries' },
    { time: '07:00 PM - 07:30 PM', program: 'Vote of Thanks', details: 'Acknowledgement to all supporters' },
    { time: '07:30 PM Onwards', program: 'Cultural Performance', details: 'Musical evening and refreshments' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        
        {/* Banner/Hero Header */}
        <section className="relative bg-[#1A0933] py-20 text-white overflow-hidden">
          {/* Full-width Background Image Overlay */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <img 
              src={IMAGES.scheduleHeroBg} 
              alt="" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-wide">
              Schedule
            </h1>
            <p className="text-sm sm:text-base text-purple-200 max-w-xl font-light">
              12 Days, 12 Minutes, 12 Seconds of Unity. A Lifetime of Pride.
            </p>
            
            {/* Breadcrumbs */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-amber-300">
              <Link to="/" className="hover:underline">Home</Link>
              <span>&gt;</span>
              <span className="text-white">Schedule</span>
            </div>
          </div>
        </section>

        {/* Quick Stats Grid */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 border border-gray-150 rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left divide-y sm:divide-y-0 lg:divide-x divide-gray-250">
                <div className="flex gap-4 items-center py-2 sm:py-0">
                  <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-xl shrink-0 shadow-sm">
                    <FaCalendarAlt className="text-primary-purple" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800 leading-tight">03 - 15</h4>
                    <p className="text-[10px] font-bold text-deep-purple uppercase tracking-widest mt-0.5">November 2026</p>
                    <span className="text-[9px] text-gray-400 font-light block">Event Dates</span>
                  </div>
                </div>
                <div className="flex gap-4 items-center py-2 sm:py-0 lg:pl-6">
                  <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-xl shrink-0 shadow-sm">
                    <FaMapMarkerAlt className="text-primary-purple" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800 leading-tight">Town Hall</h4>
                    <p className="text-[10px] font-bold text-deep-purple uppercase tracking-widest mt-0.5">Mangalore</p>
                    <span className="text-[9px] text-gray-400 font-light block">Venue</span>
                  </div>
                </div>
                <div className="flex gap-4 items-center py-2 sm:py-0 lg:pl-6">
                  <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-xl shrink-0 shadow-sm">
                    <FaClock className="text-primary-purple" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800 leading-tight">12d 12m 12s</h4>
                    <p className="text-[10px] font-bold text-deep-purple uppercase tracking-widest mt-0.5">Non-Stop Singing</p>
                    <span className="text-[9px] text-gray-400 font-light block">World Record Attempt</span>
                  </div>
                </div>
                <div className="flex gap-4 items-center py-2 sm:py-0 lg:pl-6">
                  <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-xl shrink-0 shadow-sm">
                    <FaUsers className="text-primary-purple" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800 leading-tight">1000+ Voices</h4>
                    <p className="text-[10px] font-bold text-deep-purple uppercase tracking-widest mt-0.5">United as One</p>
                    <span className="text-[9px] text-gray-400 font-light block">Participants</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline and Program Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Event Timeline (Span 6) */}
              <div className="lg:col-span-6 text-left space-y-6">
                <div>
                  <h3 className="text-xl font-extrabold text-deep-purple font-serif uppercase tracking-wider">
                    Event Timeline
                  </h3>
                  <div className="w-16 h-0.5 bg-primary-purple mt-2 mb-8"></div>
                </div>

                {/* Vertical timeline details */}
                <div className="space-y-6 relative pl-6 before:absolute before:top-4 before:bottom-4 before:left-2 before:w-[2px] before:bg-purple-150">
                  {timelineEvents.map((ev, idx) => (
                    <div key={idx} className="relative flex flex-col sm:flex-row gap-4 bg-slate-50 p-4 rounded-xl border border-gray-100 shadow-sm group">
                      
                      {/* Timeline Dot Indicator */}
                      <div className="absolute left-[-22px] top-6 w-3 h-3 rounded-full bg-white border-2 border-primary-purple group-hover:scale-125 transition-transform duration-200"></div>

                      {/* Date Badge */}
                      <div className="bg-deep-purple text-white px-3 py-2.5 rounded-lg text-center font-bold text-xs shrink-0 w-24 flex flex-col justify-center items-center shadow-md">
                        <span className="text-xs font-black block leading-none">{ev.date.split(' ')[0]}</span>
                        <span className="text-[8px] font-bold tracking-widest uppercase mt-1 leading-none">{ev.date.split(' ').slice(1).join(' ')}</span>
                      </div>

                      {/* Content block */}
                      <div className="flex-grow space-y-1.5">
                        <h4 className="text-xs font-black text-deep-purple uppercase tracking-wider">{ev.title}</h4>
                        <div className="flex items-center gap-1.5 text-[9px] text-amber-600 font-bold">
                          <FaClock className="text-[9px]" /> {ev.time}
                        </div>
                        <p className="text-[10px] text-gray-500 font-light leading-normal">{ev.desc}</p>
                      </div>

                      {/* Horizontal Thumbnail */}
                      <div className="w-24 h-16 shrink-0 rounded-lg overflow-hidden border border-white shadow-sm bg-slate-200 self-center hidden sm:block">
                        <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />
                      </div>

                    </div>
                  ))}
                </div>

                {/* Timeline Bottom Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
                  <span className="text-[10px] text-gray-500 font-light">
                    Detailed timings and instructions will be shared with registered participants.
                  </span>
                  <a 
                    href="#download"
                    className="inline-flex items-center gap-2 bg-primary-purple hover:bg-primary-hover text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded shadow transition-all duration-200"
                  >
                    Download Schedule (PDF)
                  </a>
                </div>
              </div>

              {/* Right Column: Detailed Program Table (Span 6) */}
              <div className="lg:col-span-6 text-left space-y-6">
                <div>
                  <h3 className="text-xl font-extrabold text-deep-purple font-serif uppercase tracking-wider">
                    Day 1: Opening Ceremony
                  </h3>
                  <div className="w-16 h-0.5 bg-secondary-gold mt-2 mb-8"></div>
                </div>

                {/* Styled Table Card */}
                <div className="bg-white rounded-xl border border-gray-150 overflow-hidden shadow-sm">
                  {/* Table Header Row */}
                  <div className="bg-deep-purple text-amber-300 p-4 text-xs font-black uppercase tracking-wider">
                    03 November 2026 (Tuesday)
                  </div>

                  {/* Table Header Labels */}
                  <div className="grid grid-cols-12 bg-slate-50 border-b border-gray-150 p-3 text-[10px] font-black text-deep-purple uppercase tracking-widest text-center sm:text-left">
                    <div className="col-span-3">Time</div>
                    <div className="col-span-4">Program</div>
                    <div className="col-span-5">Details</div>
                  </div>

                  {/* Table Body Rows */}
                  <div className="divide-y divide-gray-100">
                    {detailedProgram.map((row, idx) => (
                      <div key={idx} className="grid grid-cols-12 p-3.5 text-xs text-gray-600 font-light hover:bg-slate-50/50 transition-colors">
                        <div className="col-span-3 text-[10px] font-bold text-deep-purple">{row.time}</div>
                        <div className="col-span-4 font-black text-slate-800 text-[11px] uppercase tracking-wider">{row.program}</div>
                        <div className="col-span-5 text-[10px] leading-snug">{row.details}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Megaphone Alert Note */}
                <div className="bg-purple-50/40 p-4 rounded-xl border border-purple-100/50 flex gap-3 text-left">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-primary-purple flex items-center justify-center shrink-0 shadow-inner">
                    <FaMusic className="text-sm" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-deep-purple uppercase tracking-wider">Please Note</span>
                    <p className="text-[10px] text-gray-500 leading-normal font-light mt-0.5">
                      All participants must attend rehearsals as per schedule. Timings are subject to change. Updates will be shared via email/WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Event at a Glance Full Banner */}
        <section className="py-12 bg-deep-purple text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white font-serif uppercase tracking-wider">
                Event at a Glance
              </h2>
              <div className="gold-divider mt-2 mb-8">
                <div className="gold-divider-diamond"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center max-w-4xl mx-auto">
              {[
                { val: '12', label: 'Days of Celebration', icon: <FaCalendarAlt className="text-amber-300" /> },
                { val: '1000+', label: 'Voices United', icon: <FaUsers className="text-amber-300" /> },
                { val: '12m 12s', label: 'Non-Stop Singing Finale', icon: <FaMusic className="text-amber-300" /> },
                { val: '1', label: 'Historic World Record Attempt', icon: <FaAward className="text-amber-300" /> },
                { val: 'Countless', label: 'Memories', icon: <FaUsers className="text-amber-300" /> },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200">
                  <div className="text-xl mb-2">{item.icon}</div>
                  <div className="text-lg font-black leading-none">{item.val}</div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-purple-200 mt-1.5 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stay Connected subscription and Follow Us Section */}
        <section className="py-16 bg-slate-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 bg-white p-8 sm:p-10 rounded-2xl border border-gray-150 shadow-sm">
              
              {/* Left Form: Stay Connected */}
              <div className="text-left w-full lg:w-3/5 space-y-4">
                <div>
                  <h3 className="text-base font-extrabold text-deep-purple uppercase tracking-wider">
                    Stay Connected
                  </h3>
                  <p className="text-xs text-gray-500 font-light leading-snug mt-1">
                    Subscribe to get important updates and announcements directly in your inbox.
                  </p>
                </div>
                
                {isSubscribed ? (
                  <div className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 py-2">
                    <FaCheckCircle /> Thank you! You have successfully subscribed to Mandd Sobhann event newsletter.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-grow bg-slate-50 border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-purple transition"
                    />
                    <button 
                      type="submit"
                      className="bg-primary-purple hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg shadow cursor-pointer transition"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>

              {/* Right: Follow Us */}
              <div className="text-left w-full lg:w-auto space-y-4 lg:self-start lg:pl-10 lg:border-l lg:border-gray-150">
                <h3 className="text-base font-extrabold text-deep-purple uppercase tracking-wider">
                  Follow Us
                </h3>
                
                <div className="flex space-x-3">
                  <a href="#facebook" className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white text-sm shadow hover:scale-110 transition-all duration-200">
                    <FaFacebook />
                  </a>
                  <a href="#instagram" className="w-9 h-9 rounded-full bg-pink-600 hover:bg-pink-700 flex items-center justify-center text-white text-sm shadow hover:scale-110 transition-all duration-200">
                    <FaInstagram />
                  </a>
                  <a href="#youtube" className="w-9 h-9 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white text-sm shadow hover:scale-110 transition-all duration-200">
                    <FaYoutube />
                  </a>
                  <a href="#whatsapp" className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center text-white text-sm shadow hover:scale-110 transition-all duration-200">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
