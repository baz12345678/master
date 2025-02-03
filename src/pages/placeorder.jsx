import React, { useContext, useState } from 'react'
import Title from '../components/title'
import Carttotal from '../components/carttotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/shopcontext'

const Placeorder = () => {

  const  [method,setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[70vh] border-t px-4 sm:px-[2vw] md:px-[3vw] lg:px-[3vw] '>

  {/* left */}


      <div className='flex flex-col gap-4 w-full sm:max-w-[350px] text-sm' >
          
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
          </div>
          <div className='flex gap-2'>
            <input className='border border-gray-400 rounded py-2 px-3 w-full' type="text" placeholder='First name'/>
            <input className='border border-gray-400 rounded py-2 px-3 w-full' type="text" placeholder='Last name'/>
          </div>
          <input className='border border-gray-400 rounded py-2 px-3 w-full' type="text" placeholder='Email'/>
          <input className='border border-gray-400 rounded py-2 px-3 w-full' type="text" placeholder='Address'/>
          <div className='flex gap-2'>
            <input className='border border-gray-400 rounded py-2 px-3 w-full' type="text" placeholder='City'/>
            <input className='border border-gray-400 rounded py-2 px-3 w-full' type="text" placeholder='State'/>
          </div>
          <div className='flex gap-2'>
            <input className='border border-gray-400 rounded py-2 px-3 w-full' type="number" placeholder='Zipcode '/>
            <input className='border border-gray-400 rounded py-2 px-3 w-full' type="text" placeholder='Country'/>
          </div>
          <input className='border border-gray-400 rounded py-2 px-3 w-full' type="number" placeholder='Phone'/>
                    

      </div>

      {/* right */}

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <Carttotal/>
        </div>


        <div className='mt-14'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* payment */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3 h-3 border rounded-full ${method === 'stripe' ? 'bg-blue-600' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3 h-3 border rounded-full ${method === 'razorpay' ? 'bg-blue-600' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3 h-3 border rounded-full ${method === 'cod' ? 'bg-blue-600' : ''}`}></p>
              <p   className='text-gray-600 text-sm font-medium mx-5'>CASH ON DELIVERY</p>
            </div>
          </div>
          
          <div className='w-full text-end mt-8' >
            <button onClick={()=>navigate('/order')} className='bg-black text-white px-16 py-3 text-sm active:bg-orange-500'>PLACE ORDER</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Placeorder
