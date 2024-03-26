import React from "react";
import TopNav from "../LandingPages/TopNav";
import Footer from "../LandingPages/Footer";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-dvh w-full">
      <TopNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingPage;
