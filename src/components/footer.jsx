import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' px-4 sm:px-[2vw] md:px-[3vw] lg:px-[3vw]'>
    <div className='flex sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-xs overflow-hidden border-t pt-8'>
      

      <div>
        <img src={assets.logo} className='mb-5 w-20' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor, sit a elit. Voluptas ipsum doloremque cum natus, expedita delectu
        </p>
      </div>

      <div>
        <p className=' font-medium mb-5  prata-regular text-base '>B-Traders</p>
        <ul className='flex flex-col gap-1 text-gray-600 '>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Our Policy</li>
        </ul>
      </div>
      <div>
        <p className='text-base font-medium mb-5 prata-regular'>Contact us</p>
        <ul className=' flex flex-col gap-1 text-gray-600 '>
            <li>758-55045-78</li>
            <li>bazil@gmail.com</li>
        </ul>
      </div>
    </div>
    <div >
        <hr />
        <p className='py-2 prata-regular sm:py-1 text-xs text-center text-white bg-black'>Copyright 2024 .All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer
