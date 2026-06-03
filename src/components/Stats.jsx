import React from 'react';
import { FaMusic, FaAward, FaUsers, FaCalendarAlt } from 'react-icons/fa';

export default function Stats() {
  const statsList = [
    {
      id: 'duration',
      value: '12 DAYS',
      label: '12 MIN 12 SEC',
      sublabel: 'Non-Stop Singing',
      icon: <FaMusic className="text-2xl text-primary-purple" />,
      bgColor: 'bg-purple-50',
    },
    {
      id: 'guinness',
      value: 'GUINNESS',
      label: 'WORLD RECORD',
      sublabel: 'Attempt',
      icon: <FaAward className="text-2xl text-blue-600" />,
      bgColor: 'bg-blue-50',
    },
    {
      id: 'participants',
      value: '1000+',
      label: 'PARTICIPANTS',
      sublabel: 'Expected',
      icon: <FaUsers className="text-2xl text-pink-600" />,
      bgColor: 'bg-pink-50',
    },
    {
      id: 'finale',
      value: '15',
      label: 'NOVEMBER 2026',
      sublabel: 'Grand Finale',
      icon: <FaCalendarAlt className="text-2xl text-deep-purple" />,
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section id="stats" className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
            
            {statsList.map((stat, index) => (
              <div 
                key={stat.id} 
                className={`flex items-center gap-4 py-4 sm:py-2 lg:py-0 ${index > 0 ? 'lg:pl-8' : ''} ${index % 2 === 1 ? 'sm:pl-4' : ''}`}
              >
                {/* Circle Icon wrapper */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${stat.bgColor} shadow-inner`}>
                  {stat.icon}
                </div>
                
                {/* Stats Text */}
                <div className="text-left">
                  <div className="text-2xl font-black text-slate-800 leading-none tracking-tight font-sans">
                    {stat.value}
                  </div>
                  <div className="text-xs font-black text-deep-purple uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
