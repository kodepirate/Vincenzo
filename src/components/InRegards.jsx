import React from 'react'
import  Inregards1 from '../assets/Inregards1.jpg'
import  Inregards2 from '../assets/Inregards2.jpg'

const InRegards = () => {
  return (
    <div>
      
    
    <div className=' max-w-[1440px]  mx-auto py-[170px] gap-4 px-4 grid-cols-2 grid'>
      <div className='pl-[50px]' >
           <img className=' object-cover w-[500px] h-[700px] rounded-md ' src={Inregards1} alt="/" />      
      </div>
      <div className=' justify-center  pr-8'>
        <h1 className='text-3xl font-medium hover:underline underline-offset-2 duration-700'>In Regards to</h1>
        
        <p className='pt-[60px]'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora in incidunt fugiat at? Quia blanditiis inventore perferendis? At odit accusantium nostrum enim. Aperiam temporibus amet voluptatibus quas modi nulla quidem doloremque porro nemo! Provident perspiciatis ab sit commodi saepe nulla! Corrupti obcaecati, esse tenetur suscipit sunt possimus odio, ad architecto repellendus quos accusantium magni pariatur soluta voluptas in qui quidem mollitia tempora autem sint? Distinctio porro asperiores culpa praesentium unde quae dolorem quo voluptate magnam laudantium maiores, eaque earum accusamus deserunt, dolores rem quos! Maiores dolore odio numquam nulla voluptas est quisquam, id quibusdam atque cum eveniet eos accusantium maxime.
        </p>
        <div className=' pt-[250px]'>

          <h2 className='align-bottom text-gray-400 underline underline-offset-2 hover:text-black cursor-pointer duration-500 justify-end flex pr-4' >~ Property of Knights</h2>
        </div>
        
      </div>
    </div>









     <div className=' max-w-[1440px]  mx-auto gap-4 px-4 grid-cols-2 grid'>
      <div className='pl-[50px]' >
           <img className=' object-cover w-[500px] h-[600px]  rounded-[200px]' src={Inregards2} alt="/" />      
      </div>
      <div className=' justify-center  pr-8'>
        <h1 className='text-3xl font-medium hover:underline underline-offset-2 duration-700'>Transformations</h1>
        
        <p className='pt-[60px]'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora in incidunt fugiat at? Quia blanditiis inventore perferendis? At odit accusantium nostrum enim. Aperiam temporibus amet voluptatibus quas modi nulla quidem doloremque porro nemo! Provident perspiciatis ab sit commodi saepe nulla! Corrupti obcaecati, esse tenetur suscipit sunt possimus odio, ad architecto repellendus quos accusantium magni pariatur soluta voluptas in qui quidem mollitia tempora autem sint? Distinctio porro asperiores culpa praesentium unde quae dolorem quo voluptate magnam laudantium maiores, eaque earum accusamus deserunt, dolores rem quos! Maiores dolore odio numquam nulla voluptas est quisquam, id quibusdam atque cum eveniet eos accusantium maxime.
        </p>
        <div className=' pt-[250px]'>

          <h2 className='align-bottom text-gray-400 underline underline-offset-2 hover:text-black cursor-pointer duration-500 justify-end flex pr-4' >~ All Transformatins</h2>
        </div>
        
      </div>
    </div>

    
    </div>
  )
}

export default InRegards
