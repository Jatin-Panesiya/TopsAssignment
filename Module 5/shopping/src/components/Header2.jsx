import fruitlogo from '../assets/fruitlogo.png'
import { BiGitCompare } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { RiAccountCircleLine } from "react-icons/ri"
import { AiOutlineBars } from 'react-icons/ai'
import { useState } from 'react'


const Header2 = () => {

    const [menu,setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className='flex items-center justify-around py-3'>
            <div className='flex items-center gap-1'>
                <img src={fruitlogo} className='w-20 sm:flex hidden ' alt="fruitImg" />
                <span className='grid text-center'>
                    <p className='font-bold text-green-500 text-xl'>J.P.</p>
                    <p className='text-sm'>Top Seller</p>
                </span>
            </div>
            <div>
                <span> <input type="search" className='border rounded px-2 py-0.5 outline-none' placeholder='search' /></span>
            </div>

            <div className='flex items-center gap-3'>
                <div className='hidden lg:flex'>
                    <select className='border px-1 py-0.5' name="" id="">
                        <option value="">Your Location</option>
                    </select>
                </div>
                <div className={` gap-3 hidden md:flex`}>
                    <p className='flex items-center'><BiGitCompare /> <p className='relative py-0 bg-green-400 rounded-[50%] text-white px-0.5 mb-4'>0</p> Compare</p>
                    <p className='flex items-center'><AiOutlineHeart /> <p className='relative py-0 bg-green-400 rounded-[50%] text-white px-0.5 mb-4'>0</p> Wishlist</p>
                    <p className='flex items-center'><AiOutlineShoppingCart /> <p className='relative py-0 bg-green-400 rounded-[50%] text-white px-0.5 mb-4'>0</p>Cart</p>
                    <p className='flex items-center'><RiAccountCircleLine /> Account</p>
                </div>

                <div className={` gap-3 absolute w-full justify-center left-0 bg-gray-600 py-4 top-24 z-10 ${menu ? "grid" : "hidden"} text-white`}>
                    <p className='flex items-center'><BiGitCompare /> <p className='relative py-0 bg-green-400 rounded-[50%] text-white px-0.5 mb-4'>0</p> Compare</p>
                    <p className='flex items-center'><AiOutlineHeart /> <p className='relative py-0 bg-green-400 rounded-[50%] text-white px-0.5 mb-4'>0</p> Wishlist</p>
                    <p className='flex items-center'><AiOutlineShoppingCart /> <p className='relative py-0 bg-green-400 rounded-[50%] text-white px-0.5 mb-4'>0</p>Cart</p>
                    <p className='flex items-center'><RiAccountCircleLine /> Account</p>
                </div>

                <div className='md:hidden text-3xl ' onClick={handleMenu}>
                    <AiOutlineBars />
                </div>
            </div>
        </div>
    )
}

export default Header2