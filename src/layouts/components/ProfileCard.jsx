import Lottie from 'lottie-react';
import { FaDownload } from 'react-icons/fa';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { RiWhatsappFill } from 'react-icons/ri';

import profileAnimation from '../../assets/animation/profile.json';

const SocialLink = ({ children, link = '', title = '' }) => {
  return (
    <a
      href={link}
      target='_blank'
      className='text-gray-500 hover:text-white hover:bg-primary hover:border-primary transform duration-300 size-6 flex justify-center items-center border border-gray-500'
      rel='noopener noreferrer'
      title={title}
    >
      {children}
    </a>
  );
};

const ProfileCard = () => {
  return (
    <div className='bg-white ml-2 self-stretch profile-card z-20'>
      <div className='h-full flex flex-col'>
        <div className='bg-gray-200 w-[350px] 2xl:w-[450px] clip-polygon overflow-hidden'>
          <div className='size-[300px] 2xl:size-[380px] mx-auto pr-3 -mt-8'>
            <Lottie animationData={profileAnimation} loop={true} />
          </div>
        </div>

        <div className='mt-6 flex-grow text-center flex flex-col justify-between'>
          <div>
            <p className='text-4xl font-medium'>Tarekul Islam</p>
            <p className=' text-primary mt-1 font-medium'>Full Stack Developer</p>

            <div className='flex gap-2 justify-center mt-5'>
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

          <div id='resume-download' className='py-3 relative'>
            <a
              href='https://drive.google.com/file/d/1VS_NHPl0jlnYbz-z6xA_TogKaCP_6Cs4/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-2 text-gray-800 font-medium hover:text-primary transform duration-300'
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
