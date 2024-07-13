import Lottie from 'lottie-react';
import profileAnimation from '../../assets/animation/profile.json';

const ProfileCard = () => {
  return (
    <div>
      <div className='bg-gray-200 clip-polygon overflow-hidden'>
        <div className='h-64 w-64 mx-auto pr-3 -mt-6'>
          <Lottie animationData={profileAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
