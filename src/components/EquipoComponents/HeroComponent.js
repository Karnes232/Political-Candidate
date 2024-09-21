import React from "react";

const HeroComponent = ({ heroRef, backgroundImage, candidateImage }) => {
  let backgroundImageSplit =
    backgroundImage?.gatsbyImage?.images?.fallback?.srcSet.split(",");
  let candidateImageSplit =
    candidateImage?.gatsbyImage?.images?.fallback?.srcSet.split(",");
  let backgroundImageSrc = [];
  let candiateImageSrc = [];

  backgroundImageSplit?.forEach((element) => {
    const image = element.split(" ");
    const imageObject = { imageSrc: image[0], imageWidth: image[1] };
    backgroundImageSrc.push(imageObject);
  });

  candidateImageSplit?.forEach((element) => {
    const image = element.split(" ");
    const imageObject = { imageSrc: image[0], imageWidth: image[1] };
    candiateImageSrc.push(imageObject);
  });
  let newBackgroundImage = backgroundImageSrc.pop();
  let newCandiateImage = candiateImageSrc.pop();
  let HeroStyles = {
    backgroundImage:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0.8) 100%), url(" +
      newBackgroundImage.imageSrc +
      ")",
  };
  let candidateStyles = {
    backgroundImage: "url(" + newCandiateImage.imageSrc + ")",
  };
  return (
    <>
      <div className="absolute top-0 w-full h-[50vh] xl:h-[75vh]" ref={heroRef}>
        <div
          className={`relative h-full bg-center bg-no-repeat bg-cover`}
          style={HeroStyles}
        >
          <div
            className={`absolute w-full bottom-0 z-20 h-3/4 bg-bottom bg-no-repeat bg-contain`}
            style={candidateStyles}
          ></div>
        </div>
      </div>
      <div className="h-[50vh] xl:h-[75vh]"></div>
    </>
  );
};

export default HeroComponent;
