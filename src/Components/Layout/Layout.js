import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden bg-primary-bg-color">
      {children}
    </div>
  );
};

export default Layout;
