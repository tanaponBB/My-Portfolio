import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-t from-[#111111] via-[#1f1f1f] to-[#414141] '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-8 px-8 flex flex-col justify-center h-full'>
        <p className='text-[#FFCB74]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-[#FFE998] to-[#57370D]'>
          BB Tanapon
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Junior Web Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Graduated at Thaksin University Phatthalung Campus in computer science.
        Has experience in cooperative education training with Yes Web Design Studio in the position of a wordpress developer.
        </p>
        <div>
            <button 
            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#d39935] hover:border-[#ffc35b]'>
              View Work
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            
            </button>
            </div>
        </div>
        </div>
    
  );
};

export default Home;
