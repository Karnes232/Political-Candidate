import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout/Layout";
import HeroComponent from "../components/HeroComponent";

const IndexPage = ({ data }) => {
  // console.log(data.allContentfulPageLayout?.nodes[0]);
  return (
    <Layout>
      <HeroComponent
        backgroundImage={data.allContentfulPageLayout.nodes[0].backgroundImage}
        candidateImage={
          data.allContentfulPageLayout?.nodes[0].politicalCandidateImage
        }
      />
      <h1 className="text-6xl">Helo World</h1>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query MyQuery {
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
