import React from 'react'
import BathRoom from '../assets/Bathroom.jpg'
import Bedroom from '../assets/Bedroom.jpg'
import Diningroom from '../assets/Dining Room.jpg'
import Garage from '../assets/Garage.jpg'
import Garden from '../assets/Garden.jpg'
import Kitchen from '../assets/Kitchen.jpg'

const Projects = () => {
  return (
    <div className='max-w-[1440px] mx-auto text-left pt-5 pr-5 ease-in-out '>
      <h1 className='text-3xl text-[25px] font-medium'>Views    </h1>
      <h1 className='text-xl justify-end items-end underline underline-offset-2 text-md flex text-[19px]'>More Spaces   </h1>



            <div className='grid grid-rows-none ease-in-out m-7 grid-cols-3 gap-7 p-4 scroll-smooth pb-3'>
                <img className=' w-full h-full object-cover rounded-md  hover:scale-110 duration-700 bg-blend-lighten' src={Bedroom} alt="/" />
                <img className='w-full h-full object-cover rounded-md hover:scale-110 duration-700 bg-blend-lighten' src={BathRoom} alt="/" />
                <img className='w-full h-full object-cover rounded-md hover:scale-110 duration-700 bg-blend-lighten' src={Diningroom} alt="/" />
                <img className='w-full h-full object-cover rounded-md hover:scale-110 duration-700 bg-blend-lighten' src={Garage} alt="/" />
                <img className='w-full h-full object-cover rounded-md hover:scale-110 duration-700 bg-blend-lighten' src={Garden} alt="/" />
                <img className='w-full h-full object-cover rounded-md hover:scale-110 duration-700 bg-blend-lighten' src={Kitchen} alt="/" />
            </div>
    </div>
  )
}

export default Projects
