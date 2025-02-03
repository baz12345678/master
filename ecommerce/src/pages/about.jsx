import React from 'react'
import Title from '../components/title'
import { assets } from '../assets/assets'
import Newletter from '../components/newletter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[470px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt error eum libero iusto consequuntur fugiat perferendis ullam. Repellendus sint possimus ratione impedit iure alias iusto.</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse amet, enim ut deleniti atque repellat laboriosam odio saepe commodi assumenda iste vel inventore officiis.</p>
           <b>Our Service</b>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore accusamus reiciendis saepe dolore aspernatur quibusdam unde qui at minus veniam ab, deserunt corporis ducimus eveniet, mollitia quasi aperiam nulla porro.</p>
           
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-blue-500 hover:text-white transition-all duration-500'>
          <b>QUALITY :</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, magnam. Eum, velit! Sint modi consequatur aut molestiae consequuntur, repudiandae quam!</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5  hover:bg-blue-500 hover:text-white transition-all duration-500'>
          <b> FAST SERVICE :</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, magnam. Eum, velit! Sint modi consequatur aut molestiae consequuntur, repudiandae quam!</p>

        </div>
       
      </div>
      <Newletter/>
      
    </div>
  )
}

export default About
