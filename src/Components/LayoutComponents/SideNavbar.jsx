import React from "react";
import "./Navbar.css";
import { AiFillFileAdd } from "react-icons/ai";
import { BsPersonVideo3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaFile, FaFileSignature, FaUsers } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import {
  MdAccountBalance,
  MdHowToVote,
  MdNoteAdd,
  MdOutlineSummarize,
} from "react-icons/md";
import { SiOpenaccess } from "react-icons/si";
import { TbHandStop } from "react-icons/tb";
import { NavLink } from "react-router";

const SideNavbar = () => {
  return (
    <>
      {/* <li>
        <NavLink className="" to="/dashboard/my-profile">
          <span className="flex items-center gap-2">
            <CgProfile />
            প্রোফাইল
          </span>
        </NavLink>
      </li> */}
      <li>
        <NavLink className="" to="/dashboard/my-files">
          <span className="flex items-center gap-2">
            <FaFileSignature />
            আমার ফাইলসমূহ
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/dashboard/syllabus">
          <span className="flex items-center gap-2">
            <MdOutlineSummarize />
            সিলেবাস
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/dashboard/subscription">
          <span className="flex items-center gap-2">
            <MdNoteAdd />
            সাবস্ক্রিপশন
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/dashboard/limits">
          <span className="flex items-center gap-2">
            <TbHandStop />
            লিমিটস
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/dashboard/tutorials">
          <span className="flex items-center gap-2">
            <BsPersonVideo3 />
            টিউটোরিয়াল
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/dashboard/all-files">
          <span className="flex items-center gap-2">
            <FaFile />
            সকল ফাইল
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/dashboard/add-files">
          <span className="flex items-center gap-2">
            <AiFillFileAdd />
            ফাইল যোগ
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/dashboard/grant-access">
          <span className="flex items-center gap-2">
            <SiOpenaccess />
            এক্সেস প্রদান
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/dashboard/all-users">
          <span className="flex items-center gap-2">
            <FaUsers />
            সকল ব্যবহারকারী
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/dashboard/view-feedbacks">
          <span className="flex items-center gap-2">
            <MdHowToVote />
            মতামতসমূহ
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/dashboard/expenses">
          <span className="flex items-center gap-2">
            <GiExpense />
            খরচ সমূহ
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/dashboard/Balance-Sheet">
          <span className="flex items-center gap-2">
            <MdAccountBalance />
            ব্যালেন্স শীট
          </span>
        </NavLink>
      </li>
    </>
  );
};

export default SideNavbar;
