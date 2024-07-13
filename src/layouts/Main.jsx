import { Outlet } from 'react-router-dom';
import SideNav from '../navigation/SideNav';
import ProfileCard from './components/ProfileCard';

const Main = () => {
  return (
    <div className='container mx-auto h-[84vh] 2xl:h-[70vh]  mt-[8vh] 2xl:mt-[15vh]'>
      <div className='mx-16 h-full flex items-start'>
        <SideNav />
        <ProfileCard />
        <div className='self-stretch bg-blue-500 flex-grow p-2 overflow-y-auto my-5'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Main;
