import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-8 py-16 sm:px-5 sm:py-12 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
