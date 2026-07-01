import "../styles/TaskCard.css"

export default function TaskCard({
    title, 
    priority,
    duedate,
    completed 
}) {
    return(
        
<div className="task-card">

        <div className="checkbox">
            <input type="checkbox"
            checked={completed}
            readOnly
            />
        </div>
        <div className="task-content">
        <div className="title">
            <p className={completed ? "completed" : ""}>
                {title}
            </p>
        </div>


        <div className="meta">
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