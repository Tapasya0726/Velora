import AppLayout from "../layouts/AppLayout";

import AnalyticsStatCard from "../components/AnalyticsStatCard";
import ActivityHeatmap from "../components/ActivityHeatmap";
import AnalyticsCategoryProgress from "../components/AnalyticsCategoryProgress";
import AnalyticsGoalCompletion from "../components/AnalyticsGoalCompletion";

import "../styles/AnalyticsPage.css";

import {
  FaTrophy,
  FaClock,
  FaFire,
  FaBullseye
} from "react-icons/fa";

export default function AnalyticsPage() {

  const stats = [
    {
      id: 1,
      icon: <FaTrophy />,
      value: "82%",
      title: "Weekly Score",
      subtitle: "Based on completed tasks"
    },
    {
      id: 2,
      icon: <FaClock />,
      value: "6.2 hrs",
      title: "Focus Hours",
      subtitle: "This Week"
    },
    {
      id: 3,
      icon: <FaFire />,
      value: "12 Days",
      title: "Current Streak",
      subtitle: "Keep it going!"
    },
    {
      id: 4,
      icon: <FaBullseye />,
      value: "5 / 7",
      title: "Goals Completed",
      subtitle: "Weekly Goals"
    }
  ];

  const activityData = [
    0,1,2,3,4,2,1,
    3,4,0,1,2,4,3,
    1,2,0,4,3,2,1,
    0,3,2,4,1,2,3,
    4,2,1,0,3,2,4,
    1,2,3,4,0,1,2,
    3,4,2,1,0,3,4,
    2,1,3,4,2,1,0,
    4,3,2,1,0,2,3,
    4,1,2,3,4,0,1,
    2,3,4,1,2,0,3,
    4,2,1,3
  ];

  const categories = [
    {
      id: 1,
      category: "Frontend Development",
      hours: "14 hrs",
      progress: 80
    },
    {
      id: 2,
      category: "Backend Development",
      hours: "9 hrs",
      progress: 55
    },
    {
      id: 3,
      category: "DSA Practice",
      hours: "6 hrs",
      progress: 40
    },
    {
      id: 4,
      category: "Interview Preparation",
      hours: "4 hrs",
      progress: 25
    }
  ];

  const goalData = {
    completed: 18,
    total: 25,
    percentage: 72
  };

  return (
    <AppLayout>

      <div className="analytics-page">

        {/* Header */}

        <div className="analytics-header">
          <h6>INSIGHTS</h6>
          <h2>Analytics</h2>
          <p>Track your productivity and learning progress.</p>
        </div>

        {/* Statistics */}

        <div className="stats-grid">

          {stats.map((item) => (

            <AnalyticsStatCard
              key={item.id}
              icon={item.icon}
              value={item.value}
              title={item.title}
              subtitle={item.subtitle}
            />

          ))}

        </div>

        {/* Activity Heatmap */}

        <div className="analytics-section">

          <ActivityHeatmap
            activityData={activityData}
          />

        </div>

        {/* Bottom Section */}

        <div className="analytics-bottom">

          <div className="category-section">

            <h3>Time by Category</h3>

            <div className="category-list">

              {categories.map((item) => (

                <AnalyticsCategoryProgress
                  key={item.id}
                  category={item.category}
                  hours={item.hours}
                  progress={item.progress}
                />

              ))}

            </div>

          </div>

          <div className="goal-section">

            <AnalyticsGoalCompletion
              completed={goalData.completed}
              total={goalData.total}
              percentage={goalData.percentage}
            />

          </div>

        </div>

      </div>

    </AppLayout>
  );
}