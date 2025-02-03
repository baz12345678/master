import React from 'react'
import Marquee from 'react-fast-marquee'

const Announcement = () => {
  return (
    <div className='w-full'>
    <Marquee autoFill Boolean={false} speed={180} direction='right' className='w-full'>
            <div className='flex bg-black  text-white p-2 cursor-pointer text-xs sm:text-base md:text-base lg:text-base' >

                <span className='mr-56'>10% Off on any item  </span>
                <span className='mr-56'>Shopping above 5000 delivery is free</span>
                <span className='mr-56'>Delivery All over Pakistan</span>
                <span className='mr-56'>Latest Arrivals</span>
            </div>
        </Marquee>



    </div>
  )
}

export default Announcement