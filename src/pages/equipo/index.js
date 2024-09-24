import React, { useRef } from "react";
import Layout from "../../components/Layout/Layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import useBottomRef from "../../hooks/useBottomRef";
import HeroComponent from "../../components/EquipoComponents/HeroComponent";
import TextComponent from "../../components/TextComponent/TextComponent";
import EquipoCard from "../../components/EquipoComponents/EquipoCard";

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
      </div>
      <div className="xl:max-w-7xl xl:mx-auto flex flex-col md:flex-row md:flex-wrap md:justify-center gap-6 mb-6">
        {data.allContentfulEquipo.nodes.map((person, index) => {
          return <EquipoCard person={person} key={index} />;
        })}
      </div>
    </Layout>
  );
};

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
        href={`${data.allContentfulGeneralLayout.nodes[0].url}equipo`}
      />
    </>
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
        url
        logo {
          gatsbyImage(width: 500, placeholder: BLURRED, formats: WEBP)
          title
        }
      }
    }
    allContentfulSeo(filter: { page: { eq: "Equipo" } }) {
      nodes {
        title
        keywords
        description {
          description
        }
      }
    }
    allContentfulPageLayout(filter: { page: { eq: "Equipo" } }) {
      nodes {
        page
        meetCandidateTitle
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
    allContentfulEquipo {
      nodes {
        name
        urlSlug
        position
        photo {
          gatsbyImage(width: 400, placeholder: BLURRED, formats: WEBP)
          title
        }
        x
        email
        facebook
        instagram
      }
    }
  }
`;
