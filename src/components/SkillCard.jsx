import "../styles/SkillCard.css"
import { LuTrash2, LuPencilLine } from "react-icons/lu";

export default function SkillCard({icon, name,level,progress,onEdit,
    onDelete}){
    return(
        <div className="skill-card">
            <div className="skill-header">
                <div className="skill-info">
                    <div className="skill-icon">
                        {icon}
                    </div>
                    <h6>{name}</h6>
                </div>
                <div className="skill-actions">

    <span className={`level ${level.toLowerCase()}`}>
        {level}
    </span>

    <button
        className="icon-btn skill-edit-btn"
        onClick={onEdit}
    >
        <LuPencilLine />
    </button>

    <button
        className="icon-btn skill-delete-btn"
        onClick={onDelete}
    >
        <LuTrash2 />
    </button>

</div>
            </div>
            <div className="progress-bar">
                <div className={`progress-fill ${level.toLowerCase()}`}
                    style={{width: `${progress}%`}}>
                </div>
            </div>
        </div>

    );

}