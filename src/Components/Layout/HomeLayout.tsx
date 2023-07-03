import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "..";

const HomeLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
