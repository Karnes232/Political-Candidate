import React, { useRef } from "react";
import ContactForm from "./ContactForm";
import useFindBottom from "../../hooks/useFindBottom";

const HeroComponent = ({ backgroundImage }) => {
  const heroRef = useRef(null);
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

  const heroBottom = useFindBottom(heroRef);

  return (
    <>
      {" "}
      <div className="absolute top-0 w-full min-h-fit">
        <div
          ref={heroRef}
          className={`relative min-h-fit pb-5 bg-center bg-no-repeat bg-cover`}
          style={HeroStyles}
        >
          <div className="h-24 lg:h-36"></div>
          <ContactForm />
        </div>
      </div>
      <div style={{ height: `${heroBottom}px` }}></div>
    </>
  );
};

export default HeroComponent;
