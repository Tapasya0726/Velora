import "../styles/RoadmapSkillGap.css";

export default function RoadmapSkillGap({
  icon,
  skill,
  currentLevel,
  targetLevel,
}) {
  return (
    <div className="skill-gap-card">
      <div className="skill-gap-header">
        <div className="skill-gap-info">
          <div className="skill-gap-icon">
            {icon}
          </div>

          <h4>{skill}</h4>
        </div>
      </div>

      <div className="skill-gap-levels">
        <div className="level-row">
          <span className="label">Current</span>

          <span
            className={`badge current ${currentLevel
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            {currentLevel}
          </span>
        </div>

        <div className="level-row">
          <span className="label">Target</span>

          <span className="badge target">
            {targetLevel}
          </span>
        </div>
      </div>
    </div>
  );
}