import "../styles/DashboardStats.css";
import { FaTasks } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

export default function DashboardStats(){
    return(
        <section className="stats">
            <div className="stat-card">
                <FaTasks/>
                <h2>18</h2>
                <p className="stat-title">Tasks done</p>
                <p className="stat-subtitle">+4 this week</p>
            </div>

            <div className="stat-card">
                <MdWorkOutline/>
                <h2>7</h2>
                <p className="stat-title">Applications</p>
                <p className="stat-subtitle">2 interviews</p>
            </div>

            <div className="stat-card">
                <FaBrain/>
                <h2>24h</h2>
                <p className="stat-title">Focus time</p>
                <p className="stat-subtitle">+6h</p>
            </div>

            <div className="stat-card">
                <GiProgression/>
                <h2>9</h2>
                <p className="stat-title">Skills</p>
                <p className="stat-subtitle">3 in progress</p>
            </div>
        </section>

    );
}
