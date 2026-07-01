import "../styles/DashboardHero.css";

export default function DashboardHero(){
    return(
        <section className="dashboard-hero">
            <div className="dashboard-hero-left">
        <h2>Hello Tapasya 👋</h2>
        <p>Start your daily progress</p>
        </div>
        <div className="dashboard-hero-button">
        <button>+ Add Task</button>
        <button>▷ Start Focus</button>
        </div>
        </section>

    );
}