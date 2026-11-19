import Section from './Section';
import Tags from './Tags';

type SkillCategory = 'backend' | 'frontend' | 'data' | 'infra' | 'tools';

// Every skill belongs to exactly one category.
// All text is lowercase, names included.
const skillsByCategory: { category: SkillCategory; skills: string[] }[] = [
  { category: 'backend', skills: ['ruby', 'rails', 'python', 'django'] },
  { category: 'frontend', skills: ['typescript', 'javascript', 'react', 'tailwind css'] },
  { category: 'data', skills: ['postgresql', 'mongodb'] },
  { category: 'infra', skills: ['docker', 'aws', 'github actions'] },
  { category: 'tools', skills: ['claude code', 'ai-assisted development'] },
];

const Skills = () => {
  return (
    <Section id='skills' heading='skills'>
      <p className='text-muted'>technologies i have worked with:</p>

      <dl className='divide-y divide-line pt-8'>
        {skillsByCategory.map(({ category, skills }) => (
          <div key={category} className='grid gap-3 py-4 sm:grid-cols-[8rem_1fr] sm:items-baseline sm:gap-6'>
            <dt className='font-semibold'>{category}</dt>
            <dd>
              <Tags tags={skills} label={`${category} skills`} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default Skills;
