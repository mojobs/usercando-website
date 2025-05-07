import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="bg-background min-[1400px]:h-[531px] min-[1400px]:w-screen">
        <div className="ml-10">
        <NavBar/>
        <div className="pl-15 pt-7">
          <h3 className="text-primary text-[18px] font-nunito font-[400px] mb-3">
            Action Intelligence Understand key business actions before
            implementing AI and Automation.
          </h3>
          <h1 className="text-white text-[45px] mt-1.5 mb-5 font-lato font-[700px] leading-[115%] tracking-[0%]">
            Achieve Action Intelligence: The Essential <br/> Precursor to AI
            Transformation
          </h1>
          <h3 className="text-primary mt-0.5 font-nunito font-[400px] text-[25px] mb-5">
            From Operating in the Dark to Full visibility of your Daily
            Business Actions
          </h3>
          <div className="mt-2.5 relative" >
            <button className="bg-primary font-nunito font-[500px] text-[20px] text-black rounded-[24px] py-[12px] px-[60px] w-[220px] btn-shadow mr-5 hover:cursor-pointer hover:brightness-75">
              Let's talk
            </button>
            <button className="text-white :hover cursor-pointer p-[5] w-[215px] text-left"> How it works</button><span className="inline-block text-center absolute top-[15px] left-[355px] hover:cursor-pointer"><img src="public/icons/arrow-right.svg" alt="" /></span>
          </div>
        </div>
        </div>
      </header>
    </>
  );
};


export default Header;

