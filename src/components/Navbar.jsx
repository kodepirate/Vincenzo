import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex  justify-between absolute z-10 text-white'>
        <div>
      <h1 className='p-4 mx-3 text-3xl'>Vincenzo</h1>
      <p className='pl-9 my-[-16px] text-sm'>Millions Dream</p>
        </div>
        <div className='p-4 justify-end items-end'>
            <ul className='flex space-x-3 items-end justify-end'>
                <li className='p-4 hover:underline cursor-pointer underline-offset-4 hover:text-neutral-300 duration-700'>Home</li>
                <li className='p-4 hover:underline cursor-pointer underline-offset-4 hover:text-neutral-300 duration-700'>Products</li>
                <li className='p-4 hover:underline cursor-pointer underline-offset-4 hover:text-neutral-300 duration-700'>In Regards</li>
                <li className='p-4 hover:underline cursor-pointer underline-offset-4 hover:text-neutral-300 duration-700'>News</li>
                <li className='p-4 hover:underline cursor-pointer underline-offset-4 hover:text-neutral-300 duration-700'>Contact</li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar
