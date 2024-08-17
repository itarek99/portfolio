const PageContainer = ({ children }) => {
  return (
    <div className='self-stretch flex-grow overflow-y-auto bg-white dark:bg-black my-5 dark:text-white transition duration-300'>
      <div className='h-4 w-full sticky top-0 left-0 z-10 bg-white dark:bg-black transition duration-300' />
      <div className='h-full'>{children}</div>
      <div className='h-4 w-full sticky bottom-0 left-0 z-10 bg-white dark:bg-black transition duration-300' />
    </div>
  );
};
export default PageContainer;
