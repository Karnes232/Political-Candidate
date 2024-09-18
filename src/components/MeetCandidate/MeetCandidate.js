import React from "react";
import RichText from "../TextComponent/RichText";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MeetCandidate = ({ richText, candidateImage }) => {
  const image = getImage(candidateImage);
  return (
    <div className="flex items-center lg:items-stretch flex-col lg:flex-row justify-center xl:m-7 lg:space-x-7">
      <div className="lg:basis-2/3 lg:flex-1">
        <RichText context={richText} />
      </div>
      <div className="my-5 xl:my-0 lg:basis-1/3">
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
