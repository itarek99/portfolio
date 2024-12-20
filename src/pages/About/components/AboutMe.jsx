import SectionHeader from '../../../components/SectionHeader';

const AboutMe = () => {
  return (
    <>
      <SectionHeader>About Me</SectionHeader>
      <div className='px-4 lg:px-7 mt-4 text-gray-700 dark:text-white'>
        <p className='text-justify'>
          <span className='font-semibold '>Hello! I'm Tarekul Islam,</span> a Front-End Web Developer. I love combining
          logic and creative design to make eye-catching, accessible, and user-friendly websites and seeing the results
          of my efforts helping the user experience.
        </p>

        <p className='mt-4 text-justify'>
          My current focus is on the <span className='font-semibold'>MERN</span> stack, but still exploring other
          technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd
          love to hear from you!
        </p>
      </div>
    </>
  );
};
export default AboutMe;
