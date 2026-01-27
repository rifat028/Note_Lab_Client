import React from "react";
import Navbar from "../Components/LayoutComponents/Navbar";
import { Outlet } from "react-router";
import SideNavbar from "../Components/LayoutComponents/SideNavbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-50 p-4">
            {/* Sidebar content here */}
            <SideNavbar></SideNavbar>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
