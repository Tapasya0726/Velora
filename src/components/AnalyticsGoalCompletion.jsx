import "../styles/AnalyticsGoalCompletion.css";

export default function AnalyticsGoalCompletion({
  completed,
  total,
  percentage,
}) {
  return (
    <div className="goal-completion-card">

      <h3>Goal Completion</h3>

      <div className="goal-circle">

        <div className="goal-circle-inner">
          <h2>{percentage}%</h2>
        </div>

      </div>

      <div className="goal-info">
        <h4>{completed} / {total}</h4>
        <p>Weekly Goals Completed</p>
      </div>

    </div>
  );
}