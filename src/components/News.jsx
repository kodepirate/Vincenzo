import React from 'react'
import News1 from '../assets/news1.png'
import News2 from '../assets/news2.png'

const News = () => {
  return (
    <div className='max-w-[1440px] pt-[90px] mx-auto py-5 '>

      <div>
 <h1 className='text-3xl text-[25px] font-serif'>Latest News</h1>
      <h2 className='pb-7 justify-end items-end underline font-normal underline-offset-2 text-sm flex'>All news</h2>
      </div>

      <div className='gap-9 px-4 grid-cols-2 mx-7 grid grid-rows-none'>
        <div className='pl-[50px] hover:scale-105  duration-500'>
            <img className='object-cover  ' src={News1} alt="/" />
            <h1 className='pt-8'>10.05.2019</h1>
            <h1 className='pt-6 font-bold font-serif text-3xl'>The Life Style of Vincenzos</h1>
            <p className=' pt-6 pt[-50px] text-gray-600 hover:scale-100 hover:text-black cursor-pointer duration-300'>Read more</p>
            </div>


            <div className='hover:scale-105  duration-500'>
                <div className='pl-[50px] justify-end flex items-end      align-bottom'>
            <img className='object-cover h-[400px] ' src={News2} alt="/" />
            
            </div>
            <h1 className='ml-[15rem] pt-5'>10.05.2019</h1>    
            <h1 className='ml-[15rem]  pt-6 text-gray-500 font-serif text-3xl'>What makes Vincenzo Unique</h1>
            <p className='ml-[15rem] pt-5 text-gray-600 hover:scale-100 hover:text-black cursor-pointer duration-300'>Read more</p>
            </div>
      </div>
      
    </div>
  )
}

export default News
