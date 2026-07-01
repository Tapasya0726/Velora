export default function TaskItem(props){
  return(

    <div className={
        props.completed ? "task-item completed" : "task-item"
    }>
                <div className="task-top">
                    <input type="checkbox" 
                    checked={props.completed}
                    readOnly/>
                    <span>{props.title}</span>
                </div>

                <div className="task-bottom">
                    <span className={props.priority.toLowerCase()}>
                        {props.priority}
                    </span>
                    <span className="date">{props.date}</span>
                </div>
            </div>

  );
}