import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* header-left */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>

                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'> </p>
                        <p className='font-medium text-sm md:text-base sm:text-xs'>OUR BEST & TRUSTED SELLERS</p>
                    </div>
                    <h1 className='prata-regular text-2xl sm:py-3 lg:text-5xl md:text-3xl leading-relaxed '>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                       <Link to='/collection'><p  className='font-semibold text-sm md:text-base cursor-pointer '>SHOP NOW</p></Link> 
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>

                </div>

            </div>
            {/* header right */}
            <img className='w-full sm:w-1/2' src={assets.m1} alt="" />

        </div>
    )
}

export default Header
