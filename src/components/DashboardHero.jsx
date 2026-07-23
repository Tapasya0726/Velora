import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiPlay } from "react-icons/fi";
import "../styles/DashboardHero.css";

export default function DashboardHero({ onAddTask }){
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

    const storedUser = JSON.parse(
        localStorage.getItem("user")
    );

    setUser(storedUser);

}, []);
    return(
        <section className="dashboard-hero">
            <div className="dashboard-hero-left">
        <h2>Hello {user ? user.name.split(" ")[0] : "User"}</h2>
        <p>Start your daily progress</p>
        </div>
        <div className="dashboard-hero-button">
        <button 
        type="button"
        onClick={onAddTask}>
        <FiPlus />
        <span>Add Task</span>
        </button>
        <button
    type="button"
    onClick={() => navigate("/focus")}
>
    <FiPlay />
    <span>Start Focus</span>
</button>
        </div>
        </section>

    );
}