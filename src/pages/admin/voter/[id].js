import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import IndividualVoter from "../../../components/admin/IndividualVoter";

const Voters = ({ location, data }) => {
  const [voter, setVoter] = useState(null);
  const findVoter = async (id) => {
    const docRef = doc(db, "contactoConElElectorado", id);
    const docSnap = await getDoc(docRef);
    setVoter(docSnap.data());
  };
  const voterId = location.pathname.split("/");
  useEffect(() => {
    findVoter(voterId[3]);
  }, []);

  return (
    <Layout
      layout={data.allContentfulGeneralLayout.nodes[0]}
      navBarColor={"text-black"}
    >
      <div className=""></div>
      <IndividualVoter voter={voter} />
    </Layout>
  );
};

export default Voters;

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
