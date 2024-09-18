import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import RichText from "../TextComponent/RichText";

const AboutCandidate = ({ richText, candidateImage, secondImage }) => {
  const image = getImage(candidateImage);
  const image2 = getImage(secondImage);
  return (
    <div className="flex items-center lg:items-stretch flex-col lg:flex-row justify-center xl:m-7  lg:block">
      <div className="m-5 xl:my-0 lg:basis-1/3 lg:float-right lg:w-[30rem] xl:w-[35rem] 2xl:w-[20rem]">
        <GatsbyImage
          image={image}
          alt={candidateImage.title}
          className="w-full lg:mb-2"
        />
      </div>
      <div className="hidden 2xl:block 2xl:float-end 2xl:w-[30rem]">
        <GatsbyImage
          image={image2}
          alt={candidateImage.title}
          className="w-full lg:mb-2"
        />
      </div>
      <div className="lg:basis-2/3 lg:flex-1">
        <RichText context={richText} />
      </div>
    </div>
  );
};

export default AboutCandidate;
