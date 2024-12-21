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
        className='flex-col items-start lg:flex-row lg:items-center'
        rightContent={
          <div className='flex items-center mt-1'>
            {Object.keys(filters).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'first:ps-0 text-base font-light text-gray-600 dark:text-white px-2 pt-0.5 transition duration-500',
                  {
                    'text-primary dark:text-primary': activeFilter === filter,
                  }
                )}
              >
                {filters[filter]}
              </button>
            ))}
          </div>
        }
      >
        My Works
      </SectionHeader>

      <div className='px-4 lg:px-7 mt-4 grid grid-cols-2 xl:grid-cols-3 gap-4 pb-4'>
        {filteredWorks.map((work) => (
          <WorkCard key={work.id} data={work} />
        ))}
      </div>
    </PageContainer>
  );
};
export default Works;
