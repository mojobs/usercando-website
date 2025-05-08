import React, { useState } from "react";

const NewHero = () => {
  const [isToggled, setIsToggled] = useState<number | null>();

  const toggleItem = (index: number)=> {
    setIsToggled(isToggled === index ? null : index);
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
  return (
    <>
      <div className="p-5 min-[600px]:flex min-[600px]:items-start min-[600px]:mx-auto min-[600px]:flex-row">
        <div className="mb-10 min-[600px]:w-[50%] sm:ml-7 lg:pl-10 2xl:ml-30">
          <h1 className="font-lato font-[500] text-[0.75rem] text-[#03302C] mb-5 text-center min-[600px]:text-left min-[600px]:text-[1rem] sm:mt-5 lg:text-[1.25rem] xl:text-[1.875rem] xl:mb-12 2xl:text-[3.5rem]">
            5 Levels of Action Awareness
          </h1>
          <div className="min-[600px]:h-[30vh]">
          <div className="flex h-[100px] min-[600px]:h-[80%] lg:h-[85%] xl:h-[120%] ">
            <div className="h-[100%] w-[1%] rounded-[10px] flex flex-col justify-between">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`h-[25%] min-[600px]:h-[50%] w-full transition-all duration-300 ${
                    i === isToggled ? "bg-[#45DCBF]" : "bg-[#ccc]"
                  }`}
                ></span>
              ))}
            </div>
            <ul className="flex flex-col gap-4 w-[100vw] text-primary-text ml-5 min-[600px]:gap-6 lg:gap-5 xl:gap-[2.3rem] 2xl:gap-[4rem]">
              {firstListItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div
                    className={`text-[0.5rem] font-lato font-[500px] flex justify-start items-center min-[600px]:text-[0.75rem] lg:text-[0.938rem] xl:text-[1.25rem] 2xl:text-[2.5rem] hover:text-primary ${
                      index === isToggled ? "text-[#45DCBF]" : "text-[#03302C]"
                    }`}
                  >
                    <span>{item.title}</span>
                  </div>
                  {isToggled === index && (
                    <p className="text-[0.4rem] text-[black] text-left min-[600px]:text-[0.65rem] lg:text-[0.75rem] lg:w-[80%] xl:text-[1.125rem] 2xl:text-[1.5rem]">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
        <div className="size-30 min-[600px]:size-45 md:size-50 lg:size-70 xl:size-93 2xl:size-150 mx-auto sm:ml-7 text-center flex -translate-x-[25%] relative">
            <img className="size-[80%] min-[600px]:w-[80%] min-[600px]:h-[60%] xl:h-[65%] rounded-lg min-[600px]:rounded-4xl xl:rounded-[2.813rem] absolute shadow-md shadow-black object-cover" src="public/images/neuralImage.png" alt="" />
            <img className="size-[80%] min-[600px]:w-[90%] min-[600px]:h-[80%] xl:h-[82%] xl:w-[100%] rounded-lg min-[600px]:rounded-4xl xl:rounded-[2.813rem] relative top-[25%] left-[50%] min-[600px]:top-[30%] border-2 border-primary object-cover" src="public/images/statiticsImage.png" alt="" />
                  
        </div>
      </div>
    </>
  );
};

export default NewHero;
