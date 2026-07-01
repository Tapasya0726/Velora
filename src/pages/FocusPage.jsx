import "../styles/FocusPage.css"
import AppLayout from "../layouts/AppLayout";

export default function FocusPage(){
    
    const goals = [
        {
            id:1,
            task:"Finish Notes UI",
            completed:true
        },
        {
            id:2,
            task:"Build Focus Page",
            completed:false
        },
        {
            id:3,
            task:"Learn PostgreSQL",
            completed:false
        }
    ];
    
    return(
        <AppLayout>
            <div className="focus-page">

                <div className="focus-header">
                    <h6>WORKSPACE</h6>
                <h2>Focus</h2>
                <p>Pomodoro · 12 sessions today</p>
                </div>

            <div className="timer-card">
                <div className="streak">
                    <p>🔥 12 Day Streak</p>
                </div>

                <h1>25:00</h1>
                <p className="mode-label">WORK</p>

                <div className="timer-buttons">
                    <button className="resume-pause">▷ Resume</button>
                    <button className="restart">🗘 Restart</button>
                </div>

                <p className="session-count">
                    Session 3 of 4
                </p>
            </div>
            
            <div className="modes">
                <div className="mode">
                    <h6>25</h6>
                    <p>Work</p>
                </div>
                <div className="mode">
                    <h6>5</h6>
                    <p>Break</p>
                </div><div className="mode">
                    <h6>15</h6>
                    <p>Long</p>
                </div>
                </div> 
            
            <div className="bottom-section">
            <div className="todays-goals">
                <h6>Today's goals</h6>
                {goals.map(goal => (
                    <div key={goal.id} className="goal-item">

                        <input 
                        type="checkbox"
                        checked={goal.completed}
                        readOnly
                        />
                        
                        <span className={goal.completed? "goal-completed" : ""}>
                            {goal.task}
                            </span>

            </div>
            
                ))}
            </div>

            <div className="stats">
                <h6>Stats</h6>
                <div className="stats-grid">
                
                <div className="stat-card">
                    <h5>12</h5>
                    <p>Sessions</p>
                </div>
                <div className="stat-card">
                    <h5>5h</h5>
                    <p>Focus time</p>
                </div>
            </div></div>
            </div>
            </div>
        </AppLayout>
    );
}