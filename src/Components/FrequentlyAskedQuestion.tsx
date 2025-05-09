import React from "react";
interface Question {
  question: string;
  text: string;
}
interface MyQuetionProps {
  questionData: Question[];
  toggle(index: number|null): void;
  isToggled: number|null;
}

const FrequentlyAskedQuestion = ({
  questionData,
  toggle,
  isToggled,
}: MyQuetionProps) => {
  return (
    <div className=" ml-10 lg:ml-25 xl:max-w-5xl xl:mx-auto">
      {questionData.map((data, index) => (
        <div className="xl:mb-10 :hover cursor-pointer relative w-[100%]" key={index}>
          <h2 className="text-[#11BB9D] font-nunito font-[400] text-[0.5rem] min-[400px]:text-[0.6rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1.2rem] xl:text-[1.25rem] 2xl:text-[1.75rem] mb-2 lg:mb-4  w-[100%]" onClick={() => toggle(index)}>{data.question}</h2><span className="absolute top-0.5 right-10 min-[400px]:right-20 xl:-top-3 xl:right-20"><img className="size-2.5 sm:size-4 lg:size-6 2xl:size-8" src={isToggled === index ? 'public/icons/remove-circle.png' : 'public/icons/add-circle.png'} alt="" /></span>
          {isToggled === index && <p className=" text-[0.5rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[1rem] xl:text-[1.25rem] 2xl:text-[1.5rem] font-nunito font-[400] w-[80%] md:w-[87%] lg:w-[90%] xl:w-[90%] mb-2 md:mb-5 xl:mt-5">{data.text}</p>}
          <hr className="w-[85%] text-[#C3C3C3] mb-3 md:mb-4 lg:mb-5 md:w-[87%] lg:w-[90%] xl:w-[93%]" />
        </div>
      ))}
    </div>
  );
};

export default FrequentlyAskedQuestion;
