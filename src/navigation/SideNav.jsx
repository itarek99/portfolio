import { FolderIcon, MoonIcon, NewspaperIcon, SunIcon, UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from '../utils/cn';

const NavItem = ({ item }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          'after:bg-gradient-to-r after:from-gray-500  to-white text-gray-600 dark:text-gray-300 dark:to-black  flex justify-center z-10 relative group flex-col items-center size-16  transform duration-300',
          {
            'gradient-border': item.link !== 'works',
            'border-r-primary dark:border-r-primary text-gray-950 dark:text-white': isActive,
          }
        )
      }
      to={item.link}
    >
      {({ isActive }) => (
        <>
          <item.icon
            className={`size-5 group-hover:text-primary transform duration-300 ${isActive ? 'text-primary' : ''}`}
          />
          <p className='text-[11px] font-medium uppercase mt-1 group-hover:text-gray-950 dark:group-hover:text-white transform duration-300'>
            {item.title}
          </p>

          <div
            className={cn(
              'h-full w-1 bg-white dark:bg-black group-hover:bg-primary transition duration-300 absolute -top-0 right-0',
              {
                'bg-primary dark:bg-primary': isActive,
              }
            )}
          ></div>
        </>
      )}
    </NavLink>
  );
};

const SideNav = () => {
  const [dark, setDark] = useState(true);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };
  const items = [
    { title: 'Profile', link: '/', icon: UserIcon },
    { title: 'Resume', link: 'resume', icon: NewspaperIcon },
    { title: 'Works', link: 'works', icon: FolderIcon },
  ];

  return (
    <div className='bg-white dark:bg-black my-5 transition duration-300'>
      <button
        className='gradient-border after:bg-gradient-to-r from-gray-500 to-white dark:to-black outline-none flex justify-center items-center z-10 relative group flex-col size-16 w-full transition duration-300 dark:border-x-black'
        onClick={darkModeHandler}
      >
        {dark ? <MoonIcon className='size-6 dark:text-white' /> : <SunIcon className='size-6 dark:text-white' />}
      </button>
      {items.map((item) => (
        <NavItem item={item} key={item.link} />
      ))}
    </div>
  );
};
export default SideNav;
