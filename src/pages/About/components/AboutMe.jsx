import SectionHeader from '../../../components/SectionHeader';

const AboutMe = () => {
  return (
    <>
      <SectionHeader>About Me</SectionHeader>
      <div className='px-4 lg:px-7 mt-4 text-gray-700 dark:text-white'>
        <p className='text-justify'>
          Hi there! <span className='font-semibold '>I&apos;m Tarek,</span> a dedicated
          <span className='font-semibold '> Software Developer</span> passionate about creating innovative, scalable,
          and user-focused solutions. With a strong commitment to delivering excellence, I strive to build seamless
          digital experiences that address real-world challenges and exceed expectations.
        </p>

        <p className='mt-4 text-justify'>
          Driven by curiosity and a desire for continuous improvement, I embrace new opportunities to learn, grow, and
          contribute to meaningful projects. If you&apos;d like to connect, discuss exciting possibilities, or simply
          share insights, I&apos;d be delighted to hear from you.
        </p>
      </div>
    </>
  );
};
export default AboutMe;
