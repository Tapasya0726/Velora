import AppLayout from "../layouts/AppLayout";
import RoadmapMilestone from "../components/RoadmapMilestone";
import RoadmapSkillGap from "../components/RoadmapSkillGap";
import RoadmapResource from "../components/RoadmapResource";

import "../styles/RoadmapPage.css";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBookOpen
} from "react-icons/fa";

export default function RoadmapPage() {

  const milestones = [
    {
      id: 1,
      title: "HTML & CSS",
      status: "Completed",
      duration: "2 Weeks"
    },
    {
      id: 2,
      title: "JavaScript",
      status: "Completed",
      duration: "3 Weeks"
    },
    {
      id: 3,
      title: "React",
      status: "In Progress",
      duration: "4 Weeks"
    },
    {
      id: 4,
      title: "Node.js",
      status: "Pending",
      duration: "3 Weeks"
    },
    {
      id: 5,
      title: "PostgreSQL",
      status: "Pending",
      duration: "2 Weeks"
    }
  ];

  const skillGaps = [
    {
      id: 1,
      icon: <FaReact />,
      skill: "React",
      currentLevel: "Intermediate",
      targetLevel: "Advanced"
    },
    {
      id: 2,
      icon: <FaNodeJs />,
      skill: "Node.js",
      currentLevel: "Beginner",
      targetLevel: "Intermediate"
    },
    {
      id: 3,
      icon: <FaGitAlt />,
      skill: "Git",
      currentLevel: "Beginner",
      targetLevel: "Intermediate"
    }
  ];

  const resources = [
    {
      id: 1,
      icon: <FaBookOpen />,
      title: "React Router",
      platform: "Official Documentation",
      duration: "45 min"
    },
    {
      id: 2,
      icon: <FaBookOpen />,
      title: "Node.js Basics",
      platform: "freeCodeCamp",
      duration: "2 hrs"
    },
    {
      id: 3,
      icon: <FaBookOpen />,
      title: "PostgreSQL Fundamentals",
      platform: "YouTube",
      duration: "1.5 hrs"
    }
  ];

  const completed =
    milestones.filter(item => item.status === "Completed").length;

  const progress =
    Math.round((completed / milestones.length) * 100);

  return (
    <AppLayout>

      <div className="roadmap-page">

        <div className="roadmap-header">
          <h6>LEARNING</h6>
          <h2>Roadmap</h2>
          <p>Track your learning journey and skill growth.</p>
        </div>

        <div className="progress-card">

          <div className="progress-info">
            <h4>Overall Progress</h4>
            <span>{progress}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

        </div>

        <section className="roadmap-section">

          <h3>Learning Milestones</h3>

          <div className="milestone-list">

            {milestones.map((item) => (

              <RoadmapMilestone
                key={item.id}
                title={item.title}
                status={item.status}
                duration={item.duration}
              />

            ))}

          </div>

        </section>

        <section className="roadmap-section">

          <h3>Skill Gaps</h3>

          <div className="skill-gap-list">

            {skillGaps.map((item) => (

              <RoadmapSkillGap
                key={item.id}
                icon={item.icon}
                skill={item.skill}
                currentLevel={item.currentLevel}
                targetLevel={item.targetLevel}
              />

            ))}

          </div>

        </section>

        <section className="roadmap-section">

          <h3>Recommended Resources</h3>

          <div className="resource-list">

            {resources.map((item) => (

              <RoadmapResource
                key={item.id}
                icon={item.icon}
                title={item.title}
                platform={item.platform}
                duration={item.duration}
              />

            ))}

          </div>

        </section>

      </div>

    </AppLayout>
  );
}