import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
        <h2>Hello {user ? user.name.split(" ")[0] : "User"} 👋</h2>
        <p>Start your daily progress</p>
        </div>
        <div className="dashboard-hero-button">
        <button 
        onClick={onAddTask}>
        + Add Task
        </button>
        <button
    onClick={() => navigate("/focus")}
>
    ▷ Start Focus
</button>
        </div>
        </section>

    );
}