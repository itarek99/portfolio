import { useEffect, useState } from 'react';
import PageContainer from '../../components/PageContainer';
import SectionHeader from '../../components/SectionHeader';
import works from '../../data/works';
import cn from '../../utils/cn';
import WorkCard from './components/WorkCard';

const filters = {
  all: 'All',
  react: 'React',
  tailwindcss: 'tailwind',
  bootstrap: 'Bootstrap',
};

const Works = () => {
  const [filteredWorks, setFilteredWorks] = useState([...works]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredWorks([...works]);
    } else {
      setFilteredWorks(works.filter((work) => work.technology.includes(activeFilter)));
    }
  }, [activeFilter]);

  return (
    <PageContainer>
      <SectionHeader
        rightContent={
          <div className='flex items-center'>
            {Object.keys(filters).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn('text-base font-light text-gray-600 dark:text-white px-2 pt-0.5', {
                  'text-primary dark:text-primary': activeFilter === filter,
                })}
              >
                {filters[filter]}
              </button>
            ))}
          </div>
        }
      >
        My Works
      </SectionHeader>

      <div className='px-7 mt-4 grid grid-cols-3 gap-4'>
        {filteredWorks.map((work) => (
          <WorkCard key={work.id} data={work} />
        ))}
      </div>
    </PageContainer>
  );
};
export default Works;
