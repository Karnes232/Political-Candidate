import React from "react";
import Navbar from "./Header/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen font-montserrat flex flex-col justify-between bg-primary-bg-color">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
