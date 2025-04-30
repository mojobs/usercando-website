import React, { useState } from "react";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";

const Hero = () => {
  const [isHovered, setisHovered] = useState<boolean>();
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
            <ul className="flex flex-col gap-3 w-[492px]  text-primary-text ml-5 ">
              <li
                id="paragraph-item"
                className="mb-5 hover:text-primary cursor-pointer"
                onMouseEnter={() => setisHovered(true)}
                onMouseLeave={() => setisHovered(false)}
              >
                IDENTIFICATION AND DOCUMENTATION
              </li>
              {isHovered == true ? (
                <p className="text-sm">
                  Make a list of the key processes in your business and the
                  actions that make them up
                </p>
              ) : null}
              <li className="mb-5">IDENTIFICATION AND DOCUMENTATION </li>
              <li className="mb-5">CENTRALIZATION</li>
              <li className="mb-5">ANALYSIS</li>
              <li>OPTIMIZATION</li>
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
        <section>
          <div>
            <h1 className="text-hero text-2xl font-bold mb-20 text-center">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <FrequentlyAskedQuestion
              questionData={frequentlyAskedQuestionsData}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
