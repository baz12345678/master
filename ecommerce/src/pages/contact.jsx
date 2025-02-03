import React from 'react'
import Title from '../components/title'
import { assets } from '../assets/assets'
import Newletter from '../components/newletter'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6 '>
          <p className='font-semibold text-xl text-gray-600'>OUR STORE</p>
          <p className='text-gray-500'>Email :baziljunaidi262@gmail.com</p>
          <p className='text-gray-500'>Helpline - 02170222</p>
          <p className='font-semibold text-xl text-gray-600'>Learn more</p>
          <button className='border  border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>EXPLORE NOW</button>
        </div>
      </div>
      <Newletter/>
      
    </div>
  )
}

export default Contact
