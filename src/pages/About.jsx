const About = () => {
  return (
    <div className='self-stretch bg-white flex-grow overflow-y-auto my-5'>
      <div className='py-4 px-7 relative gradient-border'>
        <h2 className='text-xl font-bold'>About Me</h2>
      </div>
      <div className='px-7 mt-4 text-gray-700'>
        <p className='text-justify'>
          <span className='font-semibold'>Hello! I'm Tarekul Islam,</span> a Front-End Web Developer. I love combining
          logic and creative design to make eye-catching, accessible, and user-friendly websites and seeing the results
          of my efforts helping the user experience.
        </p>

        <p className='mt-4 text-justify'>
          My current focus is on the <span className='font-semibold'>MERN</span> stack, but still exploring other
          technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd
          love to hear from you!
        </p>
      </div>
    </div>
  );
};
export default About;
