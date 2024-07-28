const SectionHeader = ({ children }) => {
  return (
    <div className='pb-4 pt-1 px-7 relative gradient-border'>
      <h2 className='text-xl font-bold'>{children}</h2>
    </div>
  );
};
export default SectionHeader;
