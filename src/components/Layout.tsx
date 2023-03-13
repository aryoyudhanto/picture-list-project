import React, { FC } from "react";
import Footer from "./Footer";

import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto bg-white">
      <Navbar />
      <div className="h-screen overflow-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
