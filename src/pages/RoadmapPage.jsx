import AppLayout from "../layouts/AppLayout";
import RoadmapMilestone from "../components/RoadmapMilestone";
import RoadmapResource from "../components/RoadmapResource";
import { useState, useEffect } from "react";

import {
  FaCloud,
  FaRobot,
  FaShieldAlt,
  FaChartBar
} from "react-icons/fa";

import {
  getRoadmap,
  updateRoadmapStatus,
} from "../services/roadmapService";

import "../styles/RoadmapPage.css";
import EmptyState from "../components/EmptyState";
import { FaBookOpen } from "react-icons/fa";

export default function RoadmapPage() {

const [milestones, setMilestones] = useState([]);

const [resources, setResources] = useState([]);

const [progress, setProgress] = useState(0);

const [roadmapType, setRoadmapType] = useState("");
const [loading, setLoading] = useState(true);

useEffect(() => {
  loadRoadmap();
}, []);

const loadRoadmap = async () => {
  try {
    const data = await getRoadmap();

    setMilestones(data.roadmapItems || []);
    setResources(data.resources || []);
    setProgress(data.progress || 0);
    setRoadmapType(data.roadmapType || "Roadmap");
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

/*const handleRoadmapChange = async (e) => {
  try {
    const roadmap = e.target.value;

    setSelectedRoadmap(roadmap);

    await selectRoadmap(roadmap);

    await loadRoadmap();
  } catch (error) {
    console.error(error);
  }
};*/

const handleComplete = async (roadmapItemId) => {
  try {
    await updateRoadmapStatus(
      roadmapItemId,
      "Completed"
    );

    loadRoadmap();
  } catch (error) {
    console.error(error);
  }
};

  return (
    <AppLayout>

      <div className="roadmap-page">

        <div className="roadmap-header">
  <h6>LEARNING</h6>

  <h2>{roadmapType || "Roadmap"}</h2>

  <p>Track your learning journey and skill growth.</p>

  {/*<div className="roadmap-selector">
    <label htmlFor="roadmap-select">
      Choose Roadmap
    </label>

    <select
      id="roadmap-select"
      value={selectedRoadmap}
      onChange={handleRoadmapChange}
    >
      <option value="Full Stack Developer">
        Full Stack Developer
      </option>

      <option value="Backend Developer">
        Backend Developer
      </option>
    </select>
  </div>*/}
</div>

        {loading ? (
          <div className="page-loading roadmap-loading">
            <div className="page-loading__spinner" aria-hidden="true" />
            <h2>Loading your roadmap…</h2>
            <p>Preparing your next milestones and resources.</p>
          </div>
        ) : (
          <>
            <div className="progress-card">
              <div className="progress-info">
                <h4>Current progress</h4>
                <span>{progress}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <section className="roadmap-section">

          <h3>Learning Milestones</h3>

          <div className="milestone-list">

            {milestones.map((item) => (

             <RoadmapMilestone
  key={item.roadmap_item_id}
  roadmapItemId={item.roadmap_item_id}
  title={item.title}
  status={item.status}
  duration={item.duration}
  onComplete={handleComplete}
/>

            ))}

          </div>

        </section>

        <section className="roadmap-section">

          <h3>Recommended Resources</h3>

          <div className="resource-list">

            {resources.map((item) => (

            <RoadmapResource
    key={item.resource_id}
    title={item.title}
    resourceType={item.type}
    url={item.link}
/>

            ))}

          </div>

        </section>

{/* ================= Future Roadmaps ================= */}

<div className="future-roadmaps">

  <h3>More Career Roadmaps</h3>

  <p>
    We're continuously adding curated learning paths for different career goals.
  </p>

  <div className="future-roadmap-grid">

    <div className="future-roadmap-card">
      <div className="future-icon">
        <FaCloud />
      </div>
      <h4>Cloud Computing</h4>
      <span>Coming Soon</span>
    </div>

    <div className="future-roadmap-card">
      <div className="future-icon">
        <FaRobot />
      </div>
      <h4>AI / ML Engineer</h4>
      <span>Coming Soon</span>
    </div>

    <div className="future-roadmap-card">
      <div className="future-icon">
        <FaShieldAlt />
      </div>
      <h4>Cyber Security</h4>
      <span>Coming Soon</span>
    </div>

    <div className="future-roadmap-card">
      <div className="future-icon">
        <FaChartBar />
      </div>
      <h4>Data Analyst</h4>
      <span>Coming Soon</span>
    </div>

  </div>

</div>

          </>
        )}

      </div>

    </AppLayout>
  );
}