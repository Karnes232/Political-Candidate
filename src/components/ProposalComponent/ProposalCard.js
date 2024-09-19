import React from "react";
import { motion } from "framer-motion";
import VideoComponent from "./VideoComponent";
import RichText from "./RichText";

const ProposalCard = ({ cardInfo }) => {
  console.log(cardInfo.description);
  let backgroundImageSplit =
    cardInfo?.backgroundImage?.gatsbyImage?.images?.fallback?.srcSet.split(",");
  let backgroundImageSrc = [];
  backgroundImageSplit?.forEach((element) => {
    const image = element.split(" ");
    const imageObject = { imageSrc: image[0], imageWidth: image[1] };
    backgroundImageSrc.push(imageObject);
  });
  let HeroStyles = {
    backgroundImage:
      "linear-gradient(200deg, rgba(0, 149, 87, .9) 0%, rgba(0, 192, 154, .9) 20%, rgba(0, 125, 80, .9) 35%, rgba(0, 77, 64, .9) 100%), url(" +
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
      className="w-full md:w-[20rem] xl:w-[25rem] mt-5 px-10 md:px-5 xl:px-10 lg:mt-0 overflow-hidden shadow-lg min-h-[25rem] bg-center bg-no-repeat bg-cover flex flex-col justify-start items-center"
      style={HeroStyles}
    >
      <div className=" flex-1 flex flex-col h-full items-center">
        <VideoComponent url={cardInfo.videoUrl} />
        <h4 className="text-white text-center text-2xl font-semibold my-2 pb-2">
          {cardInfo?.title}
        </h4>
        <div className="border-b w-3/5 mb-5"></div>
        <RichText context={cardInfo.description} />
      </div>
    </motion.div>
  );
};

export default ProposalCard;
