const PageContainer = ({ children }) => {
  return (
    <div className='self-stretch flex-grow overflow-y-auto bg-white my-5'>
      <div className='h-4 w-full sticky top-0 left-0 z-10 bg-white' />
      {children}
      <div className='h-4 w-full sticky bottom-0 left-0 z-10 bg-white' />
    </div>
  );
};
export default PageContainer;
