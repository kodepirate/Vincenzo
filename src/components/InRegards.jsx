import React from 'react'
import { motion } from 'framer-motion'
import Inregards1 from '../assets/Inregards1.jpg'
import Inregards2 from '../assets/Inregards2.jpg'

const inRegardsData = [
  {
    title: 'In Regards to',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora in incidunt fugiat at? Quia blanditiis inventore perferendis? At odit accusantium nostrum enim. Aperiam temporibus amet voluptatibus quas modi nulla quidem doloremque porro nemo! Provident perspiciatis ab sit commodi saepe nulla! Corrupti obcaecati, esse tenetur suscipit sunt possimus odio, ad architecto repellendus quos accusantium magni pariatur soluta voluptas in qui quidem mollitia tempora autem sint? Distinctio porro asperiores culpa praesentium unde quae dolorem quo voluptate magnam laudantium maiores, eaque earum accusamus deserunt, dolores rem quos! Maiores dolore odio numquam nulla voluptas est quisquam, id quibusdam atque cum eveniet eos accusantium maxime.',
    subtitle: '~ Property of Knights',
    imgSrc: Inregards1,
    imgClasses: 'object-cover w-full md:w-[500px] h-[500px] md:h-[700px] rounded-md mx-auto',
    reverse: false
  },
  {
    title: 'Transformations',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora in incidunt fugiat at? Quia blanditiis inventore perferendis? At odit accusantium nostrum enim. Aperiam temporibus amet voluptatibus quas modi nulla quidem doloremque porro nemo! Provident perspiciatis ab sit commodi saepe nulla! Corrupti obcaecati, esse tenetur suscipit sunt possimus odio, ad architecto repellendus quos accusantium magni pariatur soluta voluptas in qui quidem mollitia tempora autem sint? Distinctio porro asperiores culpa praesentium unde quae dolorem quo voluptate magnam laudantium maiores, eaque earum accusamus deserunt, dolores rem quos! Maiores dolore odio numquam nulla voluptas est quisquam, id quibusdam atque cum eveniet eos accusantium maxime.',
    subtitle: '~ All Transformatins',
    imgSrc: Inregards2,
    imgClasses: 'object-cover w-full md:w-[500px] h-[500px] md:h-[600px] rounded-[20px] md:rounded-[200px] mx-auto',
    reverse: true
  }
]

const InRegards = () => {
  return (
    <div className='max-w-[1440px] mx-auto py-16 md:py-[170px] px-4 overflow-hidden'>
      {inRegardsData.map((item, index) => (
        <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center ${index !== 0 ? 'mt-24 md:mt-32' : ''}`}>

          <motion.div
            initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className={`w-full flex justify-center ${item.reverse ? 'md:order-2 md:pr-[50px]' : 'md:pl-[50px]'}`}
          >
            <img className={item.imgClasses} src={item.imgSrc} alt={item.title} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: item.reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`w-full flex flex-col justify-center ${item.reverse ? 'md:order-1' : ''} md:pr-8`}
          >
            <h1 className='text-3xl font-medium hover:underline underline-offset-2 duration-700'>{item.title}</h1>
            <p className='pt-[30px] md:pt-[60px] text-gray-700'>
              {item.text}
            </p>
            <div className='pt-[50px] md:pt-[250px]'>
              <h2 className='text-gray-400 underline underline-offset-2 hover:text-black cursor-pointer duration-500 flex justify-end pr-4' >{item.subtitle}</h2>
            </div>
          </motion.div>

        </div>
      ))}
    </div>
  )
}

export default InRegards
