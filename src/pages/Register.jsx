import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaMusic, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vocalPart: 'soprano',
    experience: 'no',
    terms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.terms) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 relative">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-xl mx-auto relative z-10">
          
          {/* Back Button */}
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-xs font-bold text-primary-purple hover:text-deep-purple uppercase tracking-wider transition-colors duration-200"
            >
              <FaArrowLeft className="text-xs" /> Back to Home
            </Link>
          </div>

          {/* Form / Success Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sm:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                
                {/* Header */}
                <div className="text-center pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-secondary-gold mx-auto shadow-sm mb-3">
                    <FaMusic className="text-xl" />
                  </div>
                  <h1 className="text-2xl font-extrabold text-deep-purple font-serif uppercase tracking-wide">
                    Chorister Registration
                  </h1>
                  <p className="text-xs text-gray-500 mt-1">
                    Sign up to join the 1000+ voices Guinness World Record attempt.
                  </p>
                </div>

                {/* Input Fields */}
                <div className="space-y-4">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-deep-purple uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaUser className="text-sm" />
                      </div>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-deep-purple uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaEnvelope className="text-sm" />
                      </div>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-deep-purple uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaPhone className="text-sm" />
                      </div>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Vocal Part Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-deep-purple uppercase tracking-wider mb-2">
                      Voice Category / Part
                    </label>
                    <select
                      value={formData.vocalPart}
                      onChange={(e) => setFormData({ ...formData, vocalPart: e.target.value })}
                      className="block w-full px-3 py-3 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-200"
                    >
                      <option value="soprano">Soprano (High Female Voice)</option>
                      <option value="alto">Alto (Low Female Voice)</option>
                      <option value="tenor">Tenor (High Male Voice)</option>
                      <option value="bass">Bass (Low Male Voice)</option>
                      <option value="baritone">Baritone (Mid Male Voice)</option>
                    </select>
                  </div>

                  {/* Prior Choir Experience */}
                  <div>
                    <label className="block text-xs font-bold text-deep-purple uppercase tracking-wider mb-2">
                      Prior Choral Singing Experience?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input 
                          type="radio" 
                          name="experience" 
                          value="yes"
                          checked={formData.experience === 'yes'}
                          onChange={() => setFormData({ ...formData, experience: 'yes' })}
                          className="text-primary-purple focus:ring-primary-purple"
                        /> Yes, I have sung in a choir
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input 
                          type="radio" 
                          name="experience" 
                          value="no"
                          checked={formData.experience === 'no'}
                          onChange={() => setFormData({ ...formData, experience: 'no' })}
                          className="text-primary-purple focus:ring-primary-purple"
                        /> No, I am a beginner
                      </label>
                    </div>
                  </div>

                  {/* Agreement Terms */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input 
                        type="checkbox" 
                        required
                        checked={formData.terms}
                        onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                        className="mt-1 rounded text-primary-purple focus:ring-primary-purple"
                      />
                      <span className="text-xs text-gray-500 leading-normal">
                        I agree to attend scheduled choir rehearsals in Mangalore and abide by the rules of the Guinness World Record attempt.
                      </span>
                    </label>
                  </div>

                </div>

                {/* Submit Button */}
                <div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-deep-purple to-primary-purple hover:from-primary-purple hover:to-deep-purple text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    Submit Registration
                  </button>
                </div>

              </form>
            ) : (
              // Success Screen
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <FaCheckCircle className="text-4xl animate-bounce" />
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-deep-purple font-serif uppercase tracking-wider">
                    Registration Successful!
                  </h2>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-deep-purple">{formData.name}</strong>! Your registration has been received. A verification email has been sent to <span className="text-primary-purple">{formData.email}</span> with rehearsal schedules.
                  </p>
                </div>

                <div className="pt-6">
                  <Link 
                    to="/" 
                    className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-950 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md transition-all duration-200"
                  >
                    Go Back to Home
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
