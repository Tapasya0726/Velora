 
 export default function SkillItem(props){
    return(
 <div className="skill">
            <div className="skill-item">
                <span className={`skill-icon ${props.iconClass}`}>{props.icon}</span>
                <span>{props.name}</span>
                <span>{props.percentage}%</span>
            </div>

            <div className="progress-bar">
                <div className={`progress ${props.progressClass}`}></div>
            </div>
        </div>

        
                );
 }