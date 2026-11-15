
const About = () => {
  return (
    <div id='about' className='w-full h-screen bg-white text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='md:text-right pb-8 pl-4'>
            <p className='text-2xl font-bold inline text-white bg-[#9fb9ac] p-2'>
              about
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='md:text-right text-2xl font-bold'>
            <p>bonjour le monde!</p>
            <p>i am <span className='text-[#b66b53]'>gabi</span>, nice to meet you.</p>
            <p>please take a look around.</p>
          </div>
          <div>
            <p className='pb-2'>i modernize legacy systems safely, keeping what already works running.</p>
            <p>i work closely with product and engineering teams to turn ideas into reliable features.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
