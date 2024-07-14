import { EnvelopeIcon, FolderIcon, NewspaperIcon, UserIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const NavItem = ({ item }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${
          item.link !== 'contact' && 'gradient-border'
        } after:-left-1 flex z-10 relative py-5 group flex-col items-center px-2 border-x-4 border-x-white hover:border-r-primary transform duration-500 ${
          isActive ? ' border-r-primary text-gray-950' : 'text-gray-600'
        }`
      }
      to={item.link}
      activeClassName='active'
    >
      {({ isActive }) => (
        <>
          <item.icon
            className={`h-5 w-5 group-hover:text-primary transform duration-500 ${isActive ? 'text-primary' : ''}`}
          />
          <p className='text-[11px] font-medium uppercase mt-1 group-hover:text-gray-950 transform duration-500'>
            {item.title}
          </p>
        </>
      )}
    </NavLink>
  );
};

const SideNav = () => {
  const items = [
    { title: 'About', link: '/', icon: UserIcon },
    { title: 'Resume', link: 'resume', icon: NewspaperIcon },
    { title: 'Works', link: 'works', icon: FolderIcon },
    { title: 'Contact', link: 'contact', icon: EnvelopeIcon },
  ];

  return (
    <div className='bg-white my-5'>
      {items.map((item) => (
        <NavItem item={item} />
      ))}
    </div>
  );
};
export default SideNav;
