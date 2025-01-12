import { FolderIcon, NewspaperIcon, SunIcon, UserIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { BsMoonStars } from 'react-icons/bs';
import { NavLink, useLocation } from 'react-router-dom';
import cn from '../utils/cn';

const NavItem = ({ item }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          'after:bg-gradient-to-b lg:after:bg-gradient-to-r  flex-shrink-0 lg:flex-shrink after:from-gray-500 to-white text-gray-600 dark:text-gray-300 dark:to-black  flex justify-center z-10 relative group flex-col items-center size-16  transform duration-500',
          {
            'gradient-border after:w-px after:h-full after:right-0 lg:after:h-px lg:after:w-full lg:after:bottom-0 lg:after:left-0':
              item.link !== 'works',
            'border-r-primary dark:border-r-primary text-gray-950 dark:text-white ': isActive,
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
              'lg:h-full w-full h-1 lg:w-1 bg-white dark:bg-black group-hover:bg-primary transition duration-300 absolute -top-0 right-0',
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

const SideNav = ({ profileCardHeight }) => {
  const [dark, setDark] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: pathname === '/' ? 0 : profileCardHeight,
      behavior: 'smooth',
    });
  }, [pathname, profileCardHeight]);

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
    <div className='fixed -bottom-1.5 lg:bottom-0 nav-shadow left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0  flex z-50 lg:block lg:relative bg-white dark:bg-black my-5 transition duration-300'>
      <button
        className='gradient-border after:w-px after:h-full after:right-0 lg:after:h-px lg:after:w-full after:bottom-0 lg:after:left-0 flex-grow-0 after:bg-gradient-to-b lg:after:bg-gradient-to-r from-gray-500 to-white dark:to-black outline-none flex justify-center items-center z-10 relative group flex-col size-16 lg:w-full transition duration-300 dark:border-x-black'
        onClick={darkModeHandler}
      >
        {dark ? <BsMoonStars className='size-5 dark:text-white' /> : <SunIcon className='size-6 dark:text-white' />}
      </button>
      {items.map((item) => (
        <NavItem item={item} key={item.link} />
      ))}
    </div>
  );
};
export default SideNav;
