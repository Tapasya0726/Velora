import "../styles/TaskCard.css"

export default function TaskCard({
    taskId,
    title, 
    priority,
    duedate,
    completed,
    onEdit,
    onDelete,
    onToggle
}) {
    return(
        
<div className="task-card">

        <div className="checkbox">
            <input type="checkbox"
            checked={completed}
            onChange={() => onToggle(taskId)}
            />
        </div>
        <div className="task-content">
        <div className="title">
            <p className={completed ? "completed" : ""}>
                {title}
            </p>
        </div>


        <div className="meta">

             <div className="task-actions">

    <button
        className="edit-btn"
        onClick={() => onEdit(taskId)}
    >
        ✏️
    </button>

    <button
        className="delete-btn"
        onClick={() => onDelete(taskId)}
    >
        🗑️
    </button>

</div>

        <div className="priority">
         <span className={`priority-${priority.toLowerCase()}`}>
            {priority}
            </span>
        </div>
        
        

        <div className="date">
            <span className={completed ? "completed" : ""}>
                {duedate}
                </span>
        </div>
        </div>
</div>
 </div>
    );
}