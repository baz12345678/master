import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopcontext';
import Title from '../components/title';
import { assets } from '../assets/assets';
import Carttotal from '../components/carttotal';



const Cart = () => {


  const { products, currency, cartItems ,updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);



  useEffect(() => {
    const tempData = [];
    // Loop through cartItems and create tempData array with proper structure
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item], // Correct quantity access
          });
        }
      }
    }
    setCartData(tempData); // Update the state with formatted cart data
  }, [cartItems]);

  // const handleQuantityChange = (e, itemId, size) => {
  //   // Update the quantity of a specific item in the cart
  //   const updatedCartItems = { ...cartItems };
  //   updatedCartItems[itemId][size] = parseInt(e.target.value, 10);
  //  // Update the cartItems in context (make sure this works)
  // };

  return (
    <div className="border-t pt-14">
      <div className=" mb-3 md:text-2xl sm:text-xl">
        <Title text1={'YOURS'} text2={'CART'} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image[0]} alt="" />
                <div>
                  <p className="text-sm sm:text-sm font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-5 text-sm">
                    <p>{currency}{productData.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                  </div>
                </div>
              </div>
              {/* Controlled input for quantity */}
              <input
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"  type="number"   min={1} value={item.quantity} onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))}   />
                <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 sm:w-4 cursor-pointer' src={assets.bin_icon} alt="" />
            </div>
          );
        })}
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[400px]'>
          <Carttotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/placeorder')} className='bg-black text-white text-sm my-8 px-8 py-3 active:bg-orange-500'>PROCEED TO CHECKOUT</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
