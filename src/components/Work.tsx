import Section from './Section';
import Tags from './Tags';

type Project = {
  name: string;
  /** Short qualifier shown after the name, e.g. a former company name. */
  note?: string;
  /** Marks the current role. */
  current?: boolean;
  description: string;
  stack: string[];
  link?: { href: string; label: string };
};

// All text is lowercase, names included.
const projects: Project[] = [
  {
    name: 'trueloyal',
    note: 'formerly tint',
    current: true,
    description:
      'improving the admin dashboard and apis, migrating data from mongodb to postgresql and moving legacy endpoints to rails. building features with claude code.',
    stack: ['ruby on rails', 'python', 'postgresql', 'mongodb'],
  },
  {
    name: 'this portfolio',
    description:
      'modernized from create react app to vite, react 19 and typescript, with ci on every change.',
    stack: ['typescript', 'react', 'vite', 'tailwind css', 'github actions'],
    link: { href: 'https://github.com/gabifija/portfolio', label: 'code' },
  },
  {
    name: 'filestack ruby sdk',
    description: 'open-source ruby sdk for the filestack file upload and processing api.',
    stack: ['ruby'],
    link: { href: 'https://github.com/filestack/filestack-ruby', label: 'code' },
  },
  {
    name: 'filestack rails sdk',
    description: 'open-source rails integration for filestack uploads.',
    stack: ['ruby on rails'],
    link: { href: 'https://github.com/filestack/filestack-rails', label: 'code' },
  },
];

const Work = () => {
  return (
    <Section id='work' heading='work'>
      <p className='text-muted'>what i am working on now, and projects where i have added some lines of code:</p>

      <div className='grid gap-x-12 gap-y-10 pt-10 sm:grid-cols-2'>
        {projects.map((project) => (
          <article key={project.name} className='border-t border-line pt-6'>
            <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
              <h3 className='text-lg font-semibold'>{project.name}</h3>
              {project.note && <span className='text-muted'>({project.note})</span>}
              {project.current && (
                <span className='font-mono text-xs text-accent-strong'>current</span>
              )}
              {project.link && (
                <a
                  href={project.link.href}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={`${project.name} ${project.link.label}`}
                  className='ml-auto font-mono text-xs text-accent-strong underline-offset-4 hover:underline'
                >
                  {project.link.label} ↗
                </a>
              )}
            </div>
            <p className='py-3 text-muted'>{project.description}</p>
            <Tags tags={project.stack} label={`${project.name} stack`} />
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Work;
