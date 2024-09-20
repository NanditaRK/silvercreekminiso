import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {Routes, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Home />
      <About />
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
