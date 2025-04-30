import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between p-7 mr-15 items-center">
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
        <div className=" text-white flex gap-5 items-center">
          <a href="">Home</a>
          <a href="">How it Works</a>
          <a href="">Pricing</a>
          <a href="">FAQ</a>
          <a href="">Blog</a>
          <button className="bg-primary text-black rounded-[24px] py-[12px] px-[60px] :hover cursor-pointer">
            Try for Free
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
