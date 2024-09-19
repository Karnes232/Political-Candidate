import { graphql } from "gatsby";
import React, { useRef } from "react";
import Layout from "../components/Layout/Layout";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import MeetCandidate from "../components/MeetCandidate/MeetCandidate";
import useBottomRef from "../hooks/useBottomRef";
import LinkCards from "../components/LinkCards/LinkCards";
import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  const heroRef = useRef(null);
  let navBarColor = useBottomRef(heroRef);
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
      <div className="xl:max-w-7xl 2xl:max-w-screen-2xl xl:mx-auto">
        <MeetCandidate
          richText={data.allContentfulPageLayout?.nodes[0].meetCandidate}
          candidateImage={
            data.allContentfulPageLayout?.nodes[0].secondaryCandidateImage
          }
        />
        <LinkCards pageCards={data.allContentfulPageCard.nodes} />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = ({ data }) => {
  const { title, description, keywords } = data.allContentfulSeo.nodes[0];
  return (
    <>
      <Seo
        title={title}
        description={description.description}
        keywords={keywords.join(", ")}
        // schemaMarkup={schema}
      />
      <link
        rel="canonical"
        href={`${data.allContentfulGeneralLayout.nodes[0].url}`}
      />
    </>
  );
};

export const query = graphql`
  query MyQuery {
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
    allContentfulSeo(filter: { page: { eq: "Index" } }) {
      nodes {
        title
        keywords
        description {
          description
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
