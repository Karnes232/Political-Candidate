import { useEffect, useState } from "react";

const useWindowLocation = () => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);

    return () => {};
  }, []);

  return pathname;
};

export default useWindowLocation;
