import React from "react";
import RichText from "../TextComponent/RichText";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MeetCandidate = ({ richText, candidateImage }) => {
  const image = getImage(candidateImage);
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center xl:m-5">
      <div className="lg:basis-2/3">
        <RichText context={richText} />
      </div>
      <div className="mt-5 lg:mt-0 lg:basis-1/3">
        <GatsbyImage
          image={image}
          alt={candidateImage.title}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default MeetCandidate;
