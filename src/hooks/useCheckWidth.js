import { useEffect } from "react";

const useCheckWidth = () => {
  useEffect(() => {
    var docWidth = document.documentElement.offsetWidth;

    [].forEach.call(document.querySelectorAll("*"), function (el) {
      if (el.offsetWidth > docWidth) {
        console.log(el);
      }
    });
  }, []);
};

export default useCheckWidth;
