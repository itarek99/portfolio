import Lottie from 'lottie-react';
import profileAnimation from '../../assets/animation/profile.json';

const ProfileCard = () => {
  return (
    <div className='bg-white ml-2 self-stretch w-[350px] 2xl:w-[400px]'>
      <div className='h-full flex flex-col'>
        <div className='bg-gray-200 clip-polygon overflow-hidden'>
          <div className='size-[270px] mx-auto pr-3 -mt-8'>
            <Lottie animationData={profileAnimation} loop={true} />
          </div>
        </div>

        <div className='mt-4 flex-grow text-center'>
          <p className='text-3xl font-medium'>Tarekul Islam</p>
          <p className='text-sm text-primary mt-1'>Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
