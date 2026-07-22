import { NavLink } from "react-router-dom";

import { FaTasks } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { FaBrain } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaMapSigns } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import "../styles/MainSidebar.css";

export default function MainSidebar({ isOpen = false, onLinkClick = () => {} }) {
    const getNavClass = ({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link");

    const handleLinkClick = () => onLinkClick();

    return (
        <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`} id="mobile-sidebar" aria-label="Primary navigation">
            <button type="button" className="sidebar-close" onClick={handleLinkClick} aria-label="Close navigation">
                ×
            </button>

            <div className="workspace">
                <h5>WORKSPACE</h5>
                <NavLink to="/dashboard" className={getNavClass} onClick={handleLinkClick}>
                    <FaHome />
                    <span>Activity</span>
                </NavLink>

                <NavLink to="/tasks" className={getNavClass} onClick={handleLinkClick}>
                    <FaTasks />
                    <span>Tasks</span>
                </NavLink>

                <NavLink to="/notes" className={getNavClass} onClick={handleLinkClick}>
                    <HiOutlineDocumentText />
                    <span>Notes</span>
                </NavLink>

                <NavLink to="/focus" className={getNavClass} onClick={handleLinkClick}>
                    <FaBrain />
                    <span>Focus</span>
                </NavLink>
            </div>

            <div className="career">
                <h5>CAREER</h5>
                <NavLink to="/applications" className={getNavClass} onClick={handleLinkClick}>
                    <MdWorkOutline />
                    <span>Applications</span>
                </NavLink>

                <NavLink to="/skills" className={getNavClass} onClick={handleLinkClick}>
                    <GiProgression />
                    <span>Skills</span>
                </NavLink>

                <NavLink to="/resume" className={getNavClass} onClick={handleLinkClick}>
                    <FaFileAlt />
                    <span>Resume</span>
                </NavLink>

                <NavLink to="/roadmap" className={getNavClass} onClick={handleLinkClick}>
                    <FaMapSigns />
                    <span>Roadmap</span>
                </NavLink>
            </div>

            <div className="insights">
                <h5>INSIGHTS</h5>
                <NavLink to="/analytics" className={getNavClass} onClick={handleLinkClick}>
                    <FaChartBar />
                    <span>Analytics</span>
                </NavLink>

                <NavLink to="/settings" className={getNavClass} onClick={handleLinkClick}>
                    <FaCog />
                    <span>Settings</span>
                </NavLink>
            </div>
        </aside>
    );
}
