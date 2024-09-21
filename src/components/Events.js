import React from 'react'

const Events = () => {
  return (
    <div className='bg-white'>
<section className='my-12 bg-white'>
    <h1 className=' text-4xl p-8 font-bold text-center text-gray-900 md:text-5xl lg:text-6xl'>Events</h1>
    <div className='text-xl p-8 text-center w-3/4 mx-auto text-gray-900 md:text-2xl lg:text-2xl'> 
    <ul className='list-disc flex flex-wrap justify-around text-left'>
        <div className='m-4' >
        <li>Anatomy & Physiology</li>
        <li>Codebusters</li>
        <li>Crime Busters</li>
        <li>Disease Detective</li>
        <li>Dynamic Planet</li>
        <li>Ecology</li>
        </div>
        <div className='m-4'>
        <li>Entomology</li>
        <li>Experimental Design</li>
        <li>Fossils</li>
        <li>Meteorology</li>
        <li>Metric Master</li>
        <li>Wind Power (Written Portion) </li>

        </div>
        <div className='m-4'>
        <li>Optics (Written Portion) </li>
        <li>Potions and Poisons</li>
        <li>Reach for the Stars</li>
        <li>Road Scholar</li>
        <li>Write It Cad It</li>

        </div>
        
    </ul>
    </div>
    

</section>

</div>
  )
}

export default Events;