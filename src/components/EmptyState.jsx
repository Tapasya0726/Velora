import "../styles/EmptyState.css";

export default function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {actionLabel && (
        <button type="button" className="empty-state__action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
