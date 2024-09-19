import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout/Layout";
import Seo from "../../components/seo";
import ProposalComponent from "../../components/ProposalComponent/ProposalComponent";

const Index = ({ data }) => {
  return (
    <Layout layout={data.allContentfulGeneralLayout.nodes[0]}>
      <div className="h-24 lg:h-36"></div>
      <div className="xl:max-w-7xl 2xl:max-w-screen-2xl xl:mx-auto h-[25vh] landscape:lg:h-[40vh] lg:h-[25vh] flex justify-center items-center">
        <ProposalComponent
          text={data.allContentfulPageLayout.nodes[0].propuestaTitle}
          className="gradient-text text-4xl font-bold md:text-5xl lg:text-6xl"
        />
      </div>
      <div className="h-screen bg-purple-600"></div>
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
        href={`${data.allContentfulGeneralLayout.nodes[0].url}propuestas`}
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
    allContentfulSeo(filter: { page: { eq: "Propuestas" } }) {
      nodes {
        title
        keywords
        description {
          description
        }
      }
    }
    allContentfulPageLayout(filter: { page: { eq: "Propuestas" } }) {
      nodes {
        propuestaTitle
      }
    }
    allContentfulPropuestaCard {
      nodes {
        title
        description {
          raw
        }
        backgroundImage {
          title
          gatsbyImage(width: 500, formats: WEBP, placeholder: BLURRED)
        }
        videoUrl
      }
    }
  }
`;
