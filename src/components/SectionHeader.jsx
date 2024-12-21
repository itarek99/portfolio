import cn from '../utils/cn';

const SectionHeader = ({ className, children, rightContent }) => {
  return (
    <div
      className={cn(
        'pb-4 pt-1 px-4 lg:px-7 relative gradient-border after:h-px after:w-full after:left-0 after:bottom-0 after:bg-gradient-to-r after:from-gray-500 after:to-white dark:after:to-black flex items-center justify-between',
        className
      )}
    >
      <h2 className='text-xl font-bold'>{children}</h2>
      {rightContent}
    </div>
  );
};
export default SectionHeader;
