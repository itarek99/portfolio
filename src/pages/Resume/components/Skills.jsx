import SectionHeader from '../../../components/SectionHeader';
import skills from '../../../data/skills';

const Skills = () => {
  return (
    <div className='mt-8 mb-4'>
      <SectionHeader>Skills</SectionHeader>
      <div className='px-7 mt-4 space-y-2'>
        {skills.map((skill) => (
          <div key={skill.id}>
            <p className='mb-0.5'>{skill.title}</p>
            <div className='bg-gray-200 h-2'>
              <div style={{ width: `${skill.confidence}%` }} className='bg-primary h-2'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
