import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout/Layout";
import Seo from "../components/seo";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = ({ data }) => {
  return (
    <Layout
      layout={data.allContentfulGeneralLayout.nodes[0]}
      // navBarColor={navBarColor}
    >
      <div className=""></div>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Page not found</h1>
        <p style={paragraphStyles}>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = ({ data }) => {
  return (
    <>
      <Seo
        title="Fuerza del Pueblo - 404"
        description="Fuerza del Pueblo - 404"
        keywords="404"
        // schemaMarkup={schema}
      />
      <link
        rel="canonical"
        href={`${data.allContentfulGeneralLayout.nodes[0].url}404`}
      />
      <meta name="robots" content="noindex,nofollow" />
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
        logo {
          gatsbyImage(width: 500, placeholder: BLURRED, formats: WEBP)
          title
        }
      }
    }
  }
`;
