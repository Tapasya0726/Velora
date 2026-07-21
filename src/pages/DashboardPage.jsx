import { useState, useEffect } from "react";
import NewTaskModal from "../components/NewTaskModal";
import "../styles/DashboardPage.css"
import {
    getDashboardStats,
    getApplicationStats,
    getSkillStats
} from "../services/dashboardService";
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
    totalFocusMinutes: 0,
    totalApplications: 0,
    interviews: 0
});

const [applicationStats, setApplicationStats] = useState({
    applied: 0,
    interview: 0,
    offer: 0,
    rejected: 0
});

const [skillStats, setSkillStats] = useState({
    total: 0,
    beginner: 0,
    intermediate: 0,
    advanced: 0,
    averageProgress: 0
});

const fetchSkillStats = async () => {

    try {

        const data = await getSkillStats();

        setSkillStats(data);

    } catch (error) {

        console.error(error);

    }

};

const fetchApplicationStats = async () => {

    try {

        const data = await getApplicationStats();

        setApplicationStats(data);

    } catch (error) {

        console.error(error);

    }

};

const fetchDashboardStats = async () => {

    try {

        const data = await getDashboardStats();

        setDashboardStats(data);

    } catch (error) {

        console.error(error);

    }

};

useEffect(() => {

    fetchDashboardStats();
    fetchApplicationStats();
    fetchSkillStats();

}, []);

    return(
        <AppLayout>
        <div className="dashboard-content">
        <DashboardHero
         onAddTask={() => setShowModal(true)}
        />
        <DashboardStats dashboardStats={dashboardStats} skillStats={skillStats}/>
        <div className="dashboard-row">
        <DashboardDueToday
        refreshTasks={refreshTasks}
        />
        <DashboardWeeklyActivity/>
        </div>

        <div className="dashboard-row">
            <DashboardApplications applicationStats={applicationStats}/>
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