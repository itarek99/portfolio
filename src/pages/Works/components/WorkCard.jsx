import { motion } from 'framer-motion';

const WorkCard = ({ data }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className='group border border-gray-200 dark:border-gray-800'
    >
      <div className='overflow-hidden'>
        <img
          className='w-full aspect-[16/11]  object-cover object-top transition-all ease-in-out duration-[2000ms] group-hover:object-bottom'
          src={data.thumbnail}
          alt=''
        />
      </div>
      <div className='bg-gray-100 p-3 dark:bg-gray-950'>
        <h3>{data.title}</h3>

        <div className='mt-1 flex gap-2'>
          <a className='text-sm font-light underline underline-offset-2' href={data.live} target='_blank'>
            Live
          </a>
          <a className='text-sm font-light underline underline-offset-2' href={data.github} target='_blank'>
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default WorkCard;
