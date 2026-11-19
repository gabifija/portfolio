import Section from './Section';

const About = () => {
  return (
    <Section id='about' heading='about'>
      <div className='grid gap-8 sm:grid-cols-2'>
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
    </Section>
  );
}

export default About;
