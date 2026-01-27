import React from "react";
import Navbar from "../Components/LayoutComponents/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/LayoutComponents/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
