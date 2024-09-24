import { graphql } from "gatsby";
import React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout/Layout";
import HeroComponent from "../../components/ContactPageComponents/HeroComponent";

const Index = ({ data }) => {
  return (
    <Layout
      layout={data.allContentfulGeneralLayout.nodes[0]}
      navBarColor={"text-white"}
    >
      <HeroComponent
        backgroundImage={data.allContentfulPageLayout.nodes[0].backgroundImage}
      />
    </Layout>
  );
};

export default Index;

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
        href={`${data.allContentfulGeneralLayout.nodes[0].url}contacto`}
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
    allContentfulSeo(filter: { page: { eq: "Contacto" } }) {
      nodes {
        title
        keywords
        description {
          description
        }
      }
    }
    allContentfulPageLayout(filter: { page: { eq: "Contacto" } }) {
      nodes {
        page
        backgroundImage {
          gatsbyImage(width: 4000, placeholder: BLURRED, formats: WEBP)
          title
        }
      }
    }
  }
`;
