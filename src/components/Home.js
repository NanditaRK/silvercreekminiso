import React, { useEffect, useState } from 'react';

const Home = ({ onLearnMoreClick }) => {
  const endTime = new Date('2025-01-11T16:00:00Z').getTime();
  const [remainingTime, setRemainingTime] = useState(endTime - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => {
        const newTime = endTime - Date.now();
        if (newTime <= 0) {
          clearInterval(interval);
          return 0; // Stop timer at zero
        }
        return newTime; // Update remaining time
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  // Calculate days, hours, minutes, and seconds
  const days = String(Math.floor(remainingTime / (24 * 60 * 60 * 1000))).padStart(2, '0');
  const hours = String(Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))).padStart(2, '0');
  const minutes = String(Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000))).padStart(2, '0');
  const seconds = String(Math.floor((remainingTime % (60 * 1000)) / 1000)).padStart(2, '0');

  return (
    <div>
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Welcome to Silver Creek Mini SO</h1>
          <p className=" text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Practice for Science Olympiad with our Mini SO Invitational if you are a Division B team.</p>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"><bold className='font-extrabold'>Registration:</bold> $65.00</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a target="_blank" href="https://scilympiad.com/silvercreek" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Register
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
            <button 
              onClick={onLearnMoreClick} 
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>
      <h1 className='mb-4 text-3xl font-semibold tracking-tight text-center p-4 py-12 leading-none text-gray-900 md:text-4xl lg:text-5xl'>Countdown to Silver Creek Mini SO</h1>
      <div className="grid w-fit mx-auto grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-green-700 rounded-box text-white">
          <span className="countdown font-mono text-5xl">{days}</span>
          days
        </div>
        <div className="flex flex-col p-2 bg-green-700 rounded-box text-white">
          <span className="countdown font-mono text-5xl">{hours}</span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-green-700 rounded-box text-white">
          <span className="countdown font-mono text-5xl">{minutes}</span>
          min
        </div>
        <div className="flex flex-col p-2 bg-green-700 rounded-box text-white">
          <span className="countdown font-mono text-5xl">{seconds}</span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Home;
