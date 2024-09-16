import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const Logo = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allContentfulGeneralLayout {
        nodes {
          logo {
            gatsbyImage(width: 500, placeholder: BLURRED, formats: WEBP)
            title
          }
        }
      }
    }
  `);
  const image = getImage(data.allContentfulGeneralLayout.nodes[0].logo);
  return (
    <>
      <div className="flex justify-center items-center overflow-hidden">
        <Link to="/" className="no-underline" aria-label="Home">
          <div className="cursor-pointer flex items-center">
            <GatsbyImage
              image={image}
              alt={data.allContentfulGeneralLayout.nodes[0].logo.title}
              className="w-36 lg:w-52"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Logo;
