import { useEffect, useState } from "react";
import api from "../api/axios";
import "../styles/DashboardStats.css";
import { FaTasks } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

export default function DashboardStats({ dashboardStats }){
    const [tasks, setTasks] = useState([]);

    useEffect(() => {

    const fetchTasks = async () => {

        try {

            const response = await api.get("/tasks");

            setTasks(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    fetchTasks();

}, []);

const completedTasks = tasks.filter(
    task => task.status === "Completed"
).length;

const hours = Math.floor(
    dashboardStats.totalFocusMinutes / 60
);

const minutes =
    dashboardStats.totalFocusMinutes % 60;
    return(
        <section className="stats">
            <div className="stat-card">
                <FaTasks/>
                <h2>{completedTasks}</h2>
                <p className="stat-title">Tasks done</p>
                <p className="stat-subtitle">Total Completed</p>
            </div>

            <div className="stat-card">
                <MdWorkOutline/>
                <h2>{dashboardStats.totalApplications}</h2>

<p className="stat-title">
    Applications
</p>

<p className="stat-subtitle">
    {dashboardStats.interviews} interview
    {dashboardStats.interviews !== 1 ? "s" : ""}
</p>      </div>

            <div className="stat-card">
    <FaBrain/>
    <h2>{hours}h {minutes}m</h2>
    <p className="stat-title">Focus Time</p>
    <p className="stat-subtitle">Total Focus Time</p>
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
