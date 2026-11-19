import Section from './Section';

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
    <Section id='skills' heading='skills'>
      <p>technologies i have worked with:</p>

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        {skillGroups.map((group) => (
          <div key={group[0]}>
            {group.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
