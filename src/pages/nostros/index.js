import React, { useRef } from "react";
import Layout from "../../components/Layout/Layout";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import useBottomRef from "../../hooks/useBottomRef";
import { graphql } from "gatsby";
import TextComponent from "../../components/TextComponent/TextComponent";
import AboutCandidate from "../../components/AboutCandidate/AboutCandidate";
import HeroImage from "../../components/AboutCandidate/HeroImage";
import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";

const Index = ({ data }) => {
  const heroRef = useRef(null);
  let navBarColor = useBottomRef(heroRef);
  return (
    <Layout
      layout={data.allContentfulGeneralLayout.nodes[0]}
      navBarColor={navBarColor}
    >
      <HeroComponent
        heroRef={heroRef}
        backgroundImage={data.allContentfulPageLayout.nodes[0].backgroundImage}
        candidateImage={
          data.allContentfulPageLayout?.nodes[0].politicalCandidateImage
        }
      />
      <div className="xl:max-w-7xl 2xl:max-w-screen-2xl xl:mx-auto">
        <TextComponent
          title={data.allContentfulPageLayout.nodes[0].meetCandidateTitle}
          className="m-5 lg:mt-10 2xl:mb-2 2xl:mt-10 text-2xl md:text-3xl text-center"
        />
        <AboutCandidate
          richText={data.allContentfulPageLayout?.nodes[0].meetCandidate}
          candidateImage={
            data.allContentfulPageLayout?.nodes[0].secondaryCandidateImage
          }
          secondImage={
            data.allContentfulPageLayout?.nodes[0].thirdCandidateImage
          }
        />

        <PhotoGrid images={data.allContentfulPhotoList?.nodes[0].photos} />
      </div>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query MyQuery {
    allContentfulGeneralLayout {
      nodes {
        candidateName
        email
        facebook
        instagram
        logo {
          gatsbyImage(width: 500, placeholder: BLURRED, formats: WEBP)
          title
        }
      }
    }
    allContentfulPageLayout(filter: { page: { eq: "Nostros" } }) {
      nodes {
        page
        backgroundImage {
          gatsbyImage(width: 4000, placeholder: BLURRED, formats: WEBP)
          title
        }
        politicalCandidateImage {
          gatsbyImage(width: 2000, placeholder: BLURRED, formats: WEBP)
          title
        }
        meetCandidateTitle
        meetCandidate {
          raw
        }
        secondaryCandidateImage {
          gatsbyImage(width: 1000, placeholder: BLURRED, formats: WEBP)
          title
        }
        thirdCandidateImage {
          title
          gatsbyImage(width: 3000, placeholder: BLURRED, formats: WEBP)
        }
      }
    }
    allContentfulPhotoList(filter: { page: { eq: "Nostros" } }) {
      nodes {
        photos {
          gatsbyImage(width: 2000, placeholder: BLURRED, formats: WEBP)
          url
        }
      }
    }
  }
`;
