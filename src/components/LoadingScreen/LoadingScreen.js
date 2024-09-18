import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Utility function to check if 24 hours have passed since the last visit
const hasSixHoursPassed = (lastVisit) => {
  const currentTime = new Date();
  const previousVisitTime = new Date(lastVisit);
  const timeDifference = currentTime - previousVisitTime;
  return timeDifference > 6 * 60 * 60 * 1000; // 24 hours in milliseconds
};

const LoadingScreen = ({ logo }) => {
  const image = getImage(logo);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get the last visit from localStorage
    const lastVisit = localStorage.getItem("lastVisit");
    const hasSeenLoading = localStorage.getItem("hasSeenLoading");

    // Show the loading screen if no previous visit or more than a day has passed
    if (!hasSeenLoading || (lastVisit && hasSixHoursPassed(lastVisit))) {
      setIsVisible(true);

      // Update the last visit time and loading flag in localStorage
      localStorage.setItem("hasSeenLoading", "true");
      localStorage.setItem("lastVisit", new Date().toISOString());

      // Hide the loading screen after 2 seconds
      const timer = setTimeout(() => setIsVisible(false), 2000);

      return () => clearTimeout(timer);
    }
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
            alt={logo.title}
            className="w-52 lg:w-60 z-[100]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
