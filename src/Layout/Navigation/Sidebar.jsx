import { NavLink } from "react-router-dom";
import dashborad from '../../../Assests/dashboard.png'
import ProjectsPanel from '../../../Assests/project-management (1).png'
import OnGoing from '../../../Assests/OnGoingProject.png'
import Assests from '../../../Assests/AssetManager.png'
import Creative from '../../../Assests/project-management.png'
import Consultation from '../../../Assests/NewProject.png'
import Collaboration from '../../../Assests/CompletedProject.png'
import History from '../../../Assests/History.png'
import Upcoming from '../../../Assests/PendingProject.png'
import New from '../../../Assests/project-management.png'
import w from '../../../Assests/W_Word_Logo.png'
import { useState } from "react";


const Sidebar = () => {
    const [open, setOpen] = useState(false)
    return (
        <aside className='h-screen relative top-24  pl-3 bg-white border-r shadow-2xl '>
            <nav className='h-full flex flex-col items-center  '>
                <div onClick={() => setOpen(!open)} className="w-full cursor-pointer flex p-2 justify-end mt-2 mb-5">
                    <img className="w-[2.5vw]" src={w} alt="" />
                </div>
                <ul className={`flex  px-6  flex-col text-xl text-nowrap transition-all duration-700 overflow-hidden gap-5   items-start ${!open ? "w-0 " : "w-[18rem]"}`}>
                    <NavLink to='/' className={"flex justify-center gap-x-2 items-center"}><img className="w-[2rem]" src={dashborad} alt="" /> Dashboard</NavLink>
                    <NavLink to='/projectspanel' className={"flex justify-center gap-x-2 items-center"}><img className="w-[2rem]" src={ProjectsPanel} alt="" /> Projects Panel</NavLink>
                    <NavLink  to='/ongoingProjects' className={"flex justify-center gap-x-2 items-center"}><img className="w-[2rem]" src={OnGoing} alt="" /> On-going Projects</NavLink>
                    <NavLink to='/assetSection' className={"flex justify-center gap-x-2 items-center"}><img className="w-[2rem]" src={Assests} alt="" /> Asset Section</NavLink>
                    <NavLink className={"flex justify-center gap-x-2 items-center"}><img className="w-[2rem]" src={Creative} alt="" /> Creative Brust</NavLink>
                    <NavLink className={"flex justify-center gap-x-2 items-center"}><img className="w-[2rem]" src={Consultation} alt="" /> Consultation</NavLink>
                    <NavLink className={"flex justify-center gap-x-2 items-center"}><img className="w-[2rem]" src={Collaboration} alt="" /> Collaboration</NavLink>
                    <NavLink to='/history' className={"flex justify-center gap-x-2 items-center"}><img className="w-[2rem]" src={History} alt="" /> History</NavLink>
                    <NavLink to='/upcomingprojects' className={"flex justify-center gap-x-2 items-center"}><img className="w-[2rem]" src={Upcoming} alt="" /> Upcoming Projects</NavLink>
                    <NavLink className={"flex justify-center gap-x-2 items-center"}><img className="w-[2rem]" src={New} alt="" /> New Idea</NavLink>


                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;