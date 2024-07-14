import { Outlet } from 'react-router-dom';
import SideNav from '../navigation/SideNav';
import ProfileCard from './components/ProfileCard';

const Main = () => {
  return (
    <div className='container mx-auto h-[84vh] 2xl:h-[70vh]  mt-[8vh] 2xl:mt-[15vh]'>
      <div className='mx-16 h-full flex items-start'>
        <SideNav />
        <ProfileCard />

        <Outlet />
      </div>
    </div>
  );
};
export default Main;
