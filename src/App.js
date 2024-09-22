import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const contactRef = useRef(null);
  const ourTeamRef = useRef(null); // Reference for the Our Team section

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-white'>
      <Navbar aboutRef={aboutRef} eventsRef={eventsRef} contactRef={contactRef} />
      <Routes>
        <Route path="/" element={<Home onLearnMoreClick={() => handleScroll(aboutRef)} />} />
      </Routes>
      <div ref={aboutRef} id="about">
        <About ref={ourTeamRef} /> {/* Correctly passing the ref */}
      </div>
      <div ref={eventsRef} id="events">
        <Events />
      </div>
      <div ref={contactRef} id="contact">
        <Contact onOurTeamClick={() => handleScroll(ourTeamRef)} /> {/* Correctly passing the reference */}
      </div>
      <footer className="bg-green-700 text-white shadow mt-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://silvercreekminiso.vercel.app/" className="hover:underline">Silver Creek Mini SO™</a>. All Rights Reserved.</span>
          <p className="text-sm mx-8 text-white-500 sm:text-center dark:text-gray-400">Website Design by Nandita Raj Kumar</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
