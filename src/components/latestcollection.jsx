import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopcontext'
import Title from './title'
import Productitem from './productitem';

const Latestcollection = () => {
    const [latestProducts,setLatestProducts] = useState([]);
    const {products} = useContext(ShopContext)
   

    useEffect(()=>{

setLatestProducts(products.slice(0,10));

    },[])
  
  return (
    <div className='my-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <div className='text-center py-8 text-2xl'>
      <Title text1={'LATEST'}  text2={'COLLECTIONS'}/>
     <p className='w-3/4 m-auto text-sm sm:text-sm md:text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fuga architecto ullam assumenda.</p> 
    </div>

    {/* renderproduct */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
{
    latestProducts.map((item,index)=>(
<Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
    ))
}

    </div>
    </div>
  )
}

export default Latestcollection
