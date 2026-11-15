const skillGroups: string[][] = [
  ['Ruby', 'Ruby on Rails'],
  ['Python', 'Django'],
  ['TypeScript', 'JavaScript'],
  ['React', 'Tailwind CSS'],
  ['PostgreSQL', 'MongoDB'],
  ['Docker', 'AWS'],
  ['GitHub', 'GitHub Actions'],
  ['Claude Code', 'AI-assisted development'],
];

const Skills = () => {
  return (
    <div id='skills' className='w-full h-screen bg-white text-black'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-2xl font-bold inline text-white bg-[#9fb9ac] p-2'>skills</p>
          <p className='py-4'>technologies i have worked with:</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {skillGroups.map((group) => (
            <div key={group[0]}>
              {group.map((skill) => (
                <p key={skill}>{skill}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
