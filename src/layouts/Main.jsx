import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import SideNav from '../navigation/SideNav';
import AnimatedOutlet from './components/AnimatedOutlet';
import ProfileCard from './components/ProfileCard';

const Main = () => {
  const location = useLocation();
  return (
    <div className='container mx-auto h-[84vh] 2xl:h-[70vh]  mt-[8vh] 2xl:mt-[15vh]'>
      <div className='mx-16 h-full flex items-start'>
        <SideNav />
        <ProfileCard />
        <AnimatePresence mode='popLayout'>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.7 }}
            className='self-stretch flex-grow flex'
          >
            <AnimatedOutlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Main;
