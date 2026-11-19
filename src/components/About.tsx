import Section from './Section';

const About = () => {
  return (
    <Section id='about' heading='about'>
      <div className='max-w-[760px] space-y-4 text-xl leading-snug sm:text-2xl'>
        <p>i modernize legacy systems safely, keeping what already works running.</p>
        <p>i work closely with product and engineering teams to turn ideas into reliable features.</p>
      </div>
    </Section>
  );
};

export default About;
