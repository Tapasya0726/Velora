import { useState, useEffect } from "react";
import { FiPause, FiPlay, FiRotateCcw } from "react-icons/fi";
import api from "../api/axios";
import "../styles/FocusPage.css";
import AppLayout from "../layouts/AppLayout";

export default function FocusPage() {

    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);

    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState("WORK");

    const [session, setSession] = useState(1);

    const [goals, setGoals] = useState([]);

    const [stats, setStats] = useState({
    sessions: 0,
    focusTime: 0
});

const fetchStats = async () => {

    try {

        const response = await api.get("/focus/stats");

        setStats(response.data);

    } catch (error) {

        console.error(error);

    }

};

    const fetchGoals = async () => {

        try {

            const response = await api.get("/tasks/goals");

            setGoals(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const handleCompleteGoal = async (taskId) => {

    try {

        await api.patch(`/tasks/${taskId}/complete`);

        fetchGoals();

    } catch (error) {

        console.error(error);

        alert(
            error.response?.data?.message ||
            "Failed to complete goal."
        );

    }

};


useEffect(() => {

    fetchGoals();
    fetchStats();

}, []);

    useEffect(() => {

        let interval;

        if (isRunning) {

            interval = setInterval(async () => {

                if (seconds > 0) {

                    setSeconds(seconds - 1);

                } else {

                    if (minutes > 0) {

                        setMinutes(minutes - 1);
                        setSeconds(59);

                    } else {

                        clearInterval(interval);

                        setIsRunning(false);

                        if (mode === "WORK") {
                            try {

    await api.post("/focus/session", {

        mode: "WORK",
        duration: 25

    });

    fetchStats();

} catch (error) {

    console.error(error);

}

                            if (session < 4) {

                                alert("Work session completed! Time for a break.");

                                setMode("BREAK");
                                setMinutes(5);
                                setSeconds(0);

                                setSession(session + 1);

                            } else {

                                alert("Awesome! Take a long break.");

                                setMode("LONG BREAK");
                                setMinutes(15);
                                setSeconds(0);

                                setSession(1);

                            }

                        } else {

                            alert("Break finished! Back to work.");

                            setMode("WORK");
                            setMinutes(25);
                            setSeconds(0);

                        }

                    }

                }

            }, 1000);

        }

        return () => clearInterval(interval);

    }, [isRunning, minutes, seconds]);

    return (

        <AppLayout>

            <div className="focus-page">

                <div className="focus-header">

                    <h6>WORKSPACE</h6>

                    <h2>Focus</h2>

                    <p>Pomodoro · {stats.sessions} session{stats.sessions !== 1 ? "s" : ""} completed</p>

                </div>

                <div className="timer-card">

                    <div className="streak">
                        <p>{stats.streak} {stats.streak === 1 ? "Day" : "Days"} Streak</p>
                    </div>

                    <h1>
                        {String(minutes).padStart(2, "0")}:
                        {String(seconds).padStart(2, "0")}
                    </h1>

                    <p className="mode-label">
                        {mode}
                    </p>

                    <div className="timer-buttons">

                        <button
                            type="button"
                            className="resume-pause"
                            onClick={() => setIsRunning(!isRunning)}
                        >
                            {isRunning ? <><FiPause /><span>Pause</span></> : <><FiPlay /><span>Resume</span></>}
                        </button>

                        <button
                            type="button"
                            className="restart"
                            onClick={() => {

                                setIsRunning(false);

                                if (mode === "WORK") {

                                    setMinutes(25);

                                } else if (mode === "BREAK") {

                                    setMinutes(5);

                                } else {

                                    setMinutes(15);

                                }

                                setSeconds(0);

                            }}
                        >
                            <FiRotateCcw />
                            <span>Restart</span>
                        </button>

                    </div>

                    <p className="session-count">
                        Session {session} of 4
                    </p>

                </div>

                <div className="modes">

                    <div
                        className={`mode ${mode === "WORK" ? "active-mode" : ""}`}
                        onClick={() => {

                            setMode("WORK");
                            setMinutes(25);
                            setSeconds(0);
                            setIsRunning(false);

                        }}
                    >
                        <h6>25</h6>
                        <p>Work</p>
                    </div>

                    <div
                        className={`mode ${mode === "BREAK" ? "active-mode" : ""}`}
                        onClick={() => {

                            setMode("BREAK");
                            setMinutes(5);
                            setSeconds(0);
                            setIsRunning(false);

                        }}
                    >
                        <h6>5</h6>
                        <p>Break</p>
                    </div>

                    <div
                        className={`mode ${mode === "LONG BREAK" ? "active-mode" : ""}`}
                        onClick={() => {

                            setMode("LONG BREAK");
                            setMinutes(15);
                            setSeconds(0);
                            setIsRunning(false);

                        }}
                    >
                        <h6>15</h6>
                        <p>Long</p>
                    </div>

                </div>

                <div className="bottom-section">

                    <div className="todays-goals">

                        <h6>Goals</h6>

                        {goals.length === 0 ? (

                            <p>No pending goals</p>

                        ) : (

                            goals.map(goal => (

                                <div
                                    key={goal.task_id}
                                    className="goal-item"
                                >

                                    <input
    type="checkbox"
    checked={goal.status === "Completed"}
    onChange={() =>
        handleCompleteGoal(goal.task_id)
    }
/>

                                    <span
                                        className={
                                            goal.status === "Completed"
                                                ? "goal-completed"
                                                : ""
                                        }
                                    >
                                        {goal.title}
                                    </span>

                                </div>

                            ))

                        )}

                    </div>

                    <div className="focus-stats">

                        <h6>Stats</h6>

                        <div className="focus-stats-grid">

                            <div className="focus-stat-card">

                                <h5>{stats.sessions}</h5>

                                <p>Sessions</p>

                            </div>

                            <div className="focus-stat-card">

                                <h5>
    {Math.floor(stats.focusTime / 60)}h {stats.focusTime % 60}m
</h5>

                                <p>Focus Time</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </AppLayout>

    );

}