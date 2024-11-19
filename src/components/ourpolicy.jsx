import React from 'react'
import { assets } from '../assets/assets'

const Ourpolicy = () => {
  return (
    <div className=' flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sm sm:text-sm  text-gray-700 ml-10 mr-10 mb-10'>

      <div>
        <img src={assets.exchange_icon} className='w-10 m-auto mb-5' alt="" />
        <p className='prata-regular font-semibold'> Easy Exchange Policy </p>
        <p className='prata-regular text-gray-500'>Terms 7 Conditions Apply</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-10 m-auto mb-5' alt="" />
        <p className=' prata-regular font-semibold'> Online Support</p>
        <p className='prata-regular text-gray-500'>24 hours a day, 7 days a week</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-10 m-auto mb-5' alt="" />
        <p className='prata-regular font-semibold'>Easy Return </p>
        <p className=' prata-regular text-gray-500'> Within 15 days for an exchange</p>
      </div>
      <div>
        <img src={assets.card} className='w-10 m-auto mb-4 ' alt="" />
        <p className='prata-regular  font-semibold'> Flexible Payment</p>
        <p className='prata-regular text-gray-500'> Pay with Multiple Credit Cards</p>
      </div>
    </div>
  )
}

export default Ourpolicy
