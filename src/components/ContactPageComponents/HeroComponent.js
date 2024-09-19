import React from "react";
import ContactForm from "./ContactForm";

const HeroComponent = ({ backgroundImage }) => {
  let backgroundImageSplit =
    backgroundImage?.gatsbyImage?.images?.fallback?.srcSet.split(",");
  let backgroundImageSrc = [];
  backgroundImageSplit?.forEach((element) => {
    const image = element.split(" ");
    const imageObject = { imageSrc: image[0], imageWidth: image[1] };
    backgroundImageSrc.push(imageObject);
  });
  let newBackgroundImage = backgroundImageSrc.pop();
  let HeroStyles = {
    backgroundImage:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0.8) 100%), url(" +
      newBackgroundImage.imageSrc +
      ")",
  };
  return (
    <>
      {" "}
      <div className="absolute top-0 w-full h-screen">
        <div
          className={`relative h-full bg-center bg-no-repeat bg-cover`}
          style={HeroStyles}
        >
          <div className="h-24 lg:h-36"></div>
          <ContactForm />
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
};

export default HeroComponent;
