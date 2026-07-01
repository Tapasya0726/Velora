import "../styles/AnalyticsCategoryProgress.css";

export default function AnalyticsCategoryProgress({
  category,
  hours,
  progress,
}) {
  return (
    <div className="category-progress-card">

      <div className="category-header">
        <h4>{category}</h4>
        <span>{hours}</span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
}