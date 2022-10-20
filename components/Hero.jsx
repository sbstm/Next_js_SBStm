import Link from 'next/link';
import React from 'react';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem] rounded-xl flex flex-col text-center'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <div className="">
        <Link href="/tutorial/">
          <a>
          <button type='Submit' className='px-8 py-2 border w-auto p-4 m-auto' >Start</button>
          </a>
            </Link>
            
          </div>
      </div>
    </div>
  );
};

export default Hero;
