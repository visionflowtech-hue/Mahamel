import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Schedule from './pages/Schedule';
import GuinnessRecord from './pages/GuinnessRecord';
import Contact from './pages/Contact';
import Register from './pages/Register';
import LoadingSplash from './components/LoadingSplash';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleEnterSite = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <LoadingSplash onEnter={handleEnterSite} />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/guinness-record" element={<GuinnessRecord />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}
