import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { graphql, navigate } from "gatsby";
import { auth, db } from "../../config/firebase";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import PotentialVoterList from "../../components/admin/PotentialVoterList";

const Index = ({ data }) => {
  const [potentialVoters, setPotentialVoters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const voterRef = collection(db, "contactoConElElectorado");
      const q = query(voterRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setPotentialVoters((prevUsers) => [...prevUsers, doc.data()]);
      });
    }

    onAuthStateChanged(auth, async (user) => {
      const currentUser = auth.currentUser;
      if (
        currentUser?.email === "karnes.james@gmail.com" ||
        currentUser?.email === "reyesce.nancy@gmail.com"
      ) {
        fetchData();
      } else if (
        currentUser?.email !== "karnes.james@gmail.com" ||
        currentUser?.email !== "reyesce.nancy@gmail.com"
      ) {
        if (currentUser === null) {
          navigate("/admin/signin");
        } else {
          navigate("/");
        }
      } else {
        navigate("/admin/signin");
      }
    });
  }, []);

  return (
    <Layout
      layout={data.allContentfulGeneralLayout.nodes[0]}
      navBarColor={"text-black"}
    >
      <div className=""></div>
      <div className="flex flex-col items-center justify-center text-center max-w-5xl lg:p-2 mx-auto">
        <table className="mx-auto text-sm text-left text-gray-500 block shadow rounded-xl overflow-hidden">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-5 py-3">
                Nombre
              </th>
              <th scope="col" className="px-5 py-3">
                Apellido
              </th>
              <th scope="col" className="px-5 py-3">
                Cedula
              </th>
            </tr>
          </thead>
          <tbody>
            {potentialVoters.map((voter, index) => {
              return <PotentialVoterList key={index} voter={voter} />;
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Index;

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
