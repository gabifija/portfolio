import React from 'react';

const Work = () => {
  return (
    <div name='work' className='w-full h-screen bg-white text-black'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-2xl font-bold inline text-white bg-[#9fb9ac] p-2'>work</p>
          <p className='py-4'>check out the recent projects where i have added some lines of code:</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div>
             <a className='text-[#b66b53] hover:text-black' href='https://tintup.com' target='_blank' rel='noreferrer'>TINT</a>
          </div>
          <div>
             <a className='text-[#b66b53] hover:text-black' href='https://en.canon-me.com/aktashif-programme/login/' target='_blank' rel='noreferrer'>Canon Aktashif Programme</a>
          </div>
          <div>
             <a className='text-[#b66b53] hover:text-black' href='https://github.com/filestack/filestack-ruby' target='_blank' rel='noreferrer'>Filestack Ruby SDK</a>
          </div>
          <div>
             <a className='text-[#b66b53] hover:text-black' href='https://github.com/filestack/filestack-rails' target='_blank' rel='noreferrer'>Filestack Rails SDK</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
