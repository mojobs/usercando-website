import React from "react";
import LandingNavBar from "../Components/LandingNavBar";

const LandingPageHeader = () => {
  return (
    <>
      <header className="bg-[#17161A] w-[100%] h-[100%] pt-5 max-[1000px]:pb-10 min-[1000px]:pb-20 mb-10">
        <LandingNavBar />
        <div className="min-[1000px]:flex min-[1000px]:gap-5 min-[1000px]:items-start min-[1000px]:justify-between">
          <div className=" ml-5 mb-5 min-[1000px]:mx-auto min-[1000px]:mr-0 min-[1000px]:pl-15 min-[1400px]:pl-15 min-[1400px]:ml-13 ">
            <h1 className="text-[#BED6D9C9] font-roboto text-[1.2rem] max-[400px]:text-[0.85rem] text-left mb-3 min-[700px]:text-[1.5rem] min-[1000px]:text-[44px] min-[1000px]:leading-[110%] min-[1400px]:tracking-wide min-[1400px]:mb-5">
              UserCanDo business leaders <br className="max-[1000px]:hidden" /> that want to lead their <br className="max-[1000px]:hidden" /> industry:
            </h1>
            <ul className="ml-13 text-[#BED6D9C9] list-disc max-[400px]:text-[0.75rem] max-[500px]:ml-7 mb-3 font-open-sans min-[1400px]:text-[30px] min-[1400px]:tracking-wide min-[1400px]:mb-5">
              <li className="">document business processes</li>
              <li>centralize data</li>
              <li>build new product ideas quickly, and</li>
              <li>
                transform your business and continue <br className="max-[1400px]:hidden"/>transforming along with
                tech industy
              </li>
            </ul>
            <div className=" font-nunito flex gap-3 ml-13 max-[500px]:ml-7 w-[45%] min-[1400px]:w-[85%] min-[1400px]:p-1.5 overflow-hidden max-[400px]:text-[0.37rem] max-[550px]:text-[0.5rem] max-[650px]:text-[0.65rem] text-[0.7rem] min-[1400px]:text-[16px] min-[1400px]:ml-3 landing-page-btn-header rounded-[4px] min-[1400px]:rounded-[0.5rem] relative">
              <input
                type="text"
                placeholder="Enter email address"
                className="text-[#FAFAFA] px-1.5 py-0.5 max-[600px]:px-1 min-[1400px]:pl-7 min-[1400px]:text-[1rem]"
              />
              <button className="text-white bg-[#45DCBF] px-1.5 absolute top-0 right-0 max-[600px]:px-1 py-0.5 min-[1400px]:p-2.25 min-[1400px]:w-[40%] hover:cursor-pointer hover:brightness-90">
                Stay Up To Date
              </button>
            </div>
          </div>
          <div className="min-[1000px]:mr-30 font-nunito min-[1400px]:ml-0">
            <ul className="text-[0.65rem] text-white flex flex-col gap-2  min-[1400px]:gap-7  ml-7 max-[1000px]:text-[0.9rem] min-[1000px]:text-[1.5rem] min-[1000px]:ml-0">
              <li>
                <div className="flex items-center gap-1.5 min-[1400px]:gap-2.5">
                  <img
                    className="size-2.5 min-[1000px]:size-5 min-[1400px]:size-[2.5rem]"
                    src="public/icons/document.png"
                    alt=""
                  />
                  <div>
                    <h5 className="min-[1000px]:text-[24px]">Document</h5>
                    <p className="after:content-['>'] after:text-[#E6E6E6] after:ml-2.5 text-[0.4rem] max-[500px]:text-[0.5rem] max-[1000px]:text-[0.55rem] min-[1000px]:text-[0.75rem] min-[1400px]:text-[1rem] min-[1400px]:w-[70%]">
                      Docmuent Your Business Process
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-1.5 min-[1400px]:gap-3">
                  <img
                    className="size-2.5 min-[1000px]:size-5 min-[1400px]:size-[2.5rem]"
                    src="public/icons/centralize.png"
                    alt=""
                  />
                  <div>
                    <h5 className="min-[1000px]:text-[24px]">Centralize</h5>
                    <p className="after:content-['>'] after:text-[#E6E6E6] after:ml-2.5 text-[0.4rem] max-[500px]:text-[0.5rem]  max-[1000px]:text-[0.55rem]  min-[1000px]:text-[0.75rem] min-[1400px]:text-[1rem] min-[1400px]:w-[100%]">
                      Centralize Your Data
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-1.5 min-[1400px]:gap-3">
                  <img
                    className="size-2.5 min-[1000px]:size-5 min-[1400px]:size-[2.5rem]"
                    src="public/icons/quickStart.png"
                    alt=""
                  />
                  <div>
                    <h5 className="min-[1000px]:text-[24px]">Quick Start Build</h5>
                    <p className="after:content-['>'] after:text-[#E6E6E6] after:ml-2.5 text-[0.4rem] max-[500px]:text-[0.5rem]  max-[1000px]:text-[0.55rem]  min-[1000px]:text-[0.75rem] min-[1400px]:text-[1rem] min-[1400px]:w-[70%]">
                      Execute On Your New product Ideas
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-1.5 min-[1400px]:gap-3">
                  <img
                    className="size-2.5 min-[1000px]:size-5 min-[1400px]:size-[2.5rem]"
                    src="public/icons/digital-continuation.png"
                    alt=""
                  />
                  <div>
                    <h5 className="min-[1000px]:text-[24px]">Digital Continuation</h5>
                    <p className="after:content-['>'] after:text-[#E6E6E6] after:ml-2.5 text-[0.4rem] max-[500px]:text-[0.5rem] max-[1000px]:text-[0.55rem] min-[1000px]:text-[0.75rem] min-[1400px]:text-[1rem] min-[1400px]:w-[100%]">
                      AI Digital Transformation
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingPageHeader;
