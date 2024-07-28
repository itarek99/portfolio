import ExpertiseCard from '../../../components/ExpertiseCard';
import SectionHeader from '../../../components/SectionHeader';
import expertise from '../../../data/expertise';

const MyExpertise = () => {
  return (
    <div className='mt-8'>
      <SectionHeader>My Expertise</SectionHeader>
      <div className='px-7 mt-5 grid grid-cols-2 gap-6 mb-1'>
        {expertise.map((item) => (
          <ExpertiseCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default MyExpertise;
