import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-black'>
    {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
        <p>hello, my name is</p>
        <p className='text-2xl sm:text-4xl font-bold text-white'>gabriela fijałkowska-papier</p>
        <h2 className='text-2xl sm:text-4xl font-bold text-white'>i am a <span className='text-pink-600 font-bold'>full-stack engineer</span>.</h2>
        <div className='py-4'>
          <p className='text-white max-w-[700px]'>i have been working professionally as ruby software engineer since 2016.</p>
          <p className='text-white max-w-[700px]'>currently, i am responsible for working on both front-end and back-end development processes.</p>
          </div>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'> View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
