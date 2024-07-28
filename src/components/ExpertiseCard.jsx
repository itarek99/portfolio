const ExpertiseCard = ({ data }) => {
  return (
    <div className='relative pb-3 gradient-border'>
      <div className='bg-gradient-to-br from-white to-primary/30 mb-2 size-10 flex justify-center items-center'>
        <data.icon className='size-7 text-primary' />
      </div>
      <h3 className='font-semibold text-gray-900 mb-1'>{data.title}</h3>
      <p className='text-gray-600'>{data.description}</p>
    </div>
  );
};
export default ExpertiseCard;
