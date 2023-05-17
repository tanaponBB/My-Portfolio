import React, { useState } from 'react'
import {
    FaBars,
    FaTimes,
    FaFacebook,
    FaInstagram,
    FaEnvelope,
  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from "E:/myport/src/assets/logo1.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2F2F2F] text-[#F6F6F6]'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '500px'}}/>
        </div>

        {/* menu */}
            <ul className='hidden lg:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Comtact</li>
            </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
        {/* mobile menu */}
        <ul className={!nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#2F2F2F] flex flex-col justify-center items-center' }>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Comtact</li>
        </ul>

        {/* SC ICON */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600' >
                    <a className='flex justify-between items-center w-full text-[#F6F6F6]'
                    href="/">
                        FaceBook <FaFacebook size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-[#feda75] via-[#fa7e1e] to-[#d62976]' >
                    <a className='flex justify-between items-center w-full text-[#F6F6F6]'
                    href="/">
                        Instagram <FaInstagram size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#DB4437]' >
                    <a className='flex justify-between items-center w-full text-[#F6F6F6]'
                    href="/">
                        E-mail <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#113E21]' >
                    <a className='flex justify-between items-center w-full text-[#F6F6F6]'
                    href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
