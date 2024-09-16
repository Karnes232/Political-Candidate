import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../Components/Layout/Layout";
import HeroComponent from "../Components/HeroComponent";

const IndexPage = ({ data }) => {
  // console.log(data.allContentfulPageLayout?.nodes[0]);
  return (
    <Layout>
      <HeroComponent backgroundImage={data.allContentfulPageLayout.nodes[0].backgroundImage} candidateImage={data.allContentfulPageLayout?.nodes[0].politicalCandidateImage}/>
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
          gatsbyImageData(width: 2000, placeholder: BLURRED, formats: WEBP)
          title
        }
      }
    }
  }
`;
