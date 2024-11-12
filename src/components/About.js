import React from 'react';
import nandita from "../assets/pfp/nandita_rajkumar.png";
import amala from "../assets/pfp/amala_valiveti.png";
import anaya from "../assets/pfp/anaya_jain.png";
import smarnita from "../assets/pfp/smarnita_prashanth.png";
import reshma from "../assets/pfp/reshma_sudhakar.png";

const About = React.forwardRef((props, ref) => {
  return (
    <div>
      <section id="about" className='my-12 bg-white'>
        <h1 className='text-4xl p-8 font-bold text-center text-gray-900 md:text-5xl lg:text-6xl'>About</h1>
        <h3 className='text-xl p-8 text-center w-3/4 mx-auto text-gray-900 md:text-2xl lg:text-2xl'>
          Silver Creek Mini SO will be hosted by the Silver Creek High School Science Olympiad Team. 
          Our goal is to inspire students to excel in science and engineering through hands-on experience and collaborative learning.
        </h3>
    <div className='flex mx-auto w-4/5 justify-around'>
            <a target="_blank" href="https://docs.google.com/document/d/1UFlr4cO9ld8uKjngHdAFryC_J0tjTopgJHBu_5R8sbE/edit?usp=sharing"><button
              className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg bg-green-900 hover:bg-green-800 focus:ring-4 focus:ring-gray-400">
              Event Slate
            </button></a>

                <a target="_blank" href="https://docs.google.com/document/d/19V3faClVTWK3EYqDy0qyD7lq1KueVi0fYEKjhogz1o4/edit?usp=sharing"><button
              className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg bg-green-900 hover:bg-green-800 focus:ring-4 focus:ring-gray-400">
              Event Modifications
            </button></a>

                <a target="_blank" href="https://docs.google.com/document/d/1H9b-vdSyzMCgi9wCY1aEAEWObXilNCdbh2apjX-02k8/edit?usp=sharing"><button
              className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg bg-green-900 hover:bg-green-800 focus:ring-4 focus:ring-gray-400">
              Invitational Updates
            </button></a>

                </div>
      </section>
      <section>
      <h1 className=' text-3xl p-8 font-semibold text-center text-green-900 md:text-4xl lg:text-5xl'>Mission</h1>
    <h3 className='text-xl p-8 w-3/4 mx-auto text-gray-900 md:text-2xl lg:text-2xl'> <span className='text-4xl text-green-700'>»</span> <bold className='font-extrabold'>High Quality Tests:</bold> We want to ensure that all teams and events recieve testing material that will appropriately prepare them for competitions in the future. To assure this, we will have an event supervisor per each event to overseer all processes of the invitational from writing to grading. </h3>
    <h3 className='text-xl p-8 w-3/4 mx-auto text-gray-900 md:text-2xl lg:text-2xl'> <span className='text-4xl text-green-700'>»</span> <bold className='font-extrabold'>Smooth Experience:</bold> Through frequent communication between our team and the competing schools, we hope to minimize any problems that may impede the ease of competing in our invitational. We hope to make it as easy as possible for competitors to understand the logistics of the invitational so they can soley focus on performing well on their events.  </h3>
      </section>

      <section ref={ref} id="our-team" className='my-12 bg-white'>
        <h1 className='text-3xl p-8 font-semibold text-center text-green-900 md:text-4xl lg:text-5xl'>Our Team</h1>
        <div className='m-8 flex justify-center flex-wrap'>
          {/* Team members cards */}
          <div className="card m-4 bg-white w-96 shadow-2xl">
            <figure>
              <img className='' src={nandita} alt="Nandita Raj Kumar" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Nandita Raj Kumar</h2>
              <p>Co-President and Event Supervisor of Anatomy and Physiology</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-green-700 text-white hover:bg-green-800 border border-none">Message</button>
              </div>
            </div>
          </div>

          <div className="card m-4 bg-white w-96 shadow-2xl">
            <figure>
              <img className='' src={amala} alt="Amala Valiveti" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Amala Valiveti</h2>
              <p>Co-President and Event Supervisor of Disease Detectives</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-green-700 text-white hover:bg-green-800 border border-none">Message</button>
              </div>
            </div>
          </div>

          <div className="card m-4 bg-white w-96 shadow-2xl">
            <figure>
              <img className='' src={anaya} alt="Anaya Jain" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Anaya Jain</h2>
              <p>Vice President and Event Supervisor of Crime Busters</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-green-700 text-white hover:bg-green-800 border border-none">Message</button>
              </div>
            </div>
          </div>

          <div className="card m-4 bg-white w-96 shadow-2xl">
            <figure>
              <img className='' src={smarnita} alt="Smarnita Prashanth" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Smarnita Prashanth</h2>
              <p>Treasurer and Event Supervisor of Ecology </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-green-700 text-white hover:bg-green-800 border border-none">Message</button>
              </div>
            </div>
          </div>

          <div className="card m-4 bg-white w-96 shadow-2xl">
            <figure>
              <img className='' src={reshma} alt="Name of Person" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Reshma Sudhakar</h2>
              <p>Secretary and Event Supervisor of Dynamic Planet</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-green-700 text-white hover:bg-green-800 border border-none">Message</button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
});

export default About;
