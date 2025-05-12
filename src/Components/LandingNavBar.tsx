
import { Link, NavLink } from 'react-router-dom'

const LandingNavBar = () => {
  return (
    <>
         <nav className=" mb-7 min-[1000px]:mb-12 w-[90vw] min-[1000px]:w-[85vw] p-[1rem] items-center rounded-lg flex justify-between mx-auto bg-[#2B2B2BB2] landing-page-nav  min-[1000px]:grid min-[1000px]:grid-cols-3 min-[1000px]:gap-2 min-[1000px]:relative">
        <div className="flex items-center gap-[2%] lg:justify-self-start">
          <img className="w-[48px] h-[48px]" src="/icons/logo.svg" alt="" />
          <Link to="/" className=" font-nunito text-[1.15rem] text-[#F0FDF9]">UserCanDo</Link>
        </div>
        <div className=" max[1000px]:hidden flex justify-center gap-20 items-center justify-self-center text-white">
        <NavLink className="max-[1000px]:hidden hover:cursor-pointer hover:text-primary" to="">FAQ</NavLink>
        <NavLink className="max-[1000px]:hidden hover:cursor-pointer hover:text-primary" to="">Blog</NavLink>
        </div>
      
        <button className="max-[1000px]:hidden bg-primary w-[80%] xl:w-[50%] text-white rounded-[0.5rem] p-2 justify-self-end hover:cursor-pointer hover:brightness-90">Schedule Intro Call</button>
        <div className="min-[1000px]:hidden">
          <img className=" h-[32px] w-[32px]" src="/icons/icons-menu-50.svg" alt="" />
        </div>
    </nav></>
  )
}

export default LandingNavBar