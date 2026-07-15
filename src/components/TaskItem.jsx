export default function TaskItem({
    title,
    priority,
    date,
    completed,
    onToggle
}) {
    return (

        <div className={completed ? "task-item completed" : "task-item"}>

            <div className="task-top">

                <input
                    type="checkbox"
                    checked={completed}
                    onChange={onToggle}
                />

                <span>{title}</span>

            </div>

            <div className="task-bottom">

                <span className={priority.toLowerCase()}>
                    {priority}
                </span>

                <span className="date">
                    {date}
                </span>

            </div>

        </div>

    );
}