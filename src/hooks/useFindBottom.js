import { useEffect, useState } from "react";

const useFindBottom = (heroRef) => {
  const [divBottom, setDivBottom] = useState(0);
  useEffect(() => {
    if (heroRef?.current) {
      // Get the top and height of the div
      const rect = heroRef.current.getBoundingClientRect();
      console.log(rect);
      // Calculate the bottom of the div
      setDivBottom(rect.top + rect.height);
    }
  }, [heroRef]);

  return divBottom;
};

export default useFindBottom;
