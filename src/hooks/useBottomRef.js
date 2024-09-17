import { useEffect, useState } from "react";

const useBottomRef = (heroRef) => {
  const [navBarColor, setNavBarColor] = useState("text-white");

  useEffect(() => {
    let divBottom = 0;
    if (heroRef?.current) {
      // Get the top and height of the div
      const rect = heroRef.current.getBoundingClientRect();

      // Calculate the bottom of the div
      divBottom = rect.top + rect.height;
    }
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get current scroll position

      // Define the scroll position at which the button should become sticky
      const triggerPosition = divBottom - 20; // Adjust this value based on your page layout

      // Set the sticky state based on scroll position
      if (scrollY > triggerPosition) {
        setNavBarColor("text-black");
      } else {
        setNavBarColor("text-white");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return navBarColor;
};

export default useBottomRef;
