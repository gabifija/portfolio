import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='md:text-right pb-8 pl-4'>
            <p className='text-2xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='md:text-right text-2xl font-bold'>
            <p>bonjour le monde!</p>
            <p>i am <span className='text-pink-600'>gabee</span>, nice to meet you.</p>
            <p>please take a look around.</p>
          </div>
          <div>
            <p>i am passionate about creating web applications.</p>
            <p>i am working with development teams and product managers to ideate software solutions.</p>
            <p>i specialize in building the front-end of applications through appealing visual design, writing effective APIs, developing and managing well-functioning databases and applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
