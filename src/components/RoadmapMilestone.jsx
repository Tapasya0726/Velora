import "../styles/RoadmapMilestone.css"
import { FaCheckCircle, FaPlayCircle, FaRegCircle } from "react-icons/fa";

export default function RoadmapMilestone({title,duration,status}){
    return(
        <div className="milestone-card">
         <div className="milestone-header">
            <div className="milestone-icon">
                {status === "Completed" && 
                (<FaCheckCircle className="completed-icon"/>)}

                {status === "In Progress" &&
                (<FaPlayCircle className="progress-icon"/>)}

                {status === "Pending" &&
                (<FaRegCircle className="pending-icon"/>)}
            </div>
            <div className="milestone-info">
                <h5>{title}</h5>
                <p>{duration}</p>
            </div>

         </div>
         <span className={`status ${status.toLowerCase().replace(" ","-")}`}>
            {status}
         </span>
        </div>

    );
}