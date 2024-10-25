const PageContainer = ({ children }) => {
  return (
    <div className='self-stretch flex-grow overflow-y-auto bg-white dark:bg-black my-5 pt-4 dark:text-white transition duration-300'>
      <div className='h-full'>{children}</div>
    </div>
  );
};
export default PageContainer;
