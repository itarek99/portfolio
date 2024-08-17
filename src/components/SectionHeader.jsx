const SectionHeader = ({ children, rightContent }) => {
  return (
    <div className='pb-4 pt-1 px-7 relative gradient-border after:bg-gradient-to-r after:from-gray-500 after:to-white dark:after:to-black flex items-center justify-between'>
      <h2 className='text-xl font-bold'>{children}</h2>
      {rightContent}
    </div>
  );
};
export default SectionHeader;
