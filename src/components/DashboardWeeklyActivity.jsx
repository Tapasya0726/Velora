import "../styles/DashboardWeeklyActivity.css"

export default function WeeklyActivity(){
    return(
        <section className="weeklyactivity">
            <div className="activity-header">
                <h3>Weekly activity</h3>
                <span>Jun 2-8</span>
            </div>
            <div className="chart">
                <div className="day">
                    <div className="bar mon"></div>
                    <span>Mon</span>
                </div>

                <div className="day">
                    <div className="bar tue"></div>
                    <span>Tue</span>
                </div>

                <div className="day">
                    <div className="bar wed"></div>
                        <span>Wed</span>
                </div>

                <div className="day">
                    <div className="bar thu"></div>
                        <span>Thu</span>
                </div>

                <div className="day">
                    <div className="bar fri"></div>
                        <span>Fri</span>
                </div>

                <div className="day">
                    <div className="bar sat"></div>
                        <span>Sat</span> 
                </div>

                <div className="day">
                    <div className="bar sun"></div>
                    <span>Sun</span>
                </div>
            </div>
        </section>


    );
}