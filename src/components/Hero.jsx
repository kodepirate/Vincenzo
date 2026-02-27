import React from 'react'
import { motion } from 'framer-motion'
import Mansion from '../assets/mansion.jpg'

const Hero = () => {
  return (
    <div>
        <div className='w-full h-screen relative overflow-hidden'>
            <motion.img 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className='w-full h-full bg-blend-color object-cover' 
                src={Mansion} 
                alt="/" 
            />
        </div>
    </div>
  )
}   

export default Hero
