import React, { useState } from "react";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";

const NewHero = () => {
  const [firstToggled, setFirstToggled] = useState<number | null>(null);
  const [secondToggled, setSecondToggled] = useState<number | null>(null);
  const [frequentlyAskedQuestionIndex, setFrequentlyAskedQuestionIndex] =
    useState<number | null>(null);

  const toggleFirstList = (index: number) => {
    setFirstToggled(firstToggled === index ? null : index);
  };

  const toggleSecondList = (index: number) => {
    setSecondToggled(secondToggled === index ? null : index);
  };
  const toggleFrequentlyAskedQuestions = (index: number) => {
    setFrequentlyAskedQuestionIndex(
      frequentlyAskedQuestionIndex === index ? null : index
    );
  };

  const firstListItems = [
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
  const secondListItems = [
    {
      id: 1,
      title: "DOCUMENTATION",
      description:
        "Easy-to-use tool for bottom-up process and action documentation.",
    },
    {
      id: 2,
      title: "CENTRALIZE",
      description:
        "Easy-to-use tool for bottom-up process and action documentation.",
    },
    {
      id: 3,
      title: "OPTIMIZE",
      description:
        "Easy-to-use tool for bottom-up process and action documentation.",
    },
  ];
  const frequentlyAskedQuestionsData = [
    {
      question: "Is Documenting Everything Tedious?",
      text: "Documenting everything can be tedious, but it is crucial for clarity, consistency and accountability. It helps track progress, ensures effective communication, aids in problem-solving and meets compliance and industry standards. Despite being time-consuming, good communication, aids in problem-solving and meets compliance and industry standards. Despite being time-consuming, good documentation can prevent misunderstandings and mistakes, saving time and effort in the long run.",
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
  const smallGridPostsData = [
    {
      index: 1,
      image: "public/images/lightbulb-image.png",
      text: "The Benefits of Digital Transformation for Small Businesses",
    },
    {
      index: 2,
      image: "public/images/clipboard-image.png",
      text: "5 Common Pitfalls in Digital Transformation and How to Avoid Them",
    },
    {
      index: 3,
      image: "public/images/brain-image.png",
      text: "How to Choose the Right Digital Transformation Tools for Your Business",
    },
    {
      index: 4,
      image: "public/images/blockchain-image.png",
      text: "The Importance of Stakeholder Engagement in Digital Transformation",
    },
  ];
  return (
    <>
      <section className="mb-5 lg:mb-15">
        <div className="p-5 min-[600px]:flex min-[600px]:items-start min-[600px]:mx-auto min-[600px]:flex-row min-[1400px]:mb-20">
          <div className="mb-10 min-[600px]:w-[50%] sm:ml-7 lg:pl-10 2min-[1400px]:ml-30">
            <h1 className="font-lato font-[500] text-[0.75rem] text-[#03302C] mb-5 text-center min-[600px]:text-left min-[600px]:text-[1rem] sm:mt-5 lg:text-[1.25rem] min-[1400px]:mb-12 xl:text-[1.875rem]">
              5 Levels of Action Awareness
            </h1>
            <div className="min-[600px]:h-[30vh] 2min-[1400px]:mb-10">
              <div className="flex h-[100px] min-[600px]:h-[80%] lg:h-[85%] xl:h-[115%]">
                <div className="h-[100%] w-[1%] rounded-[10px] flex flex-col justify-between">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className={`h-[25%] min-[600px]:h-[50%] w-full transition-all duration-300 ${
                        i === firstToggled ? "bg-[#45DCBF]" : "bg-[#ccc]"
                      }`}
                    ></span>
                  ))}
                </div>
                <ul className="flex flex-col gap-4 w-[100vw] text-primary-text ml-5 min-[600px]:gap-6 lg:gap-5 xl:gap-[2.3rem]">
                  {firstListItems.map((item, index) => (
                    <li
                      key={index}
                      className="cursor-pointer"
                      onClick={() => toggleFirstList(index)}
                    >
                      <div
                        className={`text-[0.5rem] font-lato font-[500] flex justify-start items-center min-[600px]:text-[0.75rem] lg:text-[0.938rem] xl:text-[1.25rem] hover:text-primary ${
                          index === firstToggled
                            ? "text-[#45DCBF]"
                            : "text-[#03302C]"
                        }`}
                      >
                        <span>{item.title}</span>
                      </div>
                      {firstToggled === index && (
                        <p className="text-[0.4rem] text-[black] text-left min-[600px]:text-[0.65rem] lg:text-[0.75rem] lg:w-[80%] xl:text-[1.125rem]">
                          {item.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="size-30 min-[600px]:size-45 md:size-50 lg:size-70 xl:size-93 2xl-[1400px]:size-150 mx-auto sm:ml-7 text-center flex -translate-x-[25%] relative">
            <img
              className="size-[80%] min-[600px]:w-[80%] min-[600px]:h-[60%] xl:h-[65%] rounded-lg min-[600px]:rounded-4xl xl:rounded-[2.813rem] absolute shadow-md shadow-black object-cover"
              src="public/images/neuralImage.png"
              alt=""
            />
            <img
              className="size-[80%] min-[600px]:w-[90%] min-[600px]:h-[80%] xl:h-[82%] xl:w-[100%] rounded-lg min-[600px]:rounded-4xl min-[1400px]:rounded-[2.813rem] relative top-[25%] left-[50%] min-[600px]:top-[30%] border-2 border-primary object-cover"
              src="public/images/statiticsImage.png"
              alt=""
            />
          </div>
        </div>
        <div className="hero-background text-center p-2 pt-3 pb-4 md:p-6 xl:pb-[3.375rem]">
          <h3 className="text-[#F0FDF9] font-lato font-[500] mb-1 text-[0.6rem] min-[400px]:text-[0.8rem] md:text-[0.9rem] lg:text-[1.25rem] xl:text-[1.563rem] xl:pt-[3.375rem] xl:mb-[1.563rem]">
            Don't Put the Cart Before the Horse: Become Action Aware Before
            Diving into AI
          </h3>
          <button className="bg-primary text-[0.6rem]  min-[400px]:text-[0.8rem] lg:text-[1rem] lg:px-12 min-[400px]:px-7 sm:px-10  sm:py-1.5 px-5 py-0.5 rounded-2xl xl:text-[1.25rem] xl:px-[3.75rem] xl:py-[0.75rem] xl:rounded-[1.5rem]">
            Lets tallk
          </button>
        </div>
      </section>
      <section className="px-5 mb-10 xl:mb-25">
        <div className="mb-5">
          <h2 className="font-lato font-[500] text-[#03302C] mb-2 min-[400px]:mb-4 text-center text-[0.75rem] min-[400px]:text-[1rem] lg:text-[1.25rem] xl:text-[1.875rem] xl:mb-12">
            How it Works
          </h2>
          <div className="p-5 sm:flex sm:items-start sm:mx-auto sm:flex-row">
            <div className="size-30 relative mx-auto mb-7 -translate-x-[25%] sm:flex sm:size-45 lg:size-70 xl:size-93">
              <img
                className="size-[80%] absolute sm:w-[80%] sm:h-[60%] min-[1400px]:h-[65%] xl:w-[100%]"
                src="public/images/blankImage.png"
                alt=""
              />
              <img
                className="size-[80%] relative top-[25%] left-[50%] sm:w-[80%] sm:h-[60%] xl:h-[65%]  xl:w-[100%]"
                src="public/images/blankImage.png"
                alt=""
              />
            </div>
            <div className="min-[600px]:h-[30vh] sm:w-[50%] lg:w-[40%]">
              <div className="flex h-[100px] sm:h-[65%] sm:mt-5 lg:h-[85%] xl:h-[120%]">
                <div className="h-[100%] w-[1%] rounded-[10px] flex flex-col justify-between mb-10">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className={`h-[33.5%] min-[600px]:h-[50%] w-full transition-all duration-300 ${
                        i === secondToggled ? "bg-[#45DCBF]" : "bg-[#ccc]"
                      }`}
                    ></span>
                  ))}
                </div>
                <ul className="flex flex-col gap-7 w-[100vw] text-primary-text ml-5 sm:gap-7 lg:gap-10 xl:gap-20 ">
                  {secondListItems.map((item, index) => (
                    <li
                      key={index}
                      className="cursor-pointer"
                      onClick={() => toggleSecondList(index)}
                    >
                      <div
                        className={`text-[0.5rem] font-lato font-[500] flex justify-start items-center min-[600px]:text-[0.75rem] lg:text-[0.938rem] xl:text-[1.25rem] :hover:text-primary ${
                          index === secondToggled
                            ? "text-[#45DCBF]"
                            : "text-[#03302C]"
                        }`}
                      >
                        <span>{item.title}</span>
                      </div>
                      {secondToggled === index && (
                        <p className="text-[0.4rem] text-[black] text-left min-[600px]:text-[0.65rem] lg:text-[0.75rem] lg:w-[80%] xl:text-[1.125rem]">
                          {item.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-[0.6rem]">
          <h4 className="text-[#03302C] mb-1.5 font-lato font-[500] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.25rem]">
            {" "}
            White Glove on Boarding and consulting services available
          </h4>
          <p className="text-primary font-nunito font-[500] sm:text-[0.8rem] lg:text-[1rem] xl:text-[1.25rem]">
            Learn more
          </p>
        </div>
      </section>
      <section className="mb-20">
        <div>
          <h1 className="text-[#03302C] font-lato font-[500] text-[0.65rem] min-[400px]:text-[0.7rem] sm:text-[0.85rem] md:text-[1rem] lg:text-[1.2rem] mb-5 lg:mb-7 xl:text-[1.5rem] xl:mb-20 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <FrequentlyAskedQuestion
            isToggled={frequentlyAskedQuestionIndex}
            questionData={frequentlyAskedQuestionsData}
            toggle={toggleFrequentlyAskedQuestions}
          />
        </div>
      </section>
      <section className="mb-10">
        <div className="text-center px-5 min-[400px]:px-10 sm:px-25 md:px-30 lg:px-50 xl:px-90">
          <h1 className="font-lato font-[500] text-[#03302C] text-[0.65rem] min-[400px]:text-[0.7rem] min-[400px]:mb-1 sm:text-[0.85rem] md:text-[1rem] lg:text-[1.5rem] xl:text-[2.188rem]">
            Achieve Your Business Objectives
          </h1>
          <p className="text-[0.5rem] text-[#333333] min-[400px]:text-[0.6rem] min-[400px]:mb-1 sm:text-[0.8rem] sm:mb-2 md:text-[0.9rem] lg:text-[1.2rem] lg:mb-5 xl:text-[1.125rem]">
            Choose a plan that’s best for you and start your digital
            transformation <br className="max-[1400px]:hidden" /> journey today!
          </p>
          <button className="text-[0.55rem] min-[400px]:text-[0.6rem] text-[#45DCBF] view-detailed-pricing-btn rounded-[10px] px-2 py-0.5 min-[400px]:px-3 min-[400px]:py-1 sm:text-[0.75rem] sm:py-2 sm:px-3 sm:rounded-2xl md:text-[0.85rem] md:px-4 lg:text-[1rem] lg:px-7 lg:py-2 lg:rounded-3xl xl:text-[1.125rem] xl:py-[0.625rem] xl:px-[1.875rem] hover:brightness-[75%] hover:cursor-pointer">
            {" "}
            View Detailed Pricing
          </button>
        </div>
      </section>
      <section className="mb-10 xl:mb-30">
        <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:px-30 sm:gap-10 md:px-45 lg:px-65 lg:gap-x-3 xl:px-100 min-[1400px]:px-75">
          <div className=" bg-white grid-box-shadow text-center mx-auto rounded-2xl p-5 xl:p-10">
            <h2 className="font-lato font-[500] text-[0.65rem] mb-5 sm:text-[1rem] md:text-[1.2rem] xl:text-[1.25rem]">
              Free
            </h2>
            <ul className="font-nunito font-[400] text-[0.45rem] text-left mb-5 flex flex-col gap-3 sm:text-[0.5rem] sm:mb-11 md:text-[0.6rem] xl:text-[0.875rem] xl:gap-[1.125rem] xl:mb-[115px]">
              <li className="flex gap-3">
                <img
                  className="size-3 xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p> Basic Process Documentation</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3 xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Data Capture and Storage</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3 xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Access to Core automation Tools</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3 xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Monthly performance Reports</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3 xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Email Support</p>
              </li>
            </ul>
            <button className="font-nunito font-[500] text-[0.6rem] text-[#03302C] rounded-[10px] px-2 py-0.5 grid-btn-shadow sm:text-[0.65rem] sm:px-3 sm:py-1 sm:rounded-[20px] xl:px-[1.875rem] xl:py-[0.625rem] xl:text-[1.125rem] xl:rounded-[1.5rem]">
              Contact Us
            </button>
          </div>
          <div className=" bg-white grid-box-shadow text-center mx-auto rounded-2xl p-5 xl:p-10">
            <h2 className="font-lato font-[500] text-[0.65rem] mb-5 sm:text-[1rem] xl:text-[1.25rem]">
              Starter{" "}
              <h2 className="font-lato font-[700] sm:text-[1rem] md:text-[1.2rem] xl:text-[2.188rem]">
                $99/Mth
              </h2>
            </h2>
            <ul className="font-nunito font-[400] text-[0.45rem] text-left mb-5 flex flex-col gap-3 sm:text-[0.5rem] md:text-[0.6rem]  xl:text-[0.875rem] xl:gap-[1.125rem] xl:mb-[65px]">
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p> Basic Process Documentation</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Data Capture and Storage</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Access to Core automation Tools</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Monthly performance Reports</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Email Support</p>
              </li>
            </ul>
            <button className="font-nunito font-[500] text-[0.6rem] text-[#03302C] rounded-[10px] px-2 py-0.5 grid-btn-shadow sm:text-[0.65rem] sm:px-3 sm:py-1 sm:rounded-[20px] xl:px-[1.875rem] xl:py-[0.625rem] xl:text-[1.125rem] xl:rounded-[1.5rem]">
              Contact Us
            </button>
          </div>
          <div className=" bg-white grid-box-shadow text-center mx-auto rounded-2xl p-5 xl:p-10">
            <h2 className="font-lato font-[500] text-[0.65rem] mb-5 sm:text-[1rem] xl:text-[1.25rem]">
              Starter{" "}
              <h2 className="font-lato font-[700] sm:text-[1rem] md:text-[1.2rem] xl:text-[2.188rem]">
                $99/Mth
              </h2>
            </h2>
            <ul className="font-nunito font-[400] text-[0.45rem] text-left mb-5 flex flex-col gap-3 sm:text-[0.5rem] md:text-[0.6rem]  xl:text-[0.875rem] xl:gap-[1.125rem] xl:mb-[65px]">
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p> Basic Process Documentation</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Data Capture and Storage</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Access to Core automation Tools</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Monthly performance Reports</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Email Support</p>
              </li>
            </ul>
            <button className="font-nunito font-[500] text-[0.6rem] text-[#03302C] rounded-[10px] px-2 py-0.5 grid-btn-shadow sm:text-[0.65rem] sm:px-3 sm:py-1 sm:rounded-[20px] xl:px-[1.875rem] xl:py-[0.625rem] xl:text-[1.125rem] xl:rounded-[1.5rem]">
              Contact Us
            </button>
          </div>
          <div className=" bg-white grid-box-shadow text-center mx-auto rounded-2xl p-5 xl:p-10">
            <h2 className="font-lato font-[500] text-[0.65rem] mb-5 sm:text-[1rem] xl:text-[1.25rem]">
              Starter{" "}
              <h2 className="font-lato font-[700] sm:text-[1rem] md:text-[1.2rem] xl:text-[2.188rem]">
                $99/Mth
              </h2>
            </h2>
            <ul className="font-nunito font-[400] text-[0.45rem] text-left mb-5 flex flex-col gap-3 sm:text-[0.5rem] md:text-[0.6rem]  xl:text-[0.875rem] xl:gap-[1.125rem] xl:mb-[65px]">
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p> Basic Process Documentation</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Data Capture and Storage</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Access to Core automation Tools</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Monthly performance Reports</p>
              </li>
              <li className="flex gap-3">
                <img
                  className="size-3  xl:size-5"
                  src="public/icons/checkmark.svg"
                  alt=""
                />
                <p>Email Support</p>
              </li>
            </ul>
            <button className="font-nunito font-[500] text-[0.6rem] text-[#03302C] rounded-[10px] px-2 py-0.5 grid-btn-shadow sm:text-[0.65rem] sm:px-3 sm:py-1 sm:rounded-[20px] xl:px-[1.875rem] xl:py-[0.625rem] xl:text-[1.125rem] xl:rounded-[1.5rem]">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <section className="mb-10 xl:mb-20">
        <h1 className=" font-lato font-[500] text-[0.7rem] text-center mb-2.5 px-5 sm:text-[0.85rem] sm:mb-5 lg:text-[1rem] lg:mb-10 xl:text-[1.875rem]">
          Stay updated with the latest trends, tips, and success stories.
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 justify-items-center items-stretch content-center gap-2.5 px-5 mb-5 min-[400px]:px-10 sm:flex sm:flex-row sm:justify-between sm:items-stretch lg:px-30 lg:gap-5 xl:px-[100px] xl:gap-[2rem] xl:mb-10">
          {smallGridPostsData.map((data) => (
            <div className=" bg-[white] small-grid-btn-shadow justify-self-end rounded-2xl overflow-hidden sm:w-[100%] sm:h-auto xl:rounded-[1.563rem]">
              <img
                className="size-35 w-[100%] object-cover mb-2 xl:size-52.5 xl:w-[100%]"
                src={data.image}
                alt=""
              />
              <h5 className="font-nunito font-[400] text-[0.5rem] text-[#333333] px-[1.5rem] mb-2 sm:px-[1rem] sm:text-[0.55rem] md:text-[0.6rem] lg:text-[0.75rem] xl:text-[1rem] xl:ml-[1.5rem] xl:mb-7">
                {data.text}
              </h5>
              <div className="flex items-center gap-2 pl-[1.5rem] mb-2 sm:px-[1rem] xl:mb-5">
                <p className="text-primary font-nunito font-[400] text-[0.5rem] sm:text-[0.6rem] lg:text-[0.65rem] xl:text-[1rem] xl:ml-[1.5rem] hover:cursor-pointer">
                  Read more
                </p>
                <img
                  className="size-2 xl:size-4"
                  src="public/icons/link-square.svg"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        <button className="text-[#45DCBF] text-[0.6rem] ml-[50%] -translate-x-[50%] all-resources-btn rounded-2xl px-1 py-0.5 mb-10 sm:py-1.5 sm:px-3 md:text-[0.65rem] lg:text-[0.7rem] xl:text-[1.125rem] xl:px-[1.125rem] xl:rounded-[1.5rem] xl:py-[0.625rem] hover:cursor-pointer hover:bg-[whitesmoke]">
          See all resources
        </button>
      </section>
      <section className="px-5 min-[400px]:px-10 sm:px-25 md:px-40 lg:px-[17rem] mb-10 xl:px-[23.125rem]">
        <h1 className="font-lato font-[500] text-center text-[0.7rem] mb-2 min-[400px]:text-[0.85rem] md:text-[0.9rem] lg:text-[1rem] lg:mb-5 xl:text-[1.875rem]">Ready To Take The Next Step?</h1>
        <div className="stay-updated-box rounded-2xl p-5 pt-10 lg:p-10 lg:pt-15 lg:pb-5 xl:px-[4.7rem]">
          <h2 className="font-lato font-[400] text-[#17161A] text-[0.6rem] mb-1 min-[400px]:text-[0.7rem] md:text-[0.85rem] lg:text-[1rem] lg:mb-3 xl:text-[1.25rem] xl:mb-[0.75rem] "> Stay up to date.</h2>
          <p className="font-nunito font-[400] text-[#999999] text-[0.5rem] mb-1 md:text-[0.65rem] lg:text-[0.8rem] lg:mb-3 xl:text-[1rem]">Get the latest research, industry insights, and product news delivered straight to your inbox.</p>
          <div className="email-address-shadow rounded-lg flex-row inline-flex items-center gap-0 sm:rounded-2xl xl:rounded-[1.5rem]">
            <input className="font-nunito font-[400] text-[#999999] text-[0.5rem] justify-self-end px-2 sm:text-[0.6rem] md:text-[0.65rem] md:px-4 lg:text-[0.75rem] xl:text-[1rem] xl:py-[0.688rem] xl:px-[2.188rem]" type="text" name="" id="" placeholder="enter email address" />
            <button className="bg-[#45DCBF] text-[#17161A] font-nunito font-[500] text-[0.6rem] px-2 py-0.5 rounded-r-lg justify-self-start sm:px-3 sm:py-1 sm:rounded-r-2xl md:text-[0.65rem] md:px-4 lg:text-[0.7rem] xl:text-[1.125rem] xl:py-[0.625rem] xl:px-[4rem] xl:rounded-r-[1.5rem] hover:cursor-pointer hover:brightness-95">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewHero;
