import React, { useState, useEffect } from 'react';
import { FaMusic, FaClock, FaAward, FaArrowRight } from 'react-icons/fa';
import { IMAGES } from '../utils/images';

export default function LoadingSplash({ onEnter }) {
  const targetDate = new Date(2026, 10, 3, 6, 0, 0);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false
  });
  
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Countdown timer logic
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let timeLeftData = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isCompleted: false
      };

      if (difference > 0) {
        timeLeftData = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isCompleted: false
        };
      } else {
        timeLeftData.isCompleted = true;
      }
      
      setTimeLeft(timeLeftData);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const [redirectCountdown, setRedirectCountdown] = useState(10);

  // 10-second auto-redirect logic
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsReady(true);
          return 100;
        }
        return prev + 1; // 1% every 100ms = 100% in 10 seconds
      });
    }, 100);

    const redirectInterval = setInterval(() => {
      setRedirectCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(redirectInterval);
          onEnter(); // Auto-redirect after 10 seconds
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(redirectInterval);
    };
  }, [onEnter]);

  // Pad numbers with leading zeros
  const padZero = (num) => String(num).padStart(2, '0');

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0D041A] text-white flex flex-col justify-between p-6 sm:p-8 overflow-hidden select-none">
      
      {/* Background Animated Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-purple/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-gold/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[90px] pointer-events-none"></div>

      {/* Header Branding */}
      <div className="w-full flex justify-between items-center relative z-10 max-w-7xl mx-auto">
        <img 
          src={IMAGES.logo} 
          alt="Mandd Sobhann Logo" 
          className="h-16 w-auto object-contain animate-float"
        />
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
          <FaAward className="text-amber-400 text-sm animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">Guinness Record Attempt</span>
        </div>
      </div>

      {/* Main Countdown & Progress Content */}
      <div className="flex-grow flex flex-col items-center justify-center relative z-10 max-w-4xl mx-auto w-full py-12">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-[10px] font-black text-amber-300 uppercase tracking-[0.25em] bg-amber-500/10 border border-amber-500/25 px-4 py-1.5 rounded-full inline-block">
            WORLD RECORD ATTEMPT
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide leading-tight bg-gradient-to-r from-white via-purple-100 to-amber-200 bg-clip-text text-transparent">
            12 Days 12 Min 12 Sec
          </h1>
          <p className="text-xs sm:text-sm text-purple-200/60 max-w-md mx-auto font-light leading-relaxed">
            The longest non-stop Konkani choral singing world record. Launching live from Town Hall, Mangalore.
          </p>
        </div>

        {/* Live Countdown Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl mb-12">
          {[
            { label: 'DAYS', val: padZero(timeLeft.days) },
            { label: 'HOURS', val: padZero(timeLeft.hours) },
            { label: 'MINUTES', val: padZero(timeLeft.minutes) },
            { label: 'SECONDS', val: padZero(timeLeft.seconds), active: true }
          ].map((card, idx) => (
            <div 
              key={idx} 
              className={`bg-[#170B2A]/90 border ${
                card.active ? 'border-amber-400/40 shadow-lg shadow-amber-400/5' : 'border-purple-900/30'
              } p-6 sm:p-8 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md transition-all duration-300 hover:scale-[1.03] group`}
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
              
              {/* Value */}
              <div className={`text-4xl sm:text-5xl font-black tracking-tight leading-none font-sans bg-clip-text text-transparent bg-gradient-to-b ${
                card.active ? 'from-amber-200 to-amber-400' : 'from-white to-purple-200'
              } group-hover:scale-105 transition-transform duration-300`}>
                {card.val}
              </div>
              
              {/* Label */}
              <div className="text-[10px] font-black tracking-widest uppercase text-purple-300/50 mt-3">
                {card.label}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar & Enter Button Area */}
        <div className="w-full max-w-md flex flex-col items-center space-y-6">
          <div className="w-full space-y-2">
            {/* Progress Text */}
            <div className="flex justify-between items-center text-[10px] text-purple-300/60 font-black tracking-wider uppercase">
              <span>Entering Official Site in {redirectCountdown}s...</span>
              <span>{loadingProgress}%</span>
            </div>
            {/* Progress Track */}
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
              <div 
                className="h-full bg-gradient-to-r from-primary-purple via-purple-500 to-amber-300 rounded-full transition-all duration-100"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>
          
          {/* Premium Enter button */}
          <button 
            onClick={onEnter}
            className="w-full py-4 px-8 bg-gradient-to-r from-[#DFB15B] to-[#B38728] hover:from-[#E6B862] hover:to-[#C09230] text-[#1A0933] font-black uppercase text-xs tracking-[0.2em] rounded-xl shadow-[0_0_30px_rgba(223,177,91,0.15)] hover:shadow-[0_0_40px_rgba(223,177,91,0.3)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer group animate-bounce-subtle"
          >
            Enter Official Site 
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>

      {/* Footer Branding info */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center text-[10px] text-purple-300/40 tracking-wider font-semibold relative z-10 max-w-7xl mx-auto border-t border-purple-950/40 pt-6 gap-2 text-center sm:text-left">
        <div>
          © {new Date().getFullYear()} Mandd Sobhann. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-1">
          <FaClock className="text-amber-400/50" />
          Countdown target: Nov 3, 2026 - 06:00:00 AM
        </div>
      </div>

    </div>
  );
}
