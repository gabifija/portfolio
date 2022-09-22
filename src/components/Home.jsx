import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-white text-black'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p>hello, my name is</p>
        <p className='text-2xl sm:text-4xl font-bold'>gabriela fijałkowska-papier</p>
        <h2 className='text-2xl sm:text-4xl font-bold'>i am a <span className='text-[#b66b53] font-bold'>full-stack engineer</span>.</h2>
        <div className='py-4'>
          <p className='max-w-[700px]'>i have been working professionally as ruby software engineer since 2016.</p>
          <p className='max-w-[700px]'>currently, i am responsible for working on both front-end and back-end development processes.</p>
          </div>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='group border rounded-3xl border-black px-6 py-3 my-2 flex items-center hover:bg-[#327364] hover:border-[#327364] hover:text-white'> view work
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
