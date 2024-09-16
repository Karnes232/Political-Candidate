import React from "react";

const HeroComponent = ({ backgroundImage, candidateImage }) => {
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
  //   let HeroStyles = {}

  let HeroStyles = {
    backgroundImage:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(" +
      backgroundImageSrc[2].imageSrc +
      ")",
  };
  let candidateStyles = {
    backgroundImage: "url(" + candiateImageSrc[2].imageSrc + ")",
  };
  console.log(backgroundImageSrc[2].imageSrc);
  return (
    <>
      <div className="absolute top-0 w-full h-screen">
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
      <div className="h-screen"></div>
    </>
  );
};

export default HeroComponent;
