import "../styles/AnalyticsStatCard.css";

export default function AnalyticsStatCard({
    icon,
    value,
    title,
    subtitle
}) {
    return (
        <div className="analytics-stat-card">

            <div className="analytics-icon">
                {icon}
            </div>

            <div className="analytics-content">

                <h2>{value}</h2>

                <h4>{title}</h4>

                <p>{subtitle}</p>

            </div>

        </div>
    );
}