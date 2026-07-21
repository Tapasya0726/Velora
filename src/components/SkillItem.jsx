export default function SkillItem({
    icon,
    name,
    percentage
}) {
    return (
        <div className="skill">

            <div className="skill-item">

                <span className="skill-icon">
                    {icon}
                </span>

                <span>{name}</span>

                <span>{percentage}%</span>

            </div>

            <div className="progress-bar">

                <div
                    className="progress"
                    style={{ width: `${percentage}%` }}
                ></div>

            </div>

        </div>
    );
}