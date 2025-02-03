import React from 'react'

const Newletter = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center  px-4 sm:px-[2vw] md:px-[3vw] lg:px-[3vw]'>
        <p className=' prata-regular text-2xl font-medium text-gray-800'> Subscribe now to get latest news </p>
    <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero doloribus cum numquam.
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
            <button type='submit' className='prata-regular  bg-black text-white text-sm px-6 py-3'>SUBSCRIBE</button>
        </form>
    </p>
    </div>
  )
}

export default Newletter
