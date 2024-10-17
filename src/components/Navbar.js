import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ aboutRef, eventsRef, contactRef }) => {
  let [menu, setMenu] = useState(false);

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setMenu(false); // Close mobile menu after click
    }
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-16" alt="Flowbite Logo" />
          <span className="self-center hidden md:flex text-2xl font-semibold whitespace-nowrap text-gray-900">Silver Creek Mini SO</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link target="_blank" to="https://scilympiad.com/silvercreek"><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Register</button></Link>
          <button onClick={() => { setMenu(!menu) }} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded={menu}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button onClick={() => handleScroll(aboutRef)} className="block py-2 px-3 md:p-4 text-gray-900 rounded hover:text-green-500">About</button>
            </li>
            <li>
              <button onClick={() => handleScroll(eventsRef)} className="block py-2 px-3 md:p-4 text-gray-900 rounded hover:text-green-500">Events</button>
            </li>
            <li>
              <button onClick={() => handleScroll(contactRef)} className="block py-2 px-3 md:p-4 text-gray-900 rounded hover:text-green-500">Contact</button>
            </li>
          </ul>
        </div>
        {menu && (
          <div className="items-center justify-between w-full md:hidden md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col relative font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button onClick={() => handleScroll(aboutRef)} className="block py-2 px-3 md:p-4 w-full text-white rounded hover:bg-green-200 hover:text-green-900">About</button>
              </li>
              <li>
                <button onClick={() => handleScroll(eventsRef)} className="block py-2 px-3 md:p-4 w-full text-white rounded hover:bg-green-200 hover:text-green-900">Events</button>
              </li>
              <li>
                <button onClick={() => handleScroll(contactRef)} className="block py-2 px-3 md:p-4 w-full text-white rounded hover:bg-green-200 hover:text-green-900">Contact</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
