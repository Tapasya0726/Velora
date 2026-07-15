import { formatDate } from "../utils/formatDate";
import { useEffect, useState } from "react";
import api from "../api/axios";
import TaskCard from "../components/TaskCard";
import NewTaskModal from "../components/NewTaskModal";
import "../styles/TasksPage.css";
import AppLayout from "../layouts/AppLayout";

export default function TasksPage() {

    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

const fetchTasks = async () => {

            try {

                const response = await api.get("/tasks");

                setTasks(response.data);

            } catch (error) {

                console.error(error);

            }

        };

  const handleEditTask = (task) => {

    setSelectedTask(task);

    setShowModal(true);

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

        alert(
            error.response?.data?.message ||
            "Failed to update task."
        );

    }

};

        const handleDeleteTask = async (taskId) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) {
        return;
    }

    try {

        await api.delete(`/tasks/${taskId}`);

        fetchTasks();

    } catch (error) {

        console.error(error);

        alert(
            error.response?.data?.message ||
            "Failed to delete task."
        );

    }

};

    useEffect(() => {

        fetchTasks();

    }, []);

    return (

        <AppLayout>

            <div className="header-row">

                <div className="task-header">

                    <h6>WORKSPACE</h6>

                    <h2>Tasks</h2>

                    <p>
                        {tasks.filter(task => task.status === "Pending").length}
                        {" "}pending ·{" "}
                        {tasks.filter(task => task.status === "Completed").length}
                        {" "}completed
                    </p>

                </div>

                <button
                    className="newtask"
                    onClick={() => setShowModal(true)}
                >
                    + New Task
                </button>

            </div>

            <div className="completion-rate">

                <h5>

                    {
                        tasks.length === 0
                            ? 0
                            : Math.round(
                                (
                                    tasks.filter(task => task.status === "Completed").length
                                    /
                                    tasks.length
                                ) * 100
                            )
                    }

                    %

                </h5>

                <p>Completion rate</p>

            </div>

            <section className="pending">

                <h6>

                    Pending (
                    {tasks.filter(task => task.status === "Pending").length}
                    )

                </h6>

                {

                    tasks
                        .filter(task => task.status === "Pending")
                        .map(task => (

                            <TaskCard
    key={task.task_id}
    taskId={task.task_id}
    title={task.title}
    priority={task.priority}
    duedate={formatDate(task.due_date)}
    completed={false}
    onEdit={() => handleEditTask(task)}
    onDelete={handleDeleteTask}
    onToggle={() => handleToggleStatus(task)}

/>

                        ))

                }

            </section>

            <section className="completed">

                <h6>

                    Completed (
                    {tasks.filter(task => task.status === "Completed").length}
                    )

                </h6>

                {

                    tasks
                        .filter(task => task.status === "Completed")
                        .map(task => (

                            <TaskCard
    key={task.task_id}
    taskId={task.task_id}
    title={task.title}
    priority={task.priority}
    duedate={formatDate(task.due_date)}
    completed={true}
    onEdit={() => handleEditTask(task)}
    onDelete={handleDeleteTask}
    onToggle={() => handleToggleStatus(task)}

/>

                        ))

                }

            </section>

            {
                showModal && (
                    <NewTaskModal
    onClose={() => {
        setShowModal(false);
        setSelectedTask(null);
    }}
    onTaskCreated={fetchTasks}
    selectedTask={selectedTask}
/>
                )
            }

        </AppLayout>

    );

}