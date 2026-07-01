import "../styles/DashboardPage.css"
import DashboardHero from "../components/DashboardHero"
import DashboardStats from "../components/DashboardStats"
import DashboardDueToday from "../components/DashboardDueToday"
import DashboardWeeklyActivity from "../components/DashboardWeeklyActivity"
import DashboardApplications from "../components/DashboardApplications"
import DashboardTopSkills from "../components/DashboardTopSkills"
import AppLayout from "../layouts/AppLayout"

export default function DashboardPage(){
    return(
        <AppLayout>
        <div className="dashboard-content">
        <DashboardHero/>
        <DashboardStats/>
        <div className="dashboard-row">
        <DashboardDueToday/>
        <DashboardWeeklyActivity/>
        </div>

        <div className="dashboard-row">
            <DashboardApplications/>
            <DashboardTopSkills/>
  
        </div>
        </div>
        </AppLayout>
    )
}