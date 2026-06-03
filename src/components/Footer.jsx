import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { IMAGES } from '../utils/images';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#1A0933] text-white pt-16 pb-8 border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1: Mandd Sobhann Info (Span 3) */}
          <div className="lg:col-span-3 text-left flex flex-col space-y-4">
            <img 
              src={IMAGES.logo} 
              alt="Mandd Sobhann Logo" 
              className="h-16 w-auto object-contain self-start"
            />
            <p className="text-xs text-purple-200/70 leading-relaxed font-light">
              Somasrachem Proimukh Konknni Samskrtik Sanghattan. Dedicated to preserving, promoting, and enriching the rich legacy of Konkani culture, language, and choral music worldwide.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-3 pt-2">
              <a href="#facebook" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary-purple flex items-center justify-center text-white text-sm hover:scale-110 transition-all duration-200">
                <FaFacebook />
              </a>
              <a href="#instagram" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary-purple flex items-center justify-center text-white text-sm hover:scale-110 transition-all duration-200">
                <FaInstagram />
              </a>
              <a href="#youtube" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary-purple flex items-center justify-center text-white text-sm hover:scale-110 transition-all duration-200">
                <FaYoutube />
              </a>
              <a href="#whatsapp" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary-purple flex items-center justify-center text-white text-sm hover:scale-110 transition-all duration-200">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          {/* Col 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 text-left flex flex-col space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-purple-300">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs font-light text-purple-200/75">
              <li><a href="#home" className="hover:text-amber-300 transition duration-150">Home</a></li>
              <li><a href="#about" className="hover:text-amber-300 transition duration-150">About Event</a></li>
              <li><a href="#highlights" className="hover:text-amber-300 transition duration-150">Participants</a></li>
              <li><a href="#timeline" className="hover:text-amber-300 transition duration-150">Schedule</a></li>
              <li><a href="#stats" className="hover:text-amber-300 transition duration-150">Guinness Record</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition duration-150">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Important Links (Span 2) */}
          <div className="lg:col-span-2 text-left flex flex-col space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-purple-300">
              Important Links
            </h3>
            <ul className="space-y-2 text-xs font-light text-purple-200/75">
              <li><a href="#register" className="hover:text-amber-300 transition duration-150">Registration</a></li>
              <li><a href="#guidelines" className="hover:text-amber-300 transition duration-150">Guidelines</a></li>
              <li><a href="#rehearsal" className="hover:text-amber-300 transition duration-150">Rehearsal Info</a></li>
              <li><a href="#terms" className="hover:text-amber-300 transition duration-150">Terms & Conditions</a></li>
              <li><a href="#privacy" className="hover:text-amber-300 transition duration-150">Privacy Policy</a></li>
              <li><a href="#sitemap" className="hover:text-amber-300 transition duration-150">Sitemap</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Us (Span 2) */}
          <div className="lg:col-span-2 text-left flex flex-col space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-purple-300">
              Contact Us
            </h3>
            <ul className="space-y-3 text-xs font-light text-purple-200/75">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-amber-400 mt-0.5 shrink-0" />
                <span>Mandd Sobhann, Mangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-amber-400 shrink-0" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-amber-400 shrink-0" />
                <span>info@mandosobhann.org</span>
              </li>
              <li className="flex items-center gap-2">
                <FaGlobe className="text-amber-400 shrink-0" />
                <span>www.mandosobhann.org</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Location Map preview (Span 3) */}
          <div className="lg:col-span-3 text-left flex flex-col space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-purple-300">
              Location
            </h3>
            <a 
              href="https://share.google/R4odE7ZQNXk8qNKE7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full bg-white/5 p-2 rounded-xl border border-white/10 shadow-md block hover:bg-white/10 transition-colors duration-200 group"
            >
              {/* Map mockup */}
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 relative">
                <img 
                  src={IMAGES.maps.miniMap} 
                  alt="Town Hall Mangalore Location Map"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-deep-purple/10 flex items-center justify-center pointer-events-none">
                  <FaMapMarkerAlt className="text-3xl text-red-500 animate-bounce" />
                </div>
              </div>
              <p className="text-[10px] text-purple-200/60 mt-2 font-medium text-center group-hover:text-amber-300 transition-colors duration-200">
                Town Hall, Mangalore, Karnataka (Open Map)
              </p>
            </a>
          </div>

        </div>
        
        {/* Footer Divider */}
        <div className="h-[1px] bg-purple-900/40 my-6"></div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-purple-200/50 font-light gap-4">
          <div>
            © {new Date().getFullYear()} Mandd Sobhann. All Rights Reserved.
          </div>
          <div>
            Designed with <span className="text-red-500">❤</span> for Konkani Culture
          </div>
        </div>

      </div>
    </footer>
  );
}
