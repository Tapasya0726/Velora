import AppLayout from "../layouts/AppLayout";
import ResumeSection from "../components/ResumeSection";
import "../styles/ResumePage.css";

export default function ResumePage(){
    const summary ="Computer Science student passionate about full-stack development.";
    const education ={
    degree:"B.Tech Computer Science",
    college:"UPES",
    sgpa:"8.56",
    year:"2024-2028"
    }
    const projects=[
    {
    title:"Velora",
    tech:"React • Node • PostgreSQL",
    description:"Student Productivity Workspace"
    },
    {
    title:"ResqPulse",
    tech:"React • Node • MongoDB",
    description:"Emergency Response Help App"
    }
];
const skills = [
    "React",
    "Node.js",
    "PostgreSQL",
    "Git",
    "Tailwind CSS"
];
    return(
        <AppLayout>
            <div className="resume-page">
            <div className="header-row">
                <div className="resume-header">
                    <h6>CAREER</h6>
                        <h2>Resume</h2>
                        <p>Last updated today</p>
                </div>
                <div className="btns">
                    <button className="edit-btn">
                        📝Edit
                    </button>
                    <button className="download-btn">
                        ⬇️PDF
                    </button>
                </div>
                </div>
                <div className="score-card">
                    <div className="score-circle">
                        82
                    </div>
                        <h4>Resume Score</h4>
                        <p>Great start! Add another project to improve your resume.</p>
                </div>
                <ResumeSection title="SUMMARY">
                    <p>{summary}</p>
                </ResumeSection>

                <ResumeSection title="EDUCATION">
                    <h4>{education.degree}</h4>
                    <p>{education.college}</p>
                    <p>{education.year}</p>
                    <p>CGPA : {education.sgpa}</p>
                </ResumeSection>

                <ResumeSection title="PROJECTS">
                    {projects.map(project => (
                    <div key={project.title}>
                    <h4>{project.title}</h4>
                    <p>{project.tech}</p>
                    <p>{project.description}</p>
                    </div>
                   ))}
                </ResumeSection>

                <ResumeSection title="SKILLS">
                    <div className="resume-skills">
                        {skills.map(skill => (
                            <span key={skill}>
                                {skill}
                            </span>
                        ))}

                    </div>
                </ResumeSection>

            </div>
        </AppLayout>

    );
}