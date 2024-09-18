import React from "react";
import { motion } from "framer-motion";
const TextComponent = ({ title, paragraph, className, pClassName }) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 3,
          delay: 0.3,
        }}
        className="block justify-center xl:mx-auto"
      >
        {title ? (
          <h1
            className={`font-montserrat tracking-wider font-semibold ${className}`}
          >
            {title}
          </h1>
        ) : (
          <></>
        )}
        {paragraph ? (
          <p
            className={`font-lato lg:text-lg text-gray-700 ${pClassName}`}
            // dangerouslySetInnerHTML={{ __html: paragraph }}
          >
            {paragraph}
          </p>
        ) : (
          <></>
        )}
      </motion.div>
    </div>
  );
};

export default TextComponent;
