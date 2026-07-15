import ProtectedRoute from "./components/ProtectedRoute";

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

      <Route path="/" element={<LandingPage />} />

<Route path="/login" element={<LoginPage />} />

<Route path="/signup" element={<SignUpPage />} />

     <Route
    path="/dashboard"
    element={
        <ProtectedRoute>
            <DashboardPage />
        </ProtectedRoute>
    }
/>

<Route
    path="/tasks"
    element={
        <ProtectedRoute>
            <TasksPage />
        </ProtectedRoute>
    }
/>

<Route
    path="/notes"
    element={
        <ProtectedRoute>
            <NotesPage />
        </ProtectedRoute>
    }
/>

<Route
    path="/focus"
    element={
        <ProtectedRoute>
            <FocusPage />
        </ProtectedRoute>
    }
/>

<Route
    path="/resume"
    element={
        <ProtectedRoute>
            <ResumePage />
        </ProtectedRoute>
    }
/>

<Route
    path="/skills"
    element={
        <ProtectedRoute>
            <SkillsPage />
        </ProtectedRoute>
    }
/>

<Route
    path="/applications"
    element={
        <ProtectedRoute>
            <ApplicationsPage />
        </ProtectedRoute>
    }
/>

<Route
    path="/roadmap"
    element={
        <ProtectedRoute>
            <RoadmapPage />
        </ProtectedRoute>
    }
/>

<Route
    path="/analytics"
    element={
        <ProtectedRoute>
            <AnalyticsPage />
        </ProtectedRoute>
    }
/>

<Route
    path="/settings"
    element={
        <ProtectedRoute>
            <SettingsPage />
        </ProtectedRoute>
    }
/>

      </Routes>
  )

}

export default App;