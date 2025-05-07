import React from 'react'
import { Link } from 'react-router-dom'

const NewHeader = () => {
  return (
    <>
    <header className="bg-background">
        <div className='relative'>
            <nav className='flex items-center gap-20 p-2.5 mx-auto mb-2.5 min-[350px]:gap-30 justify-between'>
                <div className='flex gap-2 items-center justify-self-start'>
                    <img className='' src="public/icons/logo.svg" alt="" />
                    <p className='text-white text-[1rem]'>UserCanDo</p>
                </div>
                <div className='justify-self-end'>
                    <img className='size-7' src="public/icons/icons-menu-50.svg" alt="" />
                </div>
            </nav>
            <div className='px-5 line-height-letter-spacing mb-2.5'>
                <h4 className='text-[#45DCBF] font-nunito text-[0.5rem] mb-1 leading-normal  pr-5'>Action Intelligence Understand key business actions before
                implementing AI and Automation.</h4>
                <h1 className='text-white font-lato text-[0.9rem] mb-1  pr-5'>Achieve Action Intelligence: The Essential <br/> Precursor to AI
                Transformation</h1>
                <h2 className='font-nunito text-[#45DCBF] text-[0.65rem] pr-5'>From Operating in the Dark to Full visibility of your Daily
                Business Actions</h2>
            </div>
            <div className='font-nunito text-[0.5rem] px-5 pb-2.5 relative'>
                <button className='bg-[#45DCBF] px-2 py-1 rounded-2xl'>Let's Talk</button>
                <button className='ml-2.5 px-2 py-1 inline-block'><Link className='text-white' to="/howitworks">How It Works</Link></button><span className='inline-block absolute top-[5px] left-36'><img className='size-2.5' src="public/icons/arrow-right.svg" alt="" /></span>
            </div>
        </div>
        </header></>
  )
}

export default NewHeader