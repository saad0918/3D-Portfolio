import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic Background</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-6">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className="bg-tertiary p-8 rounded-2xl"
          >
            <h3 className="text-white text-[24px] font-bold">
              {item.degree}
            </h3>

            <p className="mt-2 text-secondary text-[18px] font-semibold">
              {item.branch}
            </p>

            <p className="mt-2 text-white-100 text-[16px]">
              {item.college}
            </p>
            
            <p className="mt-2 text-white font-semibold text-[16px]">CGPA: {item.cgpa}
            </p>

            <p className="mt-2 text-secondary text-[14px]">
              {item.date}
            </p>

            <p className="mt-4 text-secondary text-[15px] leading-[26px]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");