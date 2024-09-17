import React from "react";
import { Link } from "gatsby";
const Copyright = ({ candidateName }) => {
  return (
    <div className="mx-8 flex flex-col justify-between py-4 md:flex-row md:items-center md:mx-auto">
      <Link to="/">
        <p className="footerSitemap">
          &copy; {new Date().getFullYear()} {candidateName}
        </p>
      </Link>
    </div>
  );
};

export default Copyright;
