import React from 'react';
import { FaTrophy, FaUsers, FaGlobe, FaMusic, FaPlayCircle, FaAward } from 'react-icons/fa';

export default function Highlights() {
  const cards = [
    {
      id: 1,
      title: 'World Record Attempt',
      desc: 'Be a part of history in the making as we set the record for the longest non-stop choral performance.',
      icon: <FaTrophy className="text-3xl text-amber-500" />,
      color: 'border-amber-100 hover:border-amber-400 hover:shadow-amber-100/50',
      iconBg: 'bg-amber-50',
    },
    {
      id: 2,
      title: 'Mass Choir Performance',
      desc: 'Experience the power of over 1000+ voices singing in grand unison and traditional harmony.',
      icon: <FaUsers className="text-3xl text-purple-600" />,
      color: 'border-purple-100 hover:border-purple-400 hover:shadow-purple-100/50',
      iconBg: 'bg-purple-50',
    },
    {
      id: 3,
      title: 'Konkani Heritage',
      desc: 'Honoring and showcasing the rich ancestral roots, linguistic depth, and folklore of Konkani culture.',
      icon: <FaGlobe className="text-3xl text-blue-600" />,
      color: 'border-blue-100 hover:border-blue-400 hover:shadow-blue-100/50',
      iconBg: 'bg-blue-50',
    },
    {
      id: 4,
      title: 'Cultural Programs',
      desc: 'Spectacular traditional dance, dramatic expressions, and musical segments celebrating Konkan traditions.',
      icon: <FaMusic className="text-3xl text-pink-600" />,
      color: 'border-pink-100 hover:border-pink-400 hover:shadow-pink-100/50',
      iconBg: 'bg-pink-50',
    },
    {
      id: 5,
      title: 'Live Streaming',
      desc: 'Watch the entire event live from anywhere in the world through high-definition broadcast streams.',
      icon: <FaPlayCircle className="text-3xl text-emerald-600" />,
      color: 'border-emerald-100 hover:border-emerald-400 hover:shadow-emerald-100/50',
      iconBg: 'bg-emerald-50',
    },
    {
      id: 6,
      title: 'Awards & Certificates',
      desc: 'Official participation certificates and commemorative medallions for all registered choristers.',
      icon: <FaAward className="text-3xl text-indigo-600" />,
      color: 'border-indigo-100 hover:border-indigo-400 hover:shadow-indigo-100/50',
      iconBg: 'bg-indigo-50',
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-slate-50/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title with Gold Separator */}
        <div>
          <h2 className="text-3xl font-extrabold text-deep-purple font-serif uppercase tracking-wider">
            Event Highlights
          </h2>
          <div className="gold-divider mt-2">
            <div className="gold-divider-diamond"></div>
          </div>
        </div>
        
        {/* Subtitle description */}
        <p className="text-sm text-gray-500 max-w-xl mx-auto mb-12">
          Discover what makes this global Konkani musical summit a once-in-a-lifetime historical milestone.
        </p>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.id}
              className={`bg-white p-8 rounded-2xl border-2 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center flex flex-col items-center justify-between min-h-[280px] ${card.color}`}
            >
              {/* Card Icon Header */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 mb-5 shadow-inner ${card.iconBg}`}>
                {card.icon}
              </div>
              
              {/* Card Title & Desc */}
              <div className="flex-1 flex flex-col justify-center mb-4">
                <h3 className="text-base font-extrabold text-deep-purple uppercase tracking-wider">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-3 leading-relaxed">
                  {card.desc}
                </p>
              </div>
              
              {/* Gold Ornament Bar at the bottom of the card */}
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-secondary-gold to-transparent opacity-80 mt-2"></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
