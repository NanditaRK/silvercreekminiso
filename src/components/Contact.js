import React, { useState } from 'react';
import mail from "../assets/mail.svg";
import { Link } from 'react-router-dom';
const Contact = ({ onOurTeamClick }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "I have a question regarding a specific event.",
      answer: (
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Contact the specific Event Supervisor using the chat feature in Scilympiad to the corresponding Event Supervisor that can be found in the <button className='text-green-700 underline' onClick={onOurTeamClick}>Our Team</button> section.
        </p>
      ),
    },
    {
      question: "What is the cost to register?",
      answer: <p className="mb-2 text-gray-500 dark:text-gray-400">The cost to register for one team is $65.</p>,
    },
    {
      question: "When is the Invitational?",
      answer: <p className="mb-2 text-gray-500 dark:text-gray-400">The event will be held on January 11, 2025 as an online invitational that can be done from home.</p>,
    },
  ];

  return (
    <div className='bg-white'>
      <section className='my-12 mb-24 bg-white'>
        <h1 className='text-4xl p-8 font-bold text-center text-gray-900 md:text-5xl lg:text-6xl'>Contact</h1>
        <h1 className='text-3xl p-8 font-semibold text-center text-green-900 md:text-4xl lg:text-5xl'>FAQ</h1>

        <div className='text-xl p-8 text-center w-3/4 mx-auto text-gray-900 md:text-2xl lg:text-2xl'>
          <div id="accordion-collapse">
            {accordionData.map((item, index) => (
              <div key={index}>
                <h2 id={`accordion-collapse-heading-${index}`}>
                  <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl hover:bg-gray-100 gap-3 ${openIndex === index ? "bg-gray-100" : ""}`}
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`accordion-collapse-body-${index}`}
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                  </button>
                </h2>
                <div
                  id={`accordion-collapse-body-${index}`}
                  className={openIndex === index ? "" : "hidden"}
                  aria-labelledby={`accordion-collapse-heading-${index}`}
                >
                  <div className="p-5 border border-gray-200 dark:border-gray-700">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h1 className='text-3xl p-8 font-semibold text-center text-green-900 md:text-4xl lg:text-5xl'>Socials</h1>
        <div className='flex flex-wrap justify-center gap-24 m-12'>
          <Link target="_blank" to='https://www.instagram.com/scioly_schs/'>
            <div className= 'hover:relative hover:bottom-2'>
        
                <span class="[&>svg]:h-24 [&>svg]:w-24 [&>svg]:fill-[#c13584]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
                <p className='font-semibold text-lg text-center m-2'>Instagram</p>
            </div>
            </Link>
            <Link target="_blank" to='https://discord.gg/EAFcwjZ4g6'>
            <div className= 'hover:relative hover:bottom-2'>
                <span class="[&>svg]:h-24 [&>svg]:w-24 [&>svg]:fill-[#7289da]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  
                    <path
                      d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                  </svg>
                </span>
                <p className='font-semibold text-lg text-center m-2'>Discord</p>
            </div>
            </Link>

            <div  className= 'hover:relative hover:bottom-2' target="_blank" onClick={(e) => {window.location.href ='mailto:schssciolyclub@gmail.com';}}>
            <img className="h-24" src={mail}></img>
                <p className='font-semibold text-lg text-center m-2'>Email</p>
            </div>
            </div>
      </section>
    </div>
  );
};

export default Contact;
