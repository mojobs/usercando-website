import React from 'react'
interface Question{
  question : string;
  text : string;
}
interface MyQuetionProps {
 questionData : Question[];
}

const FrequentlyAskedQuestion = ({questionData}: MyQuetionProps) => {


  return (
    <div className='text-primary w-[1006px]'>
      {questionData.map((data)=> (
        <div className='mb-10 ml-65'>
        <h2>{data.question}</h2>
        <p className='none'>{data.text}</p>
        </div>
      ))}
    <p></p>
    </div>
  )
}

export default FrequentlyAskedQuestion