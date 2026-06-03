import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Highlights from '../components/Highlights';
import Timeline from '../components/Timeline';
import RegistrationCTA from '../components/RegistrationCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Highlights />
        <Timeline />
        <RegistrationCTA />
      </main>
      <Footer />
    </div>
  );
}
