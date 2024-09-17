import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout/Layout";
import HeroComponent from "../components/HeroComponent";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const IndexPage = ({ data }) => {
  // console.log(data.allContentfulPageLayout?.nodes[0]);
  return (
    <Layout layout={data.allContentfulGeneralLayout.nodes[0]}>
      <LoadingScreen logo={data.allContentfulGeneralLayout.nodes[0].logo} />
      <HeroComponent
        backgroundImage={data.allContentfulPageLayout.nodes[0].backgroundImage}
        candidateImage={
          data.allContentfulPageLayout?.nodes[0].politicalCandidateImage
        }
      />
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
      }
    }
  }
`;
