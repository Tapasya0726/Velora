import { useState, useEffect } from "react";
import api from "../api/axios";
import "../styles/NewTaskModal.css";

export default function NewTaskModal({ onClose, onTaskCreated,  selectedTask

 }) {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("High");
    const [dueDate, setDueDate] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

    if (selectedTask) {

        setTitle(selectedTask.title);

        setPriority(selectedTask.priority);

        setDueDate(
            selectedTask.due_date.split("T")[0]
        );

    }

}, [selectedTask]);

    const handleSubmit = async () => {

    if (!title || !priority || !dueDate) {

        alert("Please fill all fields.");

        return;

    }

    try {

        setLoading(true);

        if (selectedTask) {

    await api.put(
        `/tasks/${selectedTask.task_id}`,
        {
            title,
            priority,
            due_date: dueDate,
            status: selectedTask.status
        }
    );

} else {

        const response = await api.post(
            "/tasks",
            {
                title,
                priority,
                due_date: dueDate
            }
        );
    }



        onTaskCreated();

        onClose();

    } catch (error) {

        console.error(error);

        alert(
            error.response?.data?.message ||
            "Failed to create task."
        );

    } finally {

        setLoading(false);

    }

};
    return (
        <div
            className="modal-overlay"
            onClick={onClose}
        >
            <div
                className="modal"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header">
                    <h2>{selectedTask ? "Edit Task" : "New Task"}</h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                <div className="modal-body">

                    <label>Task Title</label>

                    <input
                        type="text"
                        placeholder="Enter task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label>Priority</label>

                    <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    >
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>

                    <label>Due Date</label>

                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />

                </div>

                <div className="modal-buttons">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
    className="create-btn"
    onClick={handleSubmit}
    disabled={loading}
>
    {
    loading
        ? (
            selectedTask
                ? "Updating..."
                : "Creating..."
        )
        : (
            selectedTask
                ? "Update Task"
                : "Create Task"
        )
}
</button>

                </div>

            </div>
        </div>
    );
}