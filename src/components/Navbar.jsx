import React from 'react'
import { motion } from 'framer-motion'

const navItems = ['Home', 'Products', 'In Regards', 'News', 'Contact']

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='w-full flex justify-between absolute z-10 text-white'
    >
      <div>
        <h1 className='p-4 mx-3 text-3xl'>Vincenzo</h1>
        <p className='pl-9 my-[-16px] text-sm'>Millions Dream</p>
      </div>
      <div className='p-4 hidden md:flex justify-end items-end'>
        <ul className='flex space-x-3 items-end justify-end'>
          {navItems.map((item, index) => (
            <li key={index} className='p-4 hover:underline cursor-pointer underline-offset-4 hover:text-neutral-300 duration-700'>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default Navbar
