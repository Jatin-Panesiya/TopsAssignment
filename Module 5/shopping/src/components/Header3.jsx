import { GiHotSpices } from 'react-icons/gi'
import { BiHeadphone } from 'react-icons/bi'
import { AiOutlineBars } from 'react-icons/ai'
import { useState } from 'react'

const Header3 = () => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <div className="py-3 flex justify-between px-2 items-center">
            <div className='flex items-center gap-5'>
                <select className="bg-green-500 text-white rounded px-1 py-1"><option value=""> Browse All Categories</option></select>
                <div className='lg:flex hidden gap-7'>
                    <a className='flex items-center gap-1 '><p className='text-green-500'> <GiHotSpices /> </p> Hot Deals</a>
                    <a className='hover:text-green-500 cursor-pointer '>Home</a>
                    <a className='hover:text-green-500 cursor-pointer '>About</a>
                    <a className='hover:text-green-500 cursor-pointer '>Shop</a>
                    <a className='hover:text-green-500 cursor-pointer '>Vendors</a>
                    <a className='hover:text-green-500 cursor-pointer '>Mega Menu</a>
                    <a className='hover:text-green-500 cursor-pointer '>Blog</a>
                    <a className='hover:text-green-500 cursor-pointer '>Pages</a>
                    <a className='hover:text-green-500 cursor-pointer '>Contact</a>
                </div>


            </div>
            <div className='hidden sm:flex items-center gap-2'>
                <span className='text-4xl'>
                    <BiHeadphone />
                </span>
                <span className='text-center'>
                    <p className='text-green-500 font-bold text-xl'>1900 - 888</p>
                    <p>24/7 Support Center</p>
                </span>
            </div>

            <div className={` text-center ${menu ? "grid" : 'hidden'} grid lg:hidden py-5 bg-gray-600 absolute z-10 w-full top-52 text-white gap-7`}>
                <a className='flex items-center gap-1 justify-center '><p className='text-green-500'> <GiHotSpices /> </p> Hot Deals</a>
                <a className='hover:text-green-500 cursor-pointer '>Home</a>
                <a className='hover:text-green-500 cursor-pointer '>About</a>
                <a className='hover:text-green-500 cursor-pointer '>Shop</a>
                <a className='hover:text-green-500 cursor-pointer '>Vendors</a>
                <a className='hover:text-green-500 cursor-pointer '>Mega Menu</a>
                <a className='hover:text-green-500 cursor-pointer '>Blog</a>
                <a className='hover:text-green-500 cursor-pointer '>Pages</a>
                <a className='hover:text-green-500 cursor-pointer '>Contact</a>
            </div>
            <div className='lg:hidden text-3xl ' onClick={handleMenu}>
                <AiOutlineBars />
            </div>
        </div>
    )
}

export default Header3