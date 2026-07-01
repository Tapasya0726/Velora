import "../styles/ResumeSection.css";
export default function ResumeSection({title,children}){
    return(
        <div className="resume-section">
            <h6>{title}</h6>
            <div className="resume-content">
                {children}
            </div>
        </div>
    );
}