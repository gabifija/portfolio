import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { links } from '../links';
import Section from './Section';

const socialLinks = [
  { ...links.github, Icon: FaGithub },
  { ...links.linkedin, Icon: FaLinkedin },
];

const Home = () => {
  return (
    <Section id='home' fill>
      <p className='font-mono text-sm text-subtle'>hello, my name is</p>
      <h1 className='pt-3 text-4xl font-bold tracking-tight sm:text-6xl'>gabriela fijałkowska-papier</h1>
      <p className='pt-2 text-2xl font-semibold tracking-tight text-muted sm:text-4xl'>
        i am a <span className='text-accent'>full-stack engineer</span>.
      </p>

      <div className='max-w-[700px] space-y-1 pt-6 text-lg text-muted'>
        <p>building web applications with ruby on rails and react.</p>
        <p>today i work across the stack and build features with claude code.</p>
      </div>

      <div className='flex flex-wrap items-center gap-6 pt-8'>
        <a
          href='#work'
          className='group inline-flex items-center rounded-full border border-ink px-6 py-3 text-ink transition-colors hover:border-accent-strong hover:bg-accent-strong hover:text-white'
        >
          view work
          <HiArrowNarrowRight className='ml-3 transition-transform duration-300 group-hover:rotate-90' />
        </a>

        <ul className='flex items-center gap-4'>
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target='_blank'
                rel='noreferrer'
                aria-label={label}
                className='block text-muted transition-colors hover:text-accent-strong'
              >
                <Icon size={24} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Home;
