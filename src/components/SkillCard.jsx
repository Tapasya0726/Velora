import "../styles/SkillCard.css"
export default function SkillCard({icon, name,level,progress}){
    return(
        <div className="skill-card">
            <div className="skill-header">
                <div className="skill-info">
                    <div className="skill-icon">
                        {icon}
                    </div>
                    <h6>{name}</h6>
                </div>
                <span className={`level ${level.toLowerCase()}`}>
                    {level}
                </span>
            </div>
            <div className="progress-bar">
                <div className={`progress-fill ${level.toLowerCase()}`}
                    style={{width: `${progress}%`}}>
                </div>
            </div>
        </div>

    );

}