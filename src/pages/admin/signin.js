import { onAuthStateChanged } from "firebase/auth";
import { graphql, navigate } from "gatsby";
import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { auth } from "../../config/firebase";
import SignIn from "../../components/admin/SignIn";
import Seo from "../../components/seo";

const Signin = ({ data }) => {
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        navigate("/admin/");
      }
    });
  }, []);
  return (
    <Layout
      layout={data.allContentfulGeneralLayout.nodes[0]}
      navBarColor={"text-black"}
    >
      <div></div>
      <div className="flex justify-center items-center">
        <SignIn />
      </div>
    </Layout>
  );
};

export default Signin;

export const Head = ({ data }) => {
  return (
    <>
      <Seo
        title="Fuerza del Pueblo - Admin"
        description="Fuerza del Pueblo - Admin"
        keywords="none"
        // schemaMarkup={schema}
      />
      <link
        rel="canonical"
        href={`${data.allContentfulGeneralLayout.nodes[0].url}admin`}
      />
      <meta name="robots" content="noindex,nofollow" />
    </>
  );
};

export const querie = graphql`
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
  }
`;
