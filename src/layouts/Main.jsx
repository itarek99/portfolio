import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SideNav from '../navigation/SideNav';
import AnimatedOutlet from './components/AnimatedOutlet';
import ProfileCard from './components/ProfileCard';

const Main = () => {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(false);

  const [profileCardHeight, setProfileCardHeight] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className='lg:container  mx-auto lg:h-[84vh] 2xl:h-[80vh] lg:mt-[8vh] 2xl:mt-[10vh]'>
      <div className='lg:mx-16 h-full flex flex-col lg:flex-row items-start'>
        <SideNav profileCardHeight={profileCardHeight} />
        <ProfileCard setProfileCardHeight={setProfileCardHeight} />
        <AnimatePresence mode='popLayout'>
          <motion.div
            key={location.pathname}
            initial={isDesktop ? { opacity: 0, x: -300 } : false}
            animate={isDesktop ? { opacity: 1, x: 0 } : false}
            exit={isDesktop ? { opacity: 0, x: -300 } : false}
            transition={isDesktop ? { duration: 0.7 } : false}
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
