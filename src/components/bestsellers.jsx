import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopcontext'
import Title from './title';
import Productitem from './productitem';

const Bestsellers = () => {


  const {products} = useContext(ShopContext);
  const [bestseller,setBestseller] = useState([]);

  useEffect(()=>{
    const bestProduct = products.filter((item)=>(item.bestseller))
    setBestseller(bestProduct.slice(0,5))
  })

  return (

    <div className='my-16'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'Best & '} text2={'Trusted Sellers'}/>
        <p className='w-3/4 m-auto text-sm sm:text-sm md:text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odit, repellendus aliquam repudiandae nobis consequuntur</p>
      </div>
      <div  className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
       {bestseller.map((item,index)=>(
        <Productitem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
       ))
       
       }
      </div>
    
    </div>
  )
}

export default Bestsellers
