import { graphql } from "gatsby";
import React, { useRef } from "react";
import Layout from "../components/Layout/Layout";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import MeetCandidate from "../components/MeetCandidate/MeetCandidate";
import useBottomRef from "../hooks/useBottomRef";
import LinkCards from "../components/LinkCards/LinkCards";

const IndexPage = ({ data }) => {
  const heroRef = useRef(null);
  let navBarColor = useBottomRef(heroRef);

  // console.log(data.allContentfulPageLayout?.nodes[0]);
  return (
    <Layout
      layout={data.allContentfulGeneralLayout.nodes[0]}
      navBarColor={navBarColor}
    >
      <LoadingScreen logo={data.allContentfulGeneralLayout.nodes[0].logo} />
      <HeroComponent
        heroRef={heroRef}
        backgroundImage={data.allContentfulPageLayout.nodes[0].backgroundImage}
        candidateImage={
          data.allContentfulPageLayout?.nodes[0].politicalCandidateImage
        }
      />
      <MeetCandidate
        richText={data.allContentfulPageLayout?.nodes[0].meetCandidate}
        candidateImage={
          data.allContentfulPageLayout?.nodes[0].secondaryCandidateImage
        }
      />
      <LinkCards pageCards={data.allContentfulPageCard.nodes} />
      <div className="h-screen"></div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

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
    allContentfulPageLayout(filter: { page: { eq: "Index" } }) {
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
        secondaryCandidateImage {
          gatsbyImage(width: 1000, placeholder: BLURRED, formats: WEBP)
          title
        }
        meetCandidate {
          raw
        }
      }
    }
    allContentfulPageCard {
      nodes {
        page
        title
        shortDescription
        buttonText
        backgroundImage {
          gatsbyImage(width: 500, placeholder: BLURRED, formats: WEBP)
        }
      }
    }
  }
`;
