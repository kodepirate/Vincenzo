import React from 'react'
import { motion } from 'framer-motion'
import News1 from '../assets/news1.png'
import News2 from '../assets/news2.png'

const newsData = [
  {
    date: '10.05.2019',
    title: 'The Life Style of Vincenzos',
    imgSrc: News1,
    imgClasses: 'object-cover w-full h-[300px] md:h-auto rounded-md shadow-md',
    containerClasses: 'flex flex-col items-start',
    textClasses: ''
  },
  {
    date: '10.05.2019',
    title: 'What makes Vincenzo Unique',
    imgSrc: News2,
    imgClasses: 'object-cover w-full md:w-auto md:h-[400px] rounded-md shadow-md',
    containerClasses: 'flex flex-col md:items-end mt-12 md:mt-0',
    textClasses: 'md:text-left md:w-[400px]'
  }
]

const News = () => {
  return (
    <div className='max-w-[1440px] pt-[90px] mx-auto py-16 px-4 md:px-8'>

      <div className='flex justify-between items-end mb-12'>
        <h1 className='text-3xl text-[25px] font-serif'>Latest News</h1>
        <h2 className='pb-2 underline font-normal underline-offset-2 text-sm cursor-pointer hover:text-gray-600 transition-colors'>All news</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-9 md:mx-7'>
        {newsData.map((news, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`group cursor-pointer ${news.containerClasses}`}
          >
            <div className='overflow-hidden rounded-md w-full flex md:justify-end'>
              <img className={`transform group-hover:scale-105 transition-transform duration-500 ${news.imgClasses}`} src={news.imgSrc} alt={news.title} />
            </div>
            <div className={`w-full ${news.textClasses} mt-6`}>
              <h1 className='text-gray-500 font-medium'>{news.date}</h1>
              <h1 className='pt-2 font-bold font-serif text-2xl md:text-3xl transition-colors duration-300'>{news.title}</h1>
              <p className='pt-4 text-gray-600 group-hover:text-black duration-300 font-medium'>Read more</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default News
