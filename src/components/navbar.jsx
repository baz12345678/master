import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/shopcontext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext)


    return (
        <div className='flex  items-center py-2 font-medium px-5 justify-between sm:justify-between md:justify-between  lg:justify-normal xl:justify-normal '>


            <img src={assets.logo} className='w-14 mx-0   md:mx-auto lg:mx-auto' alt="" />


            <ul className='hidden md:flex gap-4 text-base text-gray-600 absolute '>

                <NavLink to='/' className='flex flex-col  items-center gap-1.5 '>
                    <p>Home</p>
                    <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>Collection</p>
                    <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>About</p>
                    <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>Contact</p>
                    <hr className='w-3/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

          {/* <div className='flex items-center gap-4'>
          
            <button onClick={()=>setIsDarkMode(prev => !prev)}>
                <Image src={isDarkMode ? assets.sun : assets} alt='' className='w-6'/>
            </button>
          </div>  */}


            <div className='flex items-center gap-4'>
                 <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-4 cursor-pointer' alt="" /> 
                <div className='group relative'>
                <Link to='/login'>  <img className='w-4 cursor-pointer sm-w-4' src={assets.profile_icon} alt="" /> </Link> 
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-44 py-3 px-5 bg-slate-100 text-gray-500 rounded '>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-4' alt="" />
                <p className='absolute right-[-5px] top-1 w-3 text-center leading-3 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-6 bg-gray-200 p-1 rounded-md text-white cursor-pointer sm:hidden' alt="" />
            </div>
            

            <div className={`absolute top-10 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full':'w-0'} `}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                    <p className='text-2xl'>Back</p>

                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-sm' to='/'>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-sm' to='/collection'>Collection</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-sm' to='/about'>About</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border text-sm' to='/contact'>Contact</NavLink>
            </div>
            </div>
        </div>

    )
}

export default Navbar
