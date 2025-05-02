import React, { useState } from "react";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";

const Hero = () => {
  const [isOpen, setIsOpen] = useState<number | null>();
  // const [isHovered, setisHovered] = useState<boolean>();
  const toggleItem = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const listItems = [
    {
      title: "IDENTIFICATION AND DOCUMENTATION",
      description:
        "Make a list of the key processes in your business and the actions that make them up.",
    },
    {
      title: "CENTRALIZATION",
      description: "Bring all documentation into a centralized system.",
    },
    {
      title: "ANALYSIS",
      description: "Analyze your data to find inefficiencies and trends.",
    },
    {
      title: "OPTIMIZATION",
      description: "Streamline your processes based on insights.",
    },
  ];
  const frequentlyAskedQuestionsData = [
    {
      question: "Is Documenting Everything Tedious?",
      text: "",
      // text: "Documenting everything can be tedious, but it is crucial for clarity, consistency and accountability. It helps track progress, ensures effective communication, aids in problem-solving and meets compliance and industry standards. Despite being time-consuming, good communication, aids in problem-solving and meets compliance and industry standards. Despite being time-consuming, good documentation can prevent misunderstandings and mistakes, saving time and effort in the long run.",
    },
    {
      question: "What are the Costs?",
      text: "",
    },
    {
      question: "What Defines An Action?",
      text: "",
    },
    {
      question: "What Constitutes An Event?",
      text: "",
    },
    {
      question: "How Do You Collect Events And Data Attributes?",
      text: "",
    },
    {
      question: "How Does This Integrate With Project Management Tools?",
      text: "",
    },
    {
      question: "Can I Integrate With Project Management Tools?",
      text: "",
    },
    {
      question: "What Does Your Consultinf Involve?",
      text: "",
    },
  ];

  return (
    <>
      <main>
        <div className="ml-35 mb-40 mt-20">
          <h2 className="text-[30px] mb-10">5 Levels of Action Awareness</h2>
          <div className="flex">
            <ul className="flex flex-col gap-3 w-[492px] text-primary-text ml-5">
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="mb-5 cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex justify-between items-center hover:text-primary">
                    <span>{item.title}</span>
                  </div>
                  {isOpen === index && (
                    <p className="text-sm mt-2 text-gray-600">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex relative">
              <img
                className="w-[292px] h-[234px] rounded-4xl absolute shadow-md shadow-black"
                src="public/images/neuralImage.png"
                alt=""
              />
              <img
                className="w-[377px] h-[303px] relative left-50 top-20 rounded-4xl border-2 border-primary"
                src="public/images/statiticsImage.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hero-background h-[214px] text-center">
          <h2 className=" text-white p-10 pt-15 pb-5 text-xl">
            Don't Put the Cart before the Horse: Become Action Aware Before
            Diving into AI
          </h2>
          <button className="bg-primary text-black rounded-[24px] py-[12px] px-[75px]">
            Let's Talk
          </button>
        </div>
        <section id="how-it-works">
          <div className="mb-28">
            <h1 className="text-hero text-center pt-25 text-3xl mb-10">
              How it works
            </h1>
            <div className="flex flex-row justify-center items-center gap-65">
              <div className="flex gap-9 ml-30 relative">
                <img
                  className="absolute"
                  src="public/images/blankImage.png"
                  alt=""
                />
                <img
                  className="relative left-30 top-10"
                  src="public/images/blankImage.png"
                  alt=""
                />
              </div>
              <ul className="flex flex-col gap-3 w-[492px] text-secondary-text text-xl">
                <li className="mb-5">DOCUMENTATION</li>
                <li className="mb-5">CENTRALIZE</li>
                <li>OPTIMIZE</li>
              </ul>
            </div>
          </div>
          <div className="text-center mb-60">
            <h3 className="text-hero pb-5">
              White-glove Onboarding and Consulting Services avaialble.
            </h3>
            <a className="text-primary" href="">
              Learn More
            </a>
          </div>
        </section>
        <section className="mb-32">
          <div>
            <h1 className="text-hero text-2xl font-bold mb-20 text-center">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <FrequentlyAskedQuestion
              questionData={frequentlyAskedQuestionsData}
            />
          </div>
        </section>
        <section id="card-section" className="mb-30">
          <div className="text-center mb-7">
            <h1 className="text-3xl mb-7">Achieve your business objectives</h1>
            <p className="mb-7">
              Choose a plan that's best for you and start your digital
              transformation <br /> journey today!
            </p>
            <button className="mb-10 text-primary bg-white rounded-[24px] py-[12px] px-[40px] border-1 border-black :hover cursor-pointer">
              View detailed pricing
            </button>
          </div>
          <div className="w-[770px] h-[1089px] m-auto grid grid-cols-2 grid-rows-2 gap-[50px]">
            <div className="pt-[59px] rounded-2xl text-center bg-white grid-box-shadow">
              <h2 className="text-[21px] mb-8">Free</h2>
              <ul className=" text-[14px] mb-20 text-left ml-7">
                <div className="flex w-[240px] gap-[15px]">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Basic Process Documentation</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5"> Data Capture and Storage</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Access to core automation tools</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Monthly Performance reports</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Email Support</li>
                </div>
              </ul>
              <button className=" text-[18px] w-[150px] h-[45px] mb-10 text-black bg-white rounded-[24px] py-[10px] px-[30px] border-1 border-black :hover cursor-pointer">
                Contact Us
              </button>
            </div>
            <div className="pt-[59px] rounded-2xl text-center bg-white grid-box-shadow">
              <div id="header-text" className="mb-7">
                <h2 className="text-[21px] mb-0 ">Starter</h2>
                <h1 className="text-[35px] font-bold">$99/Mth</h1>
              </div>
              <ul className=" text-[14px] mb-9 text-left ml-7">
                <div className="flex w-[240px] gap-[15px]">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Basic Process Documentation</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5"> Data Capture and Storage</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Access to core automation tools</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Monthly Performance reports</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Email Support</li>
                </div>
              </ul>
              <button className=" text-[18px] w-[150px] h-[45px] mb-10 text-black bg-white rounded-[24px] py-[10px] px-[30px] border-1 border-black :hover cursor-pointer">
                Contact Us
              </button>
            </div>
            <div className="pt-[59px] rounded-2xl text-center bg-white grid-box-shadow">
              <div id="header-text" className="mb-7">
                <h2 className="text-[21px] mb-0 ">Pro</h2>
                <h1 className="text-[35px] font-bold">$99/Mth</h1>
              </div>
              <ul className=" text-[14px] mb-9 text-left ml-7">
                <div className="flex w-[240px] gap-[15px]">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Basic Process Documentation</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5"> Data Capture and Storage</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Access to core automation tools</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Monthly Performance reports</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Email Support</li>
                </div>
              </ul>
              <button className=" text-[18px] w-[150px] h-[45px] mb-10 text-black bg-white rounded-[24px] py-[10px] px-[30px] border-1 border-black :hover cursor-pointer">
                Contact Us
              </button>
            </div>
            <div className="pt-[59px] rounded-2xl text-center bg-white grid-box-shadow">
              <div id="header-text" className="mb-7">
                <h2 className="text-[21px] mb-0 ">Enterprise</h2>
                <h1 className="text-[35px] font-bold">$99/Mth</h1>
              </div>
              <ul className=" text-[14px] mb-9 text-left ml-7">
                <div className="flex w-[240px] gap-[15px]">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Basic Process Documentation</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5"> Data Capture and Storage</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Access to core automation tools</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Monthly Performance reports</li>
                </div>
                <div className="flex w-[240px] gap-[15px] ">
                  <img
                    src="public/icons/checkmark.svg"
                    alt=""
                    className="h-[24px]"
                  />
                  <li className="mb-5">Email Support</li>
                </div>
              </ul>
              <button className=" text-[18px] w-[150px] h-[45px] mb-10 text-black bg-white rounded-[24px] py-[10px] px-[30px] border-1 border-black :hover cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
        </section>
        <section id="updates-section" className="mb-15">
          <div className="text-center">
            <h1 className="text-[30px] mb-20">
              Stay updated with the latest trends, tips and success stories
            </h1>
            <div className="flex justify-center align-center mx-auto gap-[24px] mb-15">
              <div className="w-[286px] h-[366px] rounded-2xl overflow-hidden flex-box-shadow">
                <img
                  className="w-[295px] h-[206px] mb-3 object-cover"
                  src="public/images/lightbulb-image.png"
                  alt=""
                />
                <div className="pl-[30px] text-left">
                  <p className="text-[16px] mb-6 ">
                    The benefits of Digital
                    <br />
                    Transformation for Small
                    <br />
                    Businesses
                  </p>
                  <div className="flex gap-1.5">
                    
                    <a className="text-primary text-[16px]" href="">
                      Read more
                    </a>
                    <img src="public/icons/link-square.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="w-[286px] h-[366px] rounded-2xl flex-box-shadow overflow-hidden">
                <img
                  className="w-[295px] h-[206px] mb-3 object-cover"
                  src="public/images/clipboard-image.png"
                  alt=""
                />
                <div className="pl-[30px] text-left">
                  <p className="text-[16px] mb-6 ">
                    5 Common Pitfalls in Digital
                    <br />
                    Transformation and How to
                    <br />
                    Avoid Them
                  </p>
                  <div className="flex gap-1.5">
                    
                    <a className="text-primary text-[16px]" href="">
                      Read more
                    </a>
                    <img src="public/icons/link-square.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="w-[286px] h-[366px] rounded-2xl flex-box-shadow overflow-hidden">
                <img
                  className="w-[295px] h-[206px] mb-3 object-cover"
                  src="public/images/blockchain-image.png"
                  alt=""
                />
                <div className="pl-[30px] text-left">
                  <p className="text-[16px] mb-6 ">
                    How to Choose the Right
                    <br />
                    Digital Transformation Tools for
                    <br />
                     Your Businesses
                  </p>
                  <div className="flex gap-1.5">
                    
                    <a className="text-primary text-[16px]" href="">
                      Read more
                    </a>
                    <img src="public/icons/link-square.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="w-[286px] h-[366px] rounded-2xl flex-box-shadow overflow-hidden">
                <img
                  className="w-[295px] h-[206px] mb-3 object-cover"
                  src="public/images/brain-image.png"
                  alt=""
                />
                <div className="pl-[30px] text-left">
                  <p className="text-[16px] mb-6 ">
                    The Importance Of Stakeholder
                    <br />
                    Engagement in Digital 
                    <br />
                   Transformation
                  </p>
                  <div className="flex gap-1.5">
                    
                    <a className="text-primary text-[16px]" href="">
                      Read more
                    </a>
                    <img src="public/icons/link-square.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <button className="mb-10 text-primary text-[18px] bg-white rounded-[24px] py-[10px] px-[30px] border-[0.5px] border-black :hover cursor-pointer">See all resources</button>
          </div>
        </section>
              <section id="next-step-sction" className="mb-50">
                <div className="text-center">
                  <h1 className="text-[30px] mb-10">Ready To Take The Next Step?</h1>
                  <div className="stay-updated-box w-[700px] m-auto text-left px-[75px] pb-[50px] rounded-[25px]">
                    <h2 className="pt-[97px] text-[20px] mb-2 font-[400px]">Stay Up to date</h2>
                    <p className="text-[16px] text-[#999999] mb-5" >Get the latest research, industry insights, and product news delivered straight to your inbox.</p>
                    <div className= "rounded-[24px] w-[504px] border-[1px] border-[#C3C3C3] overflow-hidden">
                      <input className="w-[302px] pl-[35px] text-[16px] text-[#999999]" type="email" placeholder="Enter Email Address" /> 
                      <button className="text-center text-[#17161A] font-[500px] text-[18px] py-[10px] px-[30px] bg-[#45DCBF] w-[200.2px]" type="submit">Subscribe</button>
                    </div>
                  </div>
                </div>
              </section>
  
      </main>
    </>
  );
};
export default Hero;
