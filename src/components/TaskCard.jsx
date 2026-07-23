import { FiEdit2, FiTrash2 } from "react-icons/fi";
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
        
<div className={`task-card ${completed ? "is-completed" : ""}`}>

        <div className="checkbox">
            <input type="checkbox"
            checked={completed}
            onChange={() => onToggle(taskId)}
            />
        </div>
        <div className="task-content">
        <div className="title">
            <p className={completed ? "completed-text" : ""}>
                {title}
            </p>
        </div>


        <div className="meta">

             <div className="task-actions">

    <button
        type="button"
        className="icon-action edit-action"
        onClick={() => onEdit(taskId)}
        aria-label="Edit task"
    >
        <FiEdit2 />
    </button>

    <button
        type="button"
        className="icon-action delete-action"
        onClick={() => onDelete(taskId)}
        aria-label="Delete task"
    >
        <FiTrash2 />
    </button>

</div>

        <div className="priority">
         <span className={`priority-${priority.toLowerCase()}`}>
            {priority}
            </span>
        </div>
        
        

        <div className="date">
            <span>
                {duedate}
                </span>
        </div>
        </div>
</div>
 </div>
    );
}