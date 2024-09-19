import React from "react";
import { motion } from "framer-motion";
const ProposalComponent = ({ text, className }) => {
  console.log(text);
  return (
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
      <h1 className={`font-montserrat tracking-wider uppercase ${className}`}>
        {text}
      </h1>{" "}
    </motion.div>
  );
};

export default ProposalComponent;
