import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 justify-center"
    >
      {/* part one */}
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech. in Electrical and Electronics Engineering"
            subTitle="Indian Institute of Technology Patna (2021 - 2025)"
            result="7.67/10"
          />
          <ResumeCard
            title="Senior Secondary"
            subTitle="Kenbridge School (2019 - 2021)"
            result="94.6/100"
          />
          <ResumeCard
            title="Secondary"
            subTitle="Ispat English Medium School (2017-2019)"
            result="98/100"
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education