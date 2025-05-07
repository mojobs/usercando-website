import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between pt-7 pl-15 mr-15 mb-10 items-center">
        <div className="flex gap-1.5">
          <img
            className="w-[49.5-px] h-[50.93-px]"
            src="public/icons/logo.svg"
            alt=""
          />
          <a className="text-white pt-3" href="">
            UserCanDo
          </a>
        </div>
        <div className="font-nunito font-[400px] text-[#F0FDF9] flex gap-5 items-center text-[20px] " >
          <a href="">Home</a>
          <Link to="/landing">How it Works</Link>
          <Link to="/pricing">Pricing</Link>
          <a href="">FAQ</a>
          <Link to="/blog">Blog</Link>
          <button className="bg-primary text-black rounded-[24px] py-[12px] px-[60px] :hover cursor-pointer">
            Try for Free
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
