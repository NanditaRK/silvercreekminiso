import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='bg-white'>
      <Navbar aboutRef={aboutRef} eventsRef={eventsRef} contactRef={contactRef} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div ref={aboutRef} id="about">
        <About />
      </div>
      <div ref={eventsRef} id="events">
        <Events />
      </div>
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
