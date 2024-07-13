import { Outlet } from 'react-router-dom';
import SideNav from '../navigation/SideNav';
import ProfileCard from './components/ProfileCard';

const Main = () => {
  return (
    <>
      <div className='relative z-50'>
        <div className='container mx-auto h-[84vh] 2xl:h-[70vh]  mt-[8vh] 2xl:mt-[15vh]'>
          <div className='mx-16 h-full flex items-start'>
            <SideNav />
            <div className='bg-white ml-2 self-stretch w-[350px]'>
              <ProfileCard />
            </div>
            <div className='self-stretch bg-blue-500 flex-grow p-2 overflow-y-auto my-5'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <div className='fixed inset-0 h-screen w-screen bg-[#0A0A0A]'></div>
    </>
  );
};
export default Main;
