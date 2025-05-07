import React, { useState } from 'react'
import FrequentlyAskedQuestion from './FrequentlyAskedQuestion'

const LandingHero = () => {
  const [isOpen, setIsOpen] = useState<number|null>();

  const toggleItem = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

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
  return (
    <>
     <FrequentlyAskedQuestion
              isToggled = {isOpen}
              questionData={frequentlyAskedQuestionsData}  toggle = {toggleItem}
            />
    </>
  )
}

export default LandingHero