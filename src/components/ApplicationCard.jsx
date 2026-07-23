import { FiCalendar, FiTrash2 } from "react-icons/fi";
import "../styles/ApplicationCard.css";

export default function ApplicationCard({ company, role, appliedDate, onClick,  onDelete }) {
    return (
        <div className="application-card"
         onClick={onClick}>
            <div className="application-header">

    <div className="application-title">

        <h6>{company}</h6>

        <button
            type="button"
            className="delete-btn"
            onClick={(e) => {
                e.stopPropagation();
                onDelete();
            }}
            aria-label="Delete application"
        >
            <FiTrash2 />
        </button>

    </div>

    <p>{role}</p>

</div>

            <div className="application-footer">
                <span><FiCalendar /> Applied {appliedDate}</span>
            </div>
        </div>
    );
}