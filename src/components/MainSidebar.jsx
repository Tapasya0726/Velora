import { NavLink } from "react-router-dom"; 

import { FaTasks } from "react-icons/fa"
import { HiOutlineDocumentText } from "react-icons/hi"
import { MdWorkOutline } from "react-icons/md"
import { GiProgression } from "react-icons/gi"
import { FaBrain } from "react-icons/fa"
import { FaFileAlt } from "react-icons/fa"
import { FaChartBar } from "react-icons/fa";   
import { FaCog } from "react-icons/fa";        
import { FaMapSigns } from "react-icons/fa";   
import { FaHome } from "react-icons/fa";       
import "../styles/MainSidebar.css"

export default function MainSidebar(){
    const getNavClass = ({isActive}) =>
        isActive ? "sidebar-link active" : "sidebar-link";
    return(
        <aside className="sidebar">
        <div className="workspace">
            <h5>WORKSPACE</h5>
            <NavLink 
            to="/dashboard"
            className={getNavClass}
            >
                <FaHome/>
                <span>Activity</span>
                </NavLink>

            <NavLink
            to="/tasks"
            className={getNavClass}
            >
                <FaTasks/>
                <span>Tasks</span>
            </NavLink>

            <NavLink
            to="/notes"
            className={getNavClass}
            >
                <HiOutlineDocumentText/>
                <span>Notes</span>
            </NavLink>

            <NavLink
            to="/focus"
            className={getNavClass}
            >
                <FaBrain/>
                <span>Focus</span>
            </NavLink>
        </div>
        

        <div className="career">
            <h5>CAREER</h5>
            <NavLink
            to="/applications"
            className={getNavClass}
            >
                <MdWorkOutline/>
                <span>Applications</span>
            </NavLink>

            <NavLink
            to="/skills"
            className={getNavClass}
            >
                <GiProgression/>
                <span>Skills</span>
            </NavLink>

            <NavLink
            to="/resume"
            className={getNavClass}
            >
                <FaFileAlt/>
                <span>Resume</span>
            </NavLink>

            <NavLink
            to="/roadmap"
            className={getNavClass}
            >
                <FaMapSigns/>
                <span>Roadmap</span>
            </NavLink>
        </div>

        <div className="insights">
            <h5>INSIGHTS</h5>
            <NavLink
            to="/analytics"
            className={getNavClass}
            >
                <FaChartBar/>
                <span>Analytics</span>
            </NavLink>

            <NavLink
            to="/settings"
            className={getNavClass}
            >
                <FaCog/>
                <span>Settings</span>
            </NavLink>
        </div>
        </aside>


    );
}
