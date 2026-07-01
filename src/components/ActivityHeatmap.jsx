import "../styles/ActivityHeatmap.css";

export default function ActivityHeatmap({ activityData }) {
  return (
    <div className="heatmap-card">

      <div className="heatmap-header">
        <h3>Activity Heatmap</h3>
        <span>Past 12 Weeks</span>
      </div>

      <div className="heatmap-grid">

        {activityData.map((level, index) => (
          <div
            key={index}
            className={`heatmap-cell level-${level}`}
          ></div>
        ))}

      </div>

      <div className="heatmap-footer">
        <span>Less</span>

        <div className="heatmap-legend">
          <div className="heatmap-cell level-0"></div>
          <div className="heatmap-cell level-1"></div>
          <div className="heatmap-cell level-2"></div>
          <div className="heatmap-cell level-3"></div>
          <div className="heatmap-cell level-4"></div>
        </div>

        <span>More</span>
      </div>

    </div>
  );
}