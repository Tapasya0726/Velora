import "../styles/RoadmapResource.css";

export default function RoadmapResource({
  icon,
  title,
  platform,
  duration,
}) {
  return (
    <div className="resource-card">
      <div className="resource-header">
        <div className="resource-info">
          <div className="resource-icon">
            {icon}
          </div>

          <div>
            <h4>{title}</h4>
            <p>{platform}</p>
          </div>
        </div>
      </div>

      <div className="resource-footer">
        <span>⏱ {duration}</span>

        <button className="start-btn">
          Start Learning
        </button>
      </div>
    </div>
  );
}