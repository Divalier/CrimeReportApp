import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Outlet, NavLink, Link } from "react-router-dom";
function Navbar2() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between py-4 px-3 items-center shadow-lg">
      <div className="">
        <button className="font-bold text-xl">Home</button>
      </div>
      <div className="">
        <button className="text-xl text-[#377D97] font-bold">
          CRIME REPORT SYSTEM
        </button>
      </div>
      <div className="">
        <NavLink to="/report">
          <button className="rounded-full px-3 py-3 bg-[#377D97] w-[350px] text-white text-xl">
            Report a crime
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar2;
