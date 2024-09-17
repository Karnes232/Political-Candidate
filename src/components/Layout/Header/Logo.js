import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const Logo = ({ logo }) => {
  const image = getImage(logo);
  return (
    <>
      <div className="flex justify-center items-center overflow-hidden">
        <Link to="/" className="no-underline" aria-label="Home">
          <div className="cursor-pointer flex items-center">
            <GatsbyImage
              image={image}
              alt={logo.title}
              className="w-36 lg:w-52"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Logo;
