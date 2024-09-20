import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout';
import { graphql } from 'gatsby';
import HeroComponentGracias from '../../components/ContactPageComponents/HeroComponentGracias';

const Gracias = ({data}) => {
    const [name, setName] = useState("");
  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search);
    setName(searchParams.get("name"));
  }, []);
  return (
    <Layout
      layout={data.allContentfulGeneralLayout.nodes[0]}
      navBarColor={'text-white'}
    >
        <HeroComponentGracias name={name} backgroundImage={data.allContentfulPageLayout.nodes[0].backgroundImage}/>

    </Layout>
  )
}

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
    allContentfulSeo(filter: { page: { eq: "Gracias" } }) {
      nodes {
        title
        keywords
        description {
          description
        }
      }
    }
    allContentfulPageLayout(filter: { page: { eq: "Gracias" } }) {
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

export default Gracias