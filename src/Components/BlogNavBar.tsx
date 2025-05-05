import React from "react";
import { Link, NavLink } from "react-router-dom";
const BlogNavBar = () => {
  return (
    <>
    <nav className="m-5 mb-7 min-[1000px]:mb-12 w-[90vw] min-[1000px]:w-[85vw] p-[1rem] items-center rounded-lg flex justify-between mx-auto bg-[#FEFEFEB2] blog-nav-bar min-[1000px]:grid min-[1000px]:grid-cols-3 min-[1000px]:gap-2 min-[1000px]:relative">
        <div className="flex items-center gap-[2%] lg:justify-self-start">
          <img className="w-[48px] h-[48px]" src="public/icons/logo.svg" alt="" />
          <Link to="/" className=" font-nunito text-[1.15rem]">UserCanDo</Link>
        </div>
        <div className=" max[1000px]:hidden flex justify-center gap-20 items-center justify-self-center">
        <NavLink className="max-[1000px]:hidden hover:cursor-pointer hover:text-primary" to="">FAQ</NavLink>
        <NavLink className="max-[1000px]:hidden hover:cursor-pointer hover:text-primary" to="">Blog</NavLink>
        </div>
      
        <button className="max-[1000px]:hidden bg-primary w-[80%] xl:w-[50%] text-white rounded-[0.5rem] p-2 justify-self-end hover:cursor-pointer hover:brightness-90">Schedule Intro Call</button>
        <div className="min-[1000px]:hidden">
          <img className=" h-[32px] w-[32px]" src="public/icons/black-menu.png" alt="" />
        </div>
    </nav>
    <NavLink to="" className="max-[1000px]:hidden absolute top-12 left-7 w-[10vw] ml-0 bg-[#FBFEFD42] side-bar-shadow">
    <img className="mx-auto" src="public/icons/dashboard-square.png" alt="" />
    </NavLink>
    </>
    
        

  );
};

export default BlogNavBar;
