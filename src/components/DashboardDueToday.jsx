import { formatDate } from "../utils/formatDate";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import api from "../api/axios";
import "../styles/DashboardDueToday.css";
import TaskItem from "./TaskItem";

export default function DashboardDueToday({refreshTasks}) {

    const [tasks, setTasks] = useState([]);

     const fetchTasks = async () => {

            try {

                const response = await api.get("/tasks");

                // console.log(response.data);

                setTasks(response.data);

            } catch (error) {

                console.error(error);

            }

        };

        const handleToggleStatus = async (task) => {

    try {

        await api.put(
            `/tasks/${task.task_id}`,
            {
                title: task.title,
                priority: task.priority,
                due_date: task.due_date,
                status:
                    task.status === "Pending"
                        ? "Completed"
                        : "Pending"
            }
        );

        fetchTasks();

    } catch (error) {

        console.error(error);

    }

};

    useEffect(() => {

        fetchTasks();

    }, [refreshTasks]);

const todayTasks = tasks
    .filter((task) => {

        const today = new Date();

        const dueDate = new Date(task.due_date);

        return (
            dueDate.getDate() === today.getDate() &&
            dueDate.getMonth() === today.getMonth() &&
            dueDate.getFullYear() === today.getFullYear()
        );

    })
    .slice(0, 3);

    return (

        <section className="duetoday">

            <div className="due-header">

                <h3>Due today</h3>

                <Link to="/tasks" className="dashboard-link all-tasks-link">
                     <span>All tasks</span>
                     <FiArrowRight />
                </Link>

            </div>

            {
                 todayTasks.length === 0 ? (
        <p className="no-task-message">
            No tasks due today!
        </p>
    ) : (
    todayTasks.map((task) => (

        <TaskItem
            key={task.task_id}
            title={task.title}
            priority={task.priority}
            date={formatDate(task.due_date)}
            completed={task.status === "Completed"}
            onToggle={() => handleToggleStatus(task)}
        />

    )))
}

        </section>

    );

}