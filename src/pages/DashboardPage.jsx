import { useState } from "react";
import NewTaskModal from "../components/NewTaskModal";
import "../styles/DashboardPage.css"
import DashboardHero from "../components/DashboardHero"
import DashboardStats from "../components/DashboardStats"
import DashboardDueToday from "../components/DashboardDueToday"
import DashboardWeeklyActivity from "../components/DashboardWeeklyActivity"
import DashboardApplications from "../components/DashboardApplications"
import DashboardTopSkills from "../components/DashboardTopSkills"
import AppLayout from "../layouts/AppLayout"

export default function DashboardPage(){
    const [showModal, setShowModal] = useState(false);
    const [refreshTasks, setRefreshTasks] = useState(false);
    return(
        <AppLayout>
        <div className="dashboard-content">
        <DashboardHero
         onAddTask={() => setShowModal(true)}
        />
        <DashboardStats/>
        <div className="dashboard-row">
        <DashboardDueToday
        refreshTasks={refreshTasks}
        />
        <DashboardWeeklyActivity/>
        </div>

        <div className="dashboard-row">
            <DashboardApplications/>
            <DashboardTopSkills/>
  
        </div>
        </div>

        {showModal && (
    <NewTaskModal
        onClose={() => setShowModal(false)}
        onTaskCreated={() => {

            setShowModal(false);

            setRefreshTasks(prev => !prev);

            alert("✅ Task added successfully!");

        }}
    />
)}

        </AppLayout>
    )
}