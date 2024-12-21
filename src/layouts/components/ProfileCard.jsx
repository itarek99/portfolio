import Lottie from 'lottie-react';
import { FaDownload } from 'react-icons/fa';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { RiWhatsappFill } from 'react-icons/ri';

import { useEffect, useRef } from 'react';
import profileAnimation from '../../assets/animation/profile.json';

const SocialLink = ({ children, link = '', title = '' }) => {
  return (
    <a
      href={link}
      target='_blank'
      className='text-gray-500 hover:text-white hover:bg-primary hover:border-primary transform size-8 flex justify-center items-center border border-gray-500 transition duration-500'
      rel='noopener noreferrer'
      title={title}
    >
      {children}
    </a>
  );
};

const ProfileCard = ({ setProfileCardHeight }) => {
  const profileCardRef = useRef(null);

  useEffect(() => {
    const updateProfileCardSize = () => {
      if (profileCardRef.current) {
        setProfileCardHeight(profileCardRef.current.offsetHeight);
      }
    };

    updateProfileCardSize();

    window.addEventListener('resize', updateProfileCardSize);
    return () => window.removeEventListener('resize', updateProfileCardSize);
  }, [profileCardRef, setProfileCardHeight]);

  return (
    <div
      ref={profileCardRef}
      className='bg-white dark:bg-black lg:ml-2 self-stretch profile-card z-20 transition duration-500'
    >
      <div className='h-full flex flex-col'>
        <div className='bg-gray-200 lg:w-[350px] 2xl:w-[450px] clip-polygon overflow-hidden'>
          <div className='lg:size-[300px] 2xl:size-[380px] mx-auto pr-3 -mt-8'>
            <Lottie animationData={profileAnimation} loop={true} />
          </div>
        </div>

        <div className='mt-6 flex-grow text-center flex flex-col justify-between'>
          <div>
            <p className='text-4xl font-medium dark:text-white transition duration-500'>Tarekul Islam</p>
            <p className=' text-primary mt-1 font-medium'>Full Stack Developer</p>

            <div className='flex gap-2 justify-center mt-5 mb-5'>
              <SocialLink link='https://github.com/itarek99' title='GitHub'>
                <FaGithub size='14px' />
              </SocialLink>
              <SocialLink link='https://www.linkedin.com/in/-tarekul-islam/' title='LinkedIn'>
                <FaLinkedinIn size='14px' />
              </SocialLink>

              <SocialLink link=' https://wa.me/8801742797060' title='whatsapp'>
                <RiWhatsappFill size='14px' />
              </SocialLink>
              <SocialLink link='https://www.facebook.com/tarek161803/' title='Facebook'>
                <FaFacebookF size='14px' />
              </SocialLink>
            </div>
          </div>

          <div id='resume-download' className='py-3 relative transition duration-500'>
            <a
              href='https://drive.google.com/file/d/1VS_NHPl0jlnYbz-z6xA_TogKaCP_6Cs4/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-2 text-gray-800 dark:text-gray-300 font-medium hover:text-primary transform duration-500'
            >
              <span>Download Resume</span> <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
