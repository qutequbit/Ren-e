import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const [visible, setVisble] = useState(false);


    return (
        <div className='flex items-center justify-evenly py-5 font-medium'>
            <img src={assets.logo} className='w-28' alt="" srcset="" />
            <ul className='hidden sm:flex gap-5 ml-28 mr-28 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[2px] bg-pink-800 hidden' />
                </NavLink>
                <NavLink to='/collections' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[2px] bg-pink-800 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[2px] bg-pink-800 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[2px] bg-pink-800 hidden' />
                </NavLink>

            </ul>
            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" srcset="" />
                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" srcset="" />

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>
                                My Profile
                            </p>
                            <p className='cursor-pointer hover:text-black'>
                                Orders
                            </p>
                            <p className='cursor-pointer hover:text-black'>
                                Logout
                            </p>
                        </div>

                    </div>

                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 cursor-pointer' alt="" srcset="" />
                </Link>
                <img onClick={() => setVisble(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" srcset="" />
            </div>
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div className='flex items-center gap-4 p-3'>
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisble(false)} to='/' className='py-2 pl-6 border'>HOME</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/collections' className='py-2 pl-6 border'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/about' className='py-2 pl-6 border'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/contact' className='py-2 pl-6 border'>CONTACT</NavLink>
                </div>

            </div>
        </div>
    )
}

export default Navbar
