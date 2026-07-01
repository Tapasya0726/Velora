import TaskCard from "../components/TaskCard";
import "../styles/TasksPage.css";
import AppLayout from "../layouts/AppLayout";

export default function TasksPage(){
    const tasks = [
        {
            id:1,
            title:"Design Notes Module UI",
            priority:"High",
            duedate:"Jun 9",
            completed: false
        },

        {
            id:2,
            title:"Make Dashboard UI",
            priority:"Low",
            duedate:"Jun 20",
            completed: true
        },

        {
  id:3,
  title:"Learn PostgreSQL",
  priority:"Medium",
  duedate:"Jul 5",
  completed:false
},

{
  id:4,
  title:"Build Notes Module",
  priority:"High",
  duedate:"Jul 10",
  completed:true
}
    ]
    return(
        <AppLayout>
            <div className="header-row">
            <div className="task-header">
                <h6>WORKSPACE</h6>
                <h2>Tasks</h2>
                <p>5 pending · 18 completed</p>
            </div>

            <button className="newtask">
                + New Task
            </button>
            </div>
            <div className="completion-rate">
                <h5>78%</h5>
                <p>Completion rate</p>
            </div>

            <section className="pending">
                <h6>Pending(5)</h6>
                {tasks
                .filter(task => !task.completed)
                .map(task =>(
                <TaskCard
                key={task.id}
                title={task.title}
                priority={task.priority}
                duedate={task.duedate}
                completed={task.completed}
                />
                ))}

            </section>

            <section className="completed">
                <h6>Completed(2)</h6>
                {tasks
                .filter(task => task.completed)
                .map(task => (
                    <TaskCard
                    key={task.id}
                    title={task.title}
                    priority={task.priority}
                    duedate={task.duedate}
                    completed={task.completed}
                    />
                ))}
            </section>
            

        </AppLayout>
    );
}