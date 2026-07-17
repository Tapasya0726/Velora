import { useState, useEffect } from "react";
import NewTaskModal from "../components/NewTaskModal";
import "../styles/DashboardPage.css"
import api from "../api/axios";
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
    const [dashboardStats, setDashboardStats] = useState({
    totalFocusMinutes: 0
});

const fetchDashboardStats = async () => {

    try {

        const response = await api.get("/dashboard/stats");

        setDashboardStats(response.data);

    } catch (error) {

        console.error("Error fetching dashboard stats:", error);

    }

};

useEffect(() => {

    fetchDashboardStats();

}, []);

    return(
        <AppLayout>
        <div className="dashboard-content">
        <DashboardHero
         onAddTask={() => setShowModal(true)}
        />
        <DashboardStats dashboardStats={dashboardStats} />
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