import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';

const WorkCard = ({ data }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className='group border border-gray-200 dark:border-gray-800 p-2 pb-0 bg-white dark:bg-black transition-colors duration-500'
    >
      <a href={data.live} target='_blank' className='overflow-hidden flex flex-col'>
        <h3 className='text-black dark:text-white text-base font-light'>{data.title}</h3>
        <img
          className='w-full object-contain object-top transition-all ease-in-out duration-500 group-hover:scale-110'
          src={data.thumbnail}
          alt=''
        />

        <div className='flex justify-end gap-2'>
          <a
            className='text-sm text-black p-2 -mr-2 font-light underline underline-offset-2'
            href={data.github}
            target='_blank'
          >
            <FaGithub title='Github' className='text-xl text-black dark:text-white' />
          </a>
        </div>
      </a>
    </motion.div>
  );
};
export default WorkCard;
