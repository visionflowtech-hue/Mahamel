import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMusic, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaCheckCircle, FaTelegramPlane, FaArrowRight } from 'react-icons/fa';
import { IMAGES } from '../utils/images';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    terms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message && formData.terms) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        
        {/* Banner/Hero Header */}
        <section className="relative bg-[#1A0933] py-20 text-white overflow-hidden">
          {/* Full-width Background Image Overlay */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <img 
              src={IMAGES.contactHeroBg} 
              alt="" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-wide">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base text-purple-200 max-w-xl font-light">
              We'd love to hear from you! Let's create history together.
            </p>
            
            {/* Breadcrumbs */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-amber-300">
              <Link to="/" className="hover:underline">Home</Link>
              <span>&gt;</span>
              <span className="text-white">Contact Us</span>
            </div>
          </div>
        </section>

        {/* Top Forms & Get In Touch grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Send message form (Span 7) */}
              <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-150 p-6 sm:p-8">
                
                {isSubmitted ? (
                  // Success State
                  <div className="text-center py-16 space-y-6 text-slate-800">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                      <FaCheckCircle className="text-4xl animate-bounce" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold font-serif uppercase tracking-wider text-deep-purple">Message Sent!</h3>
                      <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                        Thank you, <strong className="text-deep-purple">{formData.name}</strong>! Your inquiry has been successfully transmitted. Our coordination team will get back to you shortly.
                      </p>
                    </div>
                    <div>
                      <button 
                        onClick={() => {
                          setFormData({ name: '', email: '', phone: '', subject: '', message: '', terms: false });
                          setIsSubmitted(false);
                        }}
                        className="bg-primary-purple hover:bg-primary-hover text-white font-extrabold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg shadow cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  // Registration Form
                  <form onSubmit={handleSubmit} className="space-y-6 text-left text-slate-700">
                    <div>
                      <h3 className="text-lg font-extrabold font-serif uppercase tracking-wider text-deep-purple">Send Us a Message</h3>
                      <div className="w-16 h-0.5 bg-primary-purple mt-1.5 mb-4"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-bold text-deep-purple uppercase tracking-widest mb-1.5">Full Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Enter your full name" 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-purple transition"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[10px] font-bold text-deep-purple uppercase tracking-widest mb-1.5">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          placeholder="Enter your email" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-purple transition"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[10px] font-bold text-deep-purple uppercase tracking-widest mb-1.5">Phone Number *</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="Enter phone number" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-purple transition"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-[10px] font-bold text-deep-purple uppercase tracking-widest mb-1.5">Subject *</label>
                        <select 
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-slate-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-850 focus:outline-none focus:ring-2 focus:ring-primary-purple transition bg-white"
                        >
                          <option value="" disabled>Select a subject</option>
                          <option value="general">General Query</option>
                          <option value="rehearsal">Rehearsal Details</option>
                          <option value="sponsor">Sponsorship Inquiry</option>
                          <option value="volunteer">Volunteer Sign-up</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2">
                        <label className="block text-[10px] font-bold text-deep-purple uppercase tracking-widest mb-1.5">Message *</label>
                        <textarea 
                          required
                          rows="4"
                          placeholder="Type your message here..." 
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-slate-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-purple transition resize-none"
                        ></textarea>
                      </div>

                      {/* Terms */}
                      <div className="sm:col-span-2 pt-1">
                        <label className="flex items-start gap-2.5 cursor-pointer">
                          <input 
                            type="checkbox" 
                            required
                            checked={formData.terms}
                            onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                            className="mt-1 rounded text-primary-purple focus:ring-primary-purple"
                          />
                          <span className="text-[10px] text-gray-500 leading-normal">
                            I agree to the <a href="#privacy" className="text-primary-purple hover:underline">privacy policy</a> and <a href="#terms" className="text-primary-purple hover:underline">terms & conditions</a>.
                          </span>
                        </label>
                      </div>

                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit" 
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-purple hover:bg-primary-hover text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow hover:shadow-md cursor-pointer transition"
                      >
                        Send Message <FaTelegramPlane className="text-sm" />
                      </button>
                    </div>

                  </form>
                )}
              </div>

              {/* Right Column: Get in Touch (Span 5) */}
              <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-gray-150 p-6 sm:p-8 text-left space-y-6">
                <div>
                  <h3 className="text-lg font-extrabold font-serif uppercase tracking-wider text-deep-purple">Get In Touch</h3>
                  <div className="w-16 h-0.5 bg-secondary-gold mt-1.5 mb-6"></div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Address', detail: 'Mandd Sobhann, Town Hall, Mangalore, Karnataka, India - 575001', icon: <FaMapMarkerAlt /> },
                    { label: 'Phone', detail: '+91 12345 67890 (Mon - Sat : 9:00 AM - 6:00 PM)', icon: <FaPhone /> },
                    { label: 'Email', detail: 'info@mandosobhann.org (We\'ll reply as soon as possible)', icon: <FaEnvelope /> },
                    { label: 'Website', detail: 'www.mandosobhann.org (Visit our official website)', icon: <FaGlobe /> },
                  ].map((info, idx) => (
                    <div key={idx} className="flex gap-4 items-start pb-4 border-b border-slate-50 last:border-b-0">
                      <div className="w-9 h-9 rounded-lg bg-purple-50 text-primary-purple flex items-center justify-center text-base shrink-0 shadow-inner">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">{info.label}</h4>
                        <p className="text-[10px] sm:text-xs text-gray-500 font-light leading-relaxed mt-1">{info.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Follow Us Row */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-black text-deep-purple uppercase tracking-wider mb-3">Follow Us</h4>
                  <div className="flex space-x-3">
                    <a href="#facebook" className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white text-sm shadow hover:scale-110 transition">
                      <FaFacebook />
                    </a>
                    <a href="#instagram" className="w-8 h-8 rounded-full bg-pink-600 hover:bg-pink-700 flex items-center justify-center text-white text-sm shadow hover:scale-110 transition">
                      <FaInstagram />
                    </a>
                    <a href="#youtube" className="w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white text-sm shadow hover:scale-110 transition">
                      <FaYoutube />
                    </a>
                    <a href="#whatsapp" className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center text-white text-sm shadow hover:scale-110 transition">
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Bottom Hours & Map section */}
        <section className="py-16 bg-slate-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left column: Office Hours (Span 4) */}
              <div className="lg:col-span-4 space-y-6 text-left">
                
                {/* Hours Card */}
                <div className="bg-white rounded-xl border border-gray-150 p-6 shadow-sm">
                  <div>
                    <h3 className="text-base font-extrabold text-deep-purple uppercase tracking-wider">Office Hours</h3>
                    <div className="w-16 h-0.5 bg-primary-purple mt-1.5 mb-4"></div>
                  </div>

                  <div className="space-y-2 text-xs text-gray-600 font-light">
                    {[
                      { day: 'Monday', time: '9:00 AM - 6:00 PM' },
                      { day: 'Tuesday', time: '9:00 AM - 6:00 PM' },
                      { day: 'Wednesday', time: '9:00 AM - 6:00 PM' },
                      { day: 'Thursday', time: '9:00 AM - 6:00 PM' },
                      { day: 'Friday', time: '9:00 AM - 6:00 PM' },
                      { day: 'Saturday', time: '9:00 AM - 1:00 PM' },
                      { day: 'Sunday', val: 'Closed', class: 'text-red-500 font-bold' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between py-1.5 border-b border-slate-50 last:border-b-0">
                        <span className="font-medium text-slate-800">{item.day}</span>
                        <span className={item.class || ''}>{item.time || item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Urgent Queries Call Card */}
                <div className="bg-gradient-to-br from-deep-purple to-primary-purple p-6 rounded-xl text-white shadow-md relative overflow-hidden flex gap-4">
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <FaMusic className="text-7xl -rotate-12 translate-x-[-10px] translate-y-[-10px]" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 text-amber-300 flex items-center justify-center shrink-0 shadow-inner mt-0.5 text-base">
                    <FaPhone />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest leading-none block">Need Immediate Help?</span>
                    <p className="text-[9px] text-purple-200 font-light mt-1">For urgent queries, call us directly</p>
                    <span className="text-sm font-black block mt-2 text-white">+91 12345 67890</span>
                  </div>
                </div>

              </div>

              {/* Right column: Find Us Map (Span 8) */}
              <div className="lg:col-span-8 bg-white rounded-xl border border-gray-150 p-6 shadow-sm text-left space-y-6">
                <div>
                  <h3 className="text-base font-extrabold text-deep-purple uppercase tracking-wider">Find Us</h3>
                  <div className="w-16 h-0.5 bg-secondary-gold mt-1.5 mb-4"></div>
                </div>

                <div className="rounded-xl overflow-hidden border border-gray-150 shadow-inner aspect-[16/9] bg-slate-900 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.043632128859!2d74.8377753750734!3d12.864315287405105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b2e1713589b%3A0x6b696f0156d98f73!2sTown%20Hall%2C%20Mangaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1717430400000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    title="Town Hall Mangalore Location Map"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full object-cover"
                  ></iframe>
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
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                Join hands with us to create a Guinness World Record
              </h2>
              <p className="text-xs sm:text-sm text-purple-200 mt-1">
                Your voice can make history!
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
