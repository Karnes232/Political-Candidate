import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const LoadingScreen = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allContentfulGeneralLayout {
        nodes {
          logo {
            gatsbyImage(width: 500, placeholder: BLURRED, formats: WEBP)
            title
          }
        }
      }
    }
  `);
  const image = getImage(data.allContentfulGeneralLayout.nodes[0].logo);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start the opacity transition after 2 seconds
    const timer = setTimeout(() => setIsVisible(false), 1000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed inset-0 bg-secondary-color flex items-center justify-center z-50`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
  
          <GatsbyImage
            image={image}
            alt={data.allContentfulGeneralLayout.nodes[0].logo.title}
            className="w-52 lg:w-60 z-[100]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
