import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='bg-black text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-2xl font-bold inline border-b-4 border-pink-600'>Experiences</p>
          <p className='py-4'>technologies i have worked with:</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div>
             <p>Ruby</p>
             <p>Ruby on Rails</p>
          </div>
          <div>
             <p>Python</p>
             <p>Django</p>
          </div>
          <div>
             <p>HTML</p>
             <p>CSS</p>
          </div>
          <div>
             <p>JavaScript</p>
             <p>React</p>
          </div>
          <div>
             <p>PostgreSQL</p>
          </div>
          <div>
             <p>GitHub</p>
          </div>
          <div>
             <p>Docker</p>
          </div>
          <div>
             <p>AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
