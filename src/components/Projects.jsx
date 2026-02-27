import React from 'react'
import { motion } from 'framer-motion'
import BathRoom from '../assets/Bathroom.jpg'
import Bedroom from '../assets/Bedroom.jpg'
import Diningroom from '../assets/Dining Room.jpg'
import Garage from '../assets/Garage.jpg'
import Garden from '../assets/Garden.jpg'
import Kitchen from '../assets/Kitchen.jpg'

const projectImages = [
  { src: Bedroom, alt: 'Bedroom' },
  { src: BathRoom, alt: 'Bathroom' },
  { src: Diningroom, alt: 'Dining Room' },
  { src: Garage, alt: 'Garage' },
  { src: Garden, alt: 'Garden' },
  { src: Kitchen, alt: 'Kitchen' }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const Projects = () => {
  return (
    <div className='max-w-[1440px] mx-auto text-left pt-16 px-4 md:px-8 ease-in-out'>
      <div className='flex justify-between items-end mb-6'>
        <h1 className='text-3xl text-[25px] font-medium'>Views</h1>
        <h1 className='text-xl underline underline-offset-2 text-md text-[19px] cursor-pointer hover:text-gray-600 transition-colors'>More Spaces</h1>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 pb-3'
      >
        {projectImages.map((img, index) => (
          <motion.div key={index} variants={itemVariants} className="overflow-hidden rounded-md shadow-lg aspect-[4/3]">
            <img
              className='w-full h-full object-cover rounded-md hover:scale-110 transition-transform duration-700 bg-blend-lighten'
              src={img.src}
              alt={img.alt}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
