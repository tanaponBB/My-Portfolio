import React, { useState } from 'react'
import {
    FaBars,
    FaTimes,
    FaFacebook,
    FaInstagram,
    FaEnvelope,
    FaLinkedin,
  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from "../assets/logo1.png";
import { Link } from 'react-scroll';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#2F2F2F] text-[#F6F6F6]'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '500px'}}/>
        </div>

        {/* menu */}
            <ul className='hidden lg:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                    Home
                    </Link>

                </li>
                <li>                    
                    <Link to="about" smooth={true} duration={500}>
                    About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                    Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                    Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
        {/* mobile menu */}
        <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#111] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
        {/* SC ICON */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-slate-400 hover:bg-blue-600 shadow-lg hover:shadow-cyan-500/50 opacity-50 hover:opacity-100' >
                    <a className='flex justify-between items-center w-full text-[#F6F6F6]'
                    href="https://www.facebook.com/tanapon.amronsakprisarn" target="_blank" rel="noopener noreferrer">
                        FaceBook <FaFacebook size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-slate-400 hover:bg-gradient-to-r from-[#feda75] via-[#fa7e1e] to-[#d62976] shadow-lg hover:shadow-[#feda75]/50 opacity-50 hover:opacity-100' >
                    <a className='flex justify-between items-center w-full text-[#F6F6F6]'
                    href="https://www.instagram.com/bb_tanapon/" target="_blank" rel="noopener noreferrer">
                        Instagram <FaInstagram size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-slate-400 hover:bg-[#DB4437] shadow-lg hover:shadow-[#DB4437]/50 opacity-50 hover:opacity-100' >
                    <a className='flex justify-between items-center w-full text-[#F6F6F6]'
                    href="mailto:bbtanapon@gmail.com?" target="_blank" rel="noopener noreferrer">
                        E-mail <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-slate-400 hover:bg-[#0077b3] shadow-lg hover:shadow-[#0077b3]/50 opacity-50 hover:opacity-100' >
                    <a className='flex justify-between items-center w-full text-[#F6F6F6]'
                    href="https://www.linkedin.com/in/tanapon-amonsakpaisan-b45482253/" target="_blank" rel="noopener noreferrer">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-slate-400 hover:bg-[#1c6435] shadow-lg hover:shadow-[#1c6435]/50 opacity-50 hover:opacity-100' >
                    <a className='flex justify-between items-center w-full text-[#F6F6F6]'
                    href='https://drive.google.com/file/d/1VQx-MMt8sJZ7tYCAPrrJaMIGulV4z70_/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
