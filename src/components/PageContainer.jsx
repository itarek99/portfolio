const PageContainer = ({ children }) => {
  return (
    <div className='self-stretch flex-grow overflow-y-scroll bg-white pb-20 lg:pb-0 dark:bg-black lg:my-5 pt-4 dark:text-white transition duration-500'>
      <div className='h-full'>{children}</div>
    </div>
  );
};
export default PageContainer;
