import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const HeroImage = ({ image }) => {
  const heroImage = getImage(image);
  return (
    <GatsbyImage
      image={heroImage}
      alt={image.title}
      className="w-full max-h-[70vh] 2xl:max-h-[80vh]"
    />
  );
};

export default HeroImage;
