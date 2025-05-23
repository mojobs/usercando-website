
import { Link } from "react-router-dom";

const NewHeader = () => {
  return (
    <>
      <header className="bg-background min-[600px]:px-5 sm:mb-5 min-[1400px]:mb-20">
        <div className="">
          <nav className="flex items-center gap-20 p-2.5 mx-auto mb-2.5 min-[350px]:gap-30 justify-between min-[1000px]:p-5 min-[1000px]:pl-10 min-[1400px]:px-20 min-[1400px]:mb-15">
            <div className="flex gap-2 items-center justify-self-start">
              <img className="max-[400px]:size-8 2min-[1400px]:size-20" src="/icons/logo.svg" alt="" />
              <p className="text-white text-[1rem] min-[1400px]:text-[1.25rem] 2min-[1400px]:text-[3rem]">UserCanDo</p>
            </div>
            <div className="justify-self-end min-[1000px]:hidden">
              <img
                className="size-7"
                src="/icons/icons-menu-50.svg"
                alt=""
              />
            </div>
            <div className=" max-[1000px]:hidden font-nunito font-[400px] text-[#F0FDF9] flex gap-5 items-center text-[1rem] min-[1400px]:text-[1.25rem] 2min-[1400px]:text-[2rem]">
              <Link to="/">Home</Link>
              <Link to="/landing">How it Works</Link>
              <Link to="">Pricing</Link>
              <a href="">FAQ</a>
              <Link to="/blog">Blog</Link>
              <button className="bg-primary text-black rounded-[20px] py-[10px] px-[40px] hover:cursor-pointer hover:brightness-90 min-[1400px]:text-[1.25rem] min-[1400px]:py-[0.75rem] min-[1400px]:px-[3.75rem] min-[1400px]:rounded-[1.5rem] 2min-[1400px]:text-[2rem] 2min-[1400px]:rounded-4xl">
                Try for Free
              </button>
            </div>
          </nav>
          <div className="px-5 line-height-letter-spacing mb-2.5 min-[1000px]:pl-10 min-[1000px]:mb-5 min-[1400px]:px-20">
            <h4 className="text-[#45DCBF] font-nunito font-[400]  text-[0.5rem] mb-1 leading-normal pr-5  min-[1000px]:text-[0.8rem] min-[1000px]:mb-2.5 min-[1400px]:text-[1.125rem] min-[1400px]:mb-[0.75rem] 2min-[1400px]:text-[2rem]">
              Action Intelligence Understand key business actions before
              implementing AI and Automation.
            </h4>
            <h1 className="text-white font-lato font-[700] text-[0.9rem] mb-1  pr-5 min-[1000px]:text-[2.25rem] min-[1000px]:font-[700] min-[1000px]:leading-[120%] min-[1000px]:tracking-[0%] min-[1000px]:mb-4 min-[1400px]:text-[2.813rem] min-[1400px]:mb-[1.125rem] 2min-[1400px]:text-[3.5rem] min-[640px]:text-[1.2rem] min-[600px]:leading-none">
              Achieve Action Intelligence: The Essential <br /> Precursor to AI
              Transformation
            </h1>
            <h2 className="font-nunito font-[400] text-[#45DCBF] text-[0.65rem] pr-5 min-[1000px]:text-[1rem] min-[1400px]:text-[1.563rem] min-[1400px]:mb-[1.563rem] 2min-[1400px]:text-[2.5rem] 2min-[1400px]:mb-15">
              From Operating in the Dark to Full visibility of your Daily
              Business Actions
            </h2>
          </div>
          <div className="font-nunito font-[500] text-[0.5rem] px-5 pb-5 relative min-[1000px]:text-[1rem] min-[1000px]:pl-10 min-[1000px]:pb-12 min-[1400px]:px-20 min-[1400px]:pb-25">
            <button className="bg-[#45DCBF] font-[500] px-2 py-1 rounded-2xl min-[1000px]:px-10 min-[1000px]:py-2 hover:cursor-pointer hover:brightness-90 min-[1400px]:text-[1.25rem] min-[1400px]:py-[0.75rem] min-[1400px]:px-[3.75rem] min-[1400px]:rounded-[24px] 2min-[1400px]:text-[2rem] 2min-[1400px]:rounded-4xl" >
              Lets talk
            </button>
            <button className="ml-2.5 px-2 py-1 inline-block ">
              <Link className="text-white min-[1400px]:text-[1.25rem] font-[500] 2min-[1400px]:text-[2rem]" to="/howitworks">
                How It Works
              </Link>
            </button>
            <span className="inline-block absolute top-[5px] left-36 min-[1000px]:left-78 min-[1000px]:top-2 hover:cursor-pointer min-[1400px]:top-4 min-[1400px]:left-110 2min-[1400px]:left-140">
              <img
                className="size-2.5 min-[1000px]:size-6 2min-[1400px]:size-10"
                src="/icons/arrow-right.svg"
                alt=""
              />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default NewHeader;
