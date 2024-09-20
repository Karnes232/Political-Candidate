import React, { useRef } from "react";
import useFindBottom from "../../hooks/useFindBottom";
const HeroComponentGracias = ({ name, backgroundImage }) => {
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
      "linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.3) 25%, rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 0.6) 100%), url(" +
      newBackgroundImage.imageSrc +
      ")",
  };

  const heroBottom = useFindBottom(heroRef);
  return (
    <>
      {" "}
      <div className="absolute top-0 w-full h-screen">
        <div
          ref={heroRef}
          className={`relative h-screen pb-5 bg-center bg-no-repeat bg-cover`}
          style={HeroStyles}
        >
          <div className="h-24 lg:h-36"></div>
          <main className="h-[80vh] lg:h-[70vh] flex justify-center items-center">
            <div className="flex flex-col items-center max-w-xs xl:max-w-sm mx-auto">
              <div className="">
                <div className="flex flex-col justify-center items-center text-white">
                  <div className="text-2xl xl:text-4xl font-serif text-center mt-6">
                    Gracias {name}, por unirte a nuestro equipo.
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div style={{ height: `${heroBottom}px` }}></div>
    </>
  );
};

export default HeroComponentGracias;
