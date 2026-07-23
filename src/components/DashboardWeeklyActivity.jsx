import { useEffect, useMemo, useState } from "react";
import { FiZap } from "react-icons/fi";
import "../styles/DashboardWeeklyActivity.css";

const productivityTips = [
    "Break large goals into one focused milestone you can finish today.",
    "Use a short planning block at the start of your day to reduce decision fatigue.",
    "Keep your top three priorities visible so small wins compound quickly.",
    "When a task feels heavy, start with the smallest next action instead of the full task.",
    "A 25-minute focus session is often enough to create real momentum.",
    "Review your pending work before closing the day so tomorrow starts with clarity.",
    "Batch similar tasks together to reduce context switching and maintain flow.",
    "Track progress in visible steps so motivation stays high throughout the week.",
    "Protect your most important work block before checking notifications or messages.",
    "Finish one meaningful task before opening a new project to maintain focus."
];

export default function WeeklyActivity() {
    const [tip, setTip] = useState("");

    useEffect(() => {
        const randomTip = productivityTips[Math.floor(Math.random() * productivityTips.length)];
        setTip(randomTip);
    }, []);

    const tipIndex = useMemo(() => {
        return productivityTips.indexOf(tip);
    }, [tip]);

    return (
        <section className="weeklyactivity">
            <div className="activity-header">
                <h3>Productivity tip</h3>
                <span>{tipIndex >= 0 ? `Tip ${tipIndex + 1}` : "Fresh idea"}</span>
            </div>

            <div className="tip-content">
                <div className="tip-icon">
                    <FiZap />
                </div>
                <p>{tip}</p>
            </div>
        </section>
    );
}