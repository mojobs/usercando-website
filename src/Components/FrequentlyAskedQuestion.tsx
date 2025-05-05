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
    <div className="max-w-5xl mx-auto">
      {questionData.map((data, index) => (
        <div className="mb-10 :hover cursor-pointer relative" key={index}>
          <h2 className="text-primary " onClick={() => toggle(index)}>{data.question}</h2><span className="absolute -top-3 right-20"><img src={isToggled === index ? 'public/icons/remove-circle.png' : 'public/icons/add-circle.png'} alt="" /></span>
          {isToggled === index && <p className="text-[18px] font-nunito font-[400px] mt-5">{data.text}</p>}
        </div>
      ))}
      <p></p>
    </div>
  );
};

export default FrequentlyAskedQuestion;
