import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="bg-background h-90 w-screen">
        <div className="ml-10">
        <NavBar/>
        <div>
          <h3 className="text-primary text-sm">
            Action Intelligence Understand key business actions before
            implementing AI and Automation.
          </h3>
          <h1 className="text-white text-4xl mt-1.5">
            Achieve Action Intelligence: The Essential Precursor <br/> to AI
            Transformation
          </h1>
          <h3 className="text-primary mt-0.5">
            From Operating in the Dark to Full visibility of your Daily
            Business Actions.
          </h3>
          <div className="mt-2.5" >
            <button className="bg-primary text-black rounded-[24px] py-[12px] px-[60px] mr-5 :hover cursor-pointer">
              Let's Talk
            </button>
            <button className="text-white :hover cursor-pointer"> How it works</button>
          </div>
        </div>
        </div>
      </header>
    </>
  );
};


export default Header;

