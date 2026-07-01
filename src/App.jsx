import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import FocusPage from "./pages/FocusPage";
import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TasksPage";
import NotesPage from "./pages/NotesPage";
import ResumePage from "./pages/ResumePage";
import SkillsPage from "./pages/SkillsPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import RoadmapPage from "./pages/RoadmapPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";


function App() {

  return (
    <Routes>

      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/dashboard" element={<DashboardPage/>} />
      <Route path="/tasks" element={<TasksPage/>} />
      <Route path="/notes" element={<NotesPage/>} />
      <Route path="focus" element={<FocusPage/>} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/applications" element={<ApplicationsPage />} />
      <Route path="/roadmap" element={<RoadmapPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/settings" element={<SettingsPage />} />

      </Routes>
  )

}

export default App;