import { Outlet } from 'react-router-dom';
import SideNav from '../navigation/SideNav';

const Main = () => {
  return (
    <>
      <div className='relative z-50'>
        <div className='container mx-auto h-[80vh]  mt-[10vh]'>
          <div className='mx-16 h-full flex items-start'>
            <SideNav />
            <div className='bg-red-600 scale-105 ml-5 mr-2 self-stretch w-[350px]'>User Card</div>
            <div className='self-stretch bg-blue-500 flex-grow p-2'>
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
