import "../styles/DashboardDueToday.css";
import TaskItem from "./TaskItem"

export default function DashboardDueToday(){

const tasks = [
  {
    title: "Setup express route for auth",
    priority: "Urgent",
    date: "June 9",
    completed: true
  },

  {
    title: "Design notes module UI",
    priority: "High",
    date: "June 9",
    completed: false
  },

  {
    title: "Make APIs",
    priority: "Medium",
    date: "June 10",
    completed: false
  }
];

    return(
         <section className="duetoday">
            <div className="due-header">
                <h3>Due today</h3>
                <a href="#alltasks">All tasks →</a>
            </div>
            
           {
  tasks.map((task, index) => (
    <TaskItem
    key={index}
    title={task.title}
      priority={task.priority}
      date={task.date}
      completed={task.completed}
    />
  ))
}
         </section>

    );

}