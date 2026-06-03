import React from 'react';
import { FaCamera } from 'react-icons/fa';

export default function GalleryPreview() {
  const images = [
    {
      id: 1,
      url: 'https://placehold.co/600x400?text=Clock+Tower+Mangalore',
      alt: 'Clock Tower Mangalore',
      label: 'Historical Landmark',
    },
    {
      id: 2,
      url: 'https://placehold.co/600x400?text=Mass+Choir+Singers',
      alt: 'Mass Choir Singers',
      label: 'Choir Group In Red/White',
    },
    {
      id: 3,
      url: 'https://placehold.co/600x400?text=Ghumot+and+Guitars+Choir',
      alt: 'Choir Performance Group',
      label: 'Traditional Instruments',
    },
    {
      id: 4,
      url: 'https://placehold.co/600x400?text=Conductor+Directing+Singers',
      alt: 'Conductor in Action',
      label: 'Stage Performance',
    },
    {
      id: 5,
      url: 'https://placehold.co/600x400?text=Mangalore+Beach+Sunset',
      alt: 'Beach Sunset',
      label: 'Mangalore Coastal View',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title & Divider */}
        <div>
          <h2 className="text-3xl font-extrabold text-deep-purple font-serif uppercase tracking-wider">
            Gallery Preview
          </h2>
          <div className="gold-divider mt-2">
            <div className="gold-divider-diamond"></div>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 max-w-lg mx-auto mb-12">
          Glimpses of past events, rehearsals, traditional settings, and visual milestones.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="relative aspect-[3/2] overflow-hidden rounded-xl group shadow-sm border border-gray-100 bg-slate-100 cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Blur backdrop cover on hover */}
              <div className="absolute inset-0 bg-deep-purple/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-3">
                <FaCamera className="text-xl text-amber-300 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <a 
            href="#gallery-view" 
            className="inline-flex items-center justify-center bg-primary-purple hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider px-8 py-3 rounded shadow-md hover:shadow-lg transition-all duration-300"
          >
            View Gallery
          </a>
        </div>

      </div>
    </section>
  );
}
