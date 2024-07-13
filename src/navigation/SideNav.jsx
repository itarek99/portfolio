import { EnvelopeIcon, FolderIcon, NewspaperIcon, UserIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const NavItem = ({ item }) => {
  return (
    <NavLink
      className={({ isActive }) => `flex py-3.5 flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-700'}`}
      to={item.link}
      activeClassName='active'
    >
      <item.icon className='h-5 w-5' />
      <p className='text-[11px] font-medium uppercase mt-1'>{item.title}</p>
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
    <div className='bg-white divide-y px-2 my-5'>
      {items.map((item) => (
        <NavItem item={item} />
      ))}
    </div>
  );
};
export default SideNav;
