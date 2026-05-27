import React from "react";
import { ImPriceTags } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { MdDashboardCustomize, MdHowToVote } from "react-icons/md";
import { RiGroup2Fill } from "react-icons/ri";
import { TbCoinTakaFilled, TbListDetails } from "react-icons/tb";
import { NavLink } from "react-router";
import LogoAnimation from "../LogoAnimation/LogoAnimation";
import "./Navbar.css";

const Navbar = () => {
  const links = (
    <>
      <li className="relative overflow-hidden group mx-px">
        <span className="absolute left-0 bottom-0 h-1 bg-yellow-500 w-0 z-0 p-0 group-hover:w-full transition-all duration-500 "></span>{" "}
        <NavLink className="z-10 hover:bg-transparent" to="/">
          <span className="flex items-center gap-2">
            <IoHome />
            Home
          </span>
        </NavLink>
      </li>
      <li className="relative overflow-hidden group mx-px">
        <span className="absolute left-0 bottom-0 h-1 bg-yellow-500 w-0 z-0 p-0 group-hover:w-full transition-all duration-500 "></span>{" "}
        <NavLink className="z-10 hover:bg-transparent" to="/packages">
          <span className="flex items-center gap-2">
            <LuNotebookPen />
            Packages
          </span>
        </NavLink>
      </li>
      <li className="relative overflow-hidden group mx-px">
        <span className="absolute left-0 bottom-0 h-1 bg-yellow-500 w-0 z-0 p-0 group-hover:w-full transition-all duration-500 "></span>{" "}
        <NavLink className="z-10 hover:bg-transparent" to="/pricing">
          <span className="flex items-center gap-2">
            <ImPriceTags />
            Price List
          </span>
        </NavLink>
      </li>
      <li className="relative overflow-hidden group mx-px">
        <span className="absolute left-0 bottom-0 h-1 bg-yellow-500 w-0 z-0 p-0 group-hover:w-full transition-all duration-500 "></span>{" "}
        <NavLink className="z-10 hover:bg-transparent" to="/details">
          <span className="flex items-center gap-2">
            <TbListDetails />
            Details
          </span>
        </NavLink>
      </li>
      <li className="relative overflow-hidden group mx-px">
        <span className="absolute left-0 bottom-0 h-1 bg-yellow-500 w-0 z-0 p-0 group-hover:w-full transition-all duration-500 "></span>{" "}
        <NavLink className="z-10 hover:bg-transparent" to="/feedback">
          <span className="flex items-center gap-2">
            <MdHowToVote />
            Feedback
          </span>
        </NavLink>
      </li>
      <li className="relative overflow-hidden group mx-px">
        <span className="absolute left-0 bottom-0 h-1 bg-yellow-500 w-0 z-0 p-0 group-hover:w-full transition-all duration-500 "></span>{" "}
        <NavLink className="z-10 hover:bg-transparent" to="/join-us">
          <span className="flex items-center gap-2">
            <RiGroup2Fill />
            Join Us
          </span>
        </NavLink>
      </li>
      <li className="relative overflow-hidden group mx-px">
        <span className="absolute left-0 bottom-0 h-1 bg-yellow-500 w-0 z-0 p-0 group-hover:w-full transition-all duration-500 "></span>{" "}
        <NavLink className="z-10 hover:bg-transparent" to="/my-earnings">
          <span className="flex items-center gap-2">
            <TbCoinTakaFilled />
            My Earnings
          </span>
        </NavLink>
      </li>
      <li className="relative overflow-hidden group mx-px">
        <span className="absolute left-0 bottom-0 h-1 bg-yellow-500 w-0 z-0 p-0 group-hover:w-full transition-all duration-500 "></span>{" "}
        <NavLink className="z-10 hover:bg-transparent" to="/dashboard">
          <span className="flex items-center gap-2">
            <MdDashboardCustomize />
            Dash Board
          </span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow-sm md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl md:text-2xl font-bold bebas-neue-regular flex items-center gap-3">
            <span className="hidden md:block">
              <img
                src="/public/logo.png"
                className="max-w-12 rounded-full border-5 border-yellow-300"
              />
            </span>
            <LogoAnimation text={"NOTE LAB"}></LogoAnimation>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
