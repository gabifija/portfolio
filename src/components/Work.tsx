type Project = {
  name: string;
  note?: string;
  description: string;
  stack: string[];
  link?: { href: string; label: string };
};

const projects: Project[] = [
  {
    name: 'TrueLoyal',
    note: '(formerly TINT), current',
    description:
      'improving the admin dashboard and apis: migrating data from mongodb to postgresql, rewriting queries in the python services, and moving legacy endpoints to ruby on rails. i use claude code to plan, implement and verify features end to end.',
    stack: ['Ruby on Rails', 'Python', 'PostgreSQL', 'MongoDB'],
  },
  {
    name: 'this portfolio',
    description:
      'migrated from create react app to vite, react 19, tailwind 4 and typescript: one pull request per step, ci on every change, and pixel-by-pixel checks against the live site.',
    stack: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'GitHub Actions'],
    link: { href: 'https://github.com/gabifija/portfolio', label: 'code' },
  },
  {
    name: 'Filestack Ruby SDK',
    description: 'open-source ruby sdk for the filestack file upload and processing api.',
    stack: ['Ruby'],
    link: { href: 'https://github.com/filestack/filestack-ruby', label: 'code' },
  },
  {
    name: 'Filestack Rails SDK',
    description: 'open-source rails integration for filestack uploads.',
    stack: ['Ruby on Rails'],
    link: { href: 'https://github.com/filestack/filestack-rails', label: 'code' },
  },
];

const Work = () => {
  return (
    <div id='work' className='w-full min-h-screen bg-white text-black'>
      <div className='max-w-[1000px] mx-auto p-4 pt-[100px] flex flex-col justify-center w-full min-h-screen'>
        <div>
          <p className='text-2xl font-bold inline text-white bg-[#9fb9ac] p-2'>work</p>
          <p className='py-4'>what i am working on now, and projects where i have added some lines of code:</p>
        </div>

        <div className='w-full grid sm:grid-cols-2 gap-8 py-8'>
          {projects.map((project) => (
            <div key={project.name}>
              <p className='font-bold'>
                {project.link ? (
                  <a className='text-[#b66b53] hover:text-black' href={project.link.href} target='_blank' rel='noreferrer'>
                    {project.name}
                  </a>
                ) : (
                  <span className='text-[#b66b53]'>{project.name}</span>
                )}
                {project.note && <span className='font-normal'> {project.note}</span>}
              </p>
              <p className='py-2'>{project.description}</p>
              <p className='text-sm text-[#327364]'>{project.stack.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
