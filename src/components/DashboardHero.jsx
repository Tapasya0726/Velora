import { useEffect, useState } from "react";
import "../styles/DashboardHero.css";

export default function DashboardHero({ onAddTask }){
    const [user, setUser] = useState(null);

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
        <button>▷ Start Focus</button>
        </div>
        </section>

    );
}