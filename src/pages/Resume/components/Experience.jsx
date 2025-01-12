import SectionHeader from '../../../components/SectionHeader';
import experiences from '../../../data/experiences';

const Experience = () => {
  return (
    <>
      <SectionHeader>Experience</SectionHeader>
      <div className='px-4 lg:px-7 mt-4'>
        {experiences.map((experience) => (
          <div key={experience.id}>
            <a className='text-lg font-semibold' href={experience.url}>
              {experience.name}
            </a>
            <p className='text-sm font-medium '>{experience.duration}</p>
            <p className='flex items-center gap-1.5 text-gray-600 text-sm font-medium'>
              {experience.location} <span className='h-1 w-1 bg-primary' /> {experience.type}
            </p>
            {experience.positions.map((position) => (
              <div key={position.id} className='ml-2 md:ml-4 mt-2'>
                <p className='text-base font-semibold'>{position.title}</p>
                <p className='text-sm font-medium text-gray-600'>{position.duration}</p>
                <ul className='ml-2 md:ml-4 mt-1.5'>
                  {position.responsibilities.map((responsibility, index) => (
                    <li key={index} className='flex items-start gap-2 mt-2 lg:mt-1'>
                      <span className='block h-2 w-2 bg-primary mt-2 flex-shrink-0'></span>{' '}
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
export default Experience;
