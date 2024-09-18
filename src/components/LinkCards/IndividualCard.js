import { Link } from "gatsby";
import React from "react";
import { motion } from "framer-motion";
const IndividualCard = ({ pageCard, icon: Icon }) => {
  let backgroundImageSplit =
    pageCard?.backgroundImage?.gatsbyImage?.images?.fallback?.srcSet.split(",");
  let backgroundImageSrc = [];
  backgroundImageSplit?.forEach((element) => {
    const image = element.split(" ");
    const imageObject = { imageSrc: image[0], imageWidth: image[1] };
    backgroundImageSrc.push(imageObject);
  });
  let HeroStyles = {
    backgroundImage:
      "linear-gradient(0deg, rgba(0, 149, 87, .5) 0%, rgba(0, 149, 87, .5) 100%), url(" +
      backgroundImageSrc[2]?.imageSrc +
      ")",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 3,
        delay: 0.3,
      }}
      className="w-full lg:w-[23rem] mt-5 lg:mt-0 overflow-hidden shadow-lg min-h-[25rem] h-full bg-center bg-no-repeat bg-cover flex justify-center items-center"
      style={HeroStyles}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex flex-col justify-center items-center"
      >
        <Icon className="text-4xl text-white text-center" />
        <h4 className="text-white text-4xl font-light my-2 pb-2 border-b">
          {pageCard?.title}
        </h4>
        <p className="w-3/4 text-white text-center font-light">
          {pageCard?.shortDescription}
        </p>
        <Link
          to={pageCard?.page}
          className="no-underline"
          aria-label={pageCard?.title}
        >
          <button
            className="mt-5 bg-red-700 hover:bg-secondary-color px-5 py-5 text-white capitalize"
            translate="no"
          >
            {pageCard?.buttonText}
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default IndividualCard;
