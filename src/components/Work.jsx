import React from 'react';

const Work = () => {
  return (
    <div name='work' className='w-full h-screen bg-black text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-2xl font-bold inline border-b-4 border-pink-600'>Work</p>
          <p className='py-4'>check out the recent projects where i have added some lines of code:</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div>
             <a className='text-pink-600 hover:text-white' href='https://tintup.com' target='_blank' rel='noreferrer'>TINT</a>
          </div>
          <div>
             <a className='text-pink-600 hover:text-white' href='https://en.canon-me.com/aktashif-programme/login/' target='_blank' rel='noreferrer'>Canon Aktashif Programme</a>
          </div>
          <div>
             <a className='text-pink-600 hover:text-white' href='https://github.com/filestack/filestack-ruby' target='_blank' rel='noreferrer'>Filestack Ruby SDK</a>
          </div>
          <div>
             <a className='text-pink-600 hover:text-white' href='https://github.com/filestack/filestack-rails' target='_blank' rel='noreferrer'>Filestack Rails SDK</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
