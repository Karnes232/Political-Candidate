import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";
import TextComponent from "../components/TextComponent/TextComponent";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import RichText from "../components/TextComponent/RichText";
import AboutCandidateRichText from "../components/AboutCandidate/AboutCandidateRichText";
import SocialMedia from "../components/AboutCandidate/SocialMedia";

const Member = ({ pageContext, data }) => {
  console.log(data.allContentfulEquipo.nodes[0]);
  const image = getImage(data.allContentfulEquipo.nodes[0].mainPagePhoto);
  return (
    <Layout
      layout={data.allContentfulGeneralLayout.nodes[0]}
      navBarColor={"text-black"}
    >
      <div className="h-24 lg:h-36 "></div>
      <TextComponent
        title={data.allContentfulEquipo.nodes[0].position}
        className="m-5 lg:mt-10 2xl:mb-2 2xl:mt-10 text-2xl md:text-3xl text-center"
      />
      <div className="max-w-7xl lg:mx-5 2xl:max-w-screen-2xl xl:mx-auto 2xl:mt-10">
        <div className="flex items-center lg:items-stretch flex-col  lg:flex-row justify-center">
          <div className="mx-5 lg:mx-0 xl:my-0 lg:w-[30rem] xl:w-[35rem] 2xl:w-[35rem]">
            <GatsbyImage
              image={image}
              alt={data.allContentfulEquipo.nodes[0].mainPagePhoto.title}
              className="w-full lg:mb-2"
            />
            <TextComponent
              title={data.allContentfulEquipo.nodes[0].name}
              className="m-5 lg:mt-10 2xl:mb-2 2xl:mt-10 text-2xl md:text-3xl text-center"
            />
          </div>
          <div className="lg:basis-2/3 lg:flex-1">
            <AboutCandidateRichText
              context={data.allContentfulEquipo.nodes[0].personalInfo}
            />
          </div>
        </div>
        <SocialMedia
          facebook={data.allContentfulEquipo.nodes[0].facebook}
          instagram={data.allContentfulEquipo.nodes[0].instagram}
          x={data.allContentfulEquipo.nodes[0].x}
          email={data.allContentfulEquipo.nodes[0].email}
        />
      </div>
    </Layout>
  );
};

export default Member;

export const query = graphql`
  query MyQuery($id: String) {
    allContentfulEquipo(filter: { id: { eq: $id } }) {
      nodes {
        name
        position
        x
        email
        facebook
        instagram
        urlSlug
        personalInfo {
          raw
        }
        mainPagePhoto {
          gatsbyImage(width: 2000, placeholder: BLURRED, formats: WEBP)
          title
        }
      }
    }
    allContentfulGeneralLayout {
      nodes {
        candidateName
        email
        facebook
        instagram
        url
        logo {
          gatsbyImage(width: 500, placeholder: BLURRED, formats: WEBP)
          title
        }
      }
    }
  }
`;
