import { HiArrowNarrowRight } from 'react-icons/hi';
import Section from './Section';

const Home = () => {
  return (
    <Section id='home' fill>
      <div className='flex flex-col justify-center'>
        <p>hello, my name is</p>
        <p className='text-2xl sm:text-4xl font-bold'>gabriela fijałkowska-papier</p>
        <h2 className='text-2xl sm:text-4xl font-bold'>i am a <span className='text-[#b66b53] font-bold'>full-stack engineer</span>.</h2>
        <div className='py-4'>
          <p className='max-w-[700px]'>building web applications since 2016 with ruby on rails and react.</p>
          <p className='max-w-[700px]'>today i work across the stack and build features with claude code.</p>
        </div>
        <div>
          <a href='#work' className='group border rounded-3xl border-black px-6 py-3 my-2 inline-flex items-center hover:bg-[#327364] hover:border-[#327364] hover:text-white'> view work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Home;
