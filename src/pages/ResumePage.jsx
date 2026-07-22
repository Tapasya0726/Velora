import AppLayout from "../layouts/AppLayout";
import ResumeSection from "../components/ResumeSection";
import { useEffect, useState } from "react";
import { getResume } from "../services/resumeService";
import { getEducation } from "../services/educationService";
import { getSkills } from "../services/skillsService";
import EditResumeModal from "../components/EditResumeModal";
import { saveResume } from "../services/resumeService";
import AddEducationModal from "../components/AddEducationModal";
import AddProjectModal from "../components/AddProjectModal";

import {
    createEducation,
    updateEducation,
     deleteEducation
} from "../services/educationService";
import {
    createProject,
    updateProject,
    deleteProject,
    getProjects
} from "../services/projectService";
import "../styles/ResumePage.css";

export default function ResumePage(){
    const [resume, setResume] = useState(null);
    const [education, setEducation] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [resumeScore, setResumeScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
const [editingProject, setEditingProject] = useState(null);

const [editingEducation, setEditingEducation] = useState(null);


    useEffect(() => {

    const fetchResume = async () => {

        try {

            const data = await getResume();
            setResume(data);

            const educationData = await getEducation();
            setEducation(educationData);

            const projectData = await getProjects();
            setProjects(projectData);

            const skillData = await getSkills();
            setSkills(skillData);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    fetchResume();

}, []);

useEffect(() => {

    let score = 0;

    if (resume?.summary) score += 15;

    if (resume?.github) score += 10;

    if (resume?.linkedin) score += 10;

    if (resume?.portfolio) score += 10;

    if (resume?.experience) score += 5;

    if (resume?.certifications) score += 5;

    if (resume?.achievements) score += 5;

    if (education.length > 0) score += 15;

    if (projects.length > 0) score += 15;

    if (projects.length >= 2) score += 5;

    if (skills.length >= 5) {

        score += 10;

    } else {

        score += skills.length * 2;

    }

    if (score > 100) score = 100;

    setResumeScore(score);

}, [resume, education, projects, skills]);

if (loading) {

    return (
        <AppLayout>
            <h2>Loading...</h2>
        </AppLayout>
    );

}
    return(
        <AppLayout>
            <div className="resume-page">
            <div className="header-row">
                <div className="resume-header">
                    <h6>CAREER</h6>
                        <h2>Resume</h2>
                        <p>
    Last updated{" "}
    {resume?.updated_at
        ? new Date(resume.updated_at).toLocaleDateString()
        : "Never"}
</p>
                </div>
                <div className="btns">
                    <button className="edit-btn" onClick={() => setIsEditModalOpen(true)}>
                        📝Edit Resume
                        </button>
                </div>
                </div>
                <div className="score-card">
                    <div
    className={`score-circle ${
        resumeScore >= 90
            ? "score-high"
            : resumeScore >= 60
            ? "score-medium"
            : "score-low"
    }`}
>
    {resumeScore}
</div>
                        <h4>Resume Score</h4>
                        <p>

    {resumeScore >= 90
        ? "Excellent! Your resume is ready for applications."
        : resumeScore >= 75
        ? "Great progress! A few more improvements can strengthen your resume."
        : resumeScore >= 50
        ? "Your resume is taking shape. Complete more sections to improve it."
        : "Complete your profile to build a stronger resume."}

</p>
                </div>
                <ResumeSection title="SUMMARY">
                    <p>{resume?.summary || "No summary added."}</p>
                </ResumeSection>
                <ResumeSection title="GITHUB">

    {resume?.github ? (

        <a
    className="resume-link"
    href={resume.github}
    target="_blank"
    rel="noreferrer"
>
    {resume.github}
</a>
    ) : (

        <p>No GitHub profile added.</p>

    )}

</ResumeSection>
<ResumeSection title="LINKEDIN">

    {resume?.linkedin ? (

        <a
        className="resume-link"
            href={resume.linkedin}
            target="_blank"
            rel="noreferrer"
        >
            {resume.linkedin}
        </a>

    ) : (

        <p>No LinkedIn profile added.</p>

    )}

</ResumeSection>
<ResumeSection title="PORTFOLIO">

    {resume?.portfolio ? (

        <a
        className="resume-link"
            href={resume.portfolio}
            target="_blank"
            rel="noreferrer"
        >
            {resume.portfolio}
        </a>

    ) : (

        <p>No portfolio added.</p>

    )}

</ResumeSection>
<ResumeSection title="EXPERIENCE">

    <p>
        {resume?.experience || "No experience added."}
    </p>

</ResumeSection>
<ResumeSection title="CERTIFICATIONS">

    <p>
        {resume?.certifications || "No certifications added."}
    </p>

</ResumeSection>
<ResumeSection title="ACHIEVEMENTS">

    <p>
        {resume?.achievements || "No achievements added."}
    </p>

</ResumeSection>

               <ResumeSection title="EDUCATION">

    <div className="section-actions">

        <button
            className="add-btn"
            onClick={() => {

                setEditingEducation(null);
                setIsEducationModalOpen(true);

            }}
        >
            + Add Education
        </button>

    </div>

    {education.length === 0 ? (

        <p>No education added.</p>

    ) : (

        education.map((edu) => (

            <div
                key={edu.education_id}
                className="education-item"
            >

                <div className="education-actions">

                    <button
                        className="education-edit-btn"
                        onClick={() => {

                            setEditingEducation(edu);
                            setIsEducationModalOpen(true);

                        }}
                    >
                        Edit
                    </button>

                    <button
                       className="education-delete-btn"
                        onClick={async () => {

                            if (!window.confirm("Delete this education?")) return;

                            try {

                                await deleteEducation(edu.education_id);

                                const updatedEducation = await getEducation();

                                setEducation(updatedEducation);

                            } catch (error) {

                                console.error(error);

                            }

                        }}
                    >
                        Delete
                    </button>

                </div>

                <h4>{edu.degree}</h4>

                <p>{edu.institution}</p>

                <p>
                    {edu.start_year} - {edu.end_year}
                </p>

                <p>
                    CGPA : {edu.cgpa}
                </p>

            </div>

        ))

    )}

</ResumeSection>

                <ResumeSection title="PROJECTS">

    <div className="section-actions">
        <button
            className="add-btn"
            onClick={() => {
                setEditingProject(null);
                setIsProjectModalOpen(true);
            }}
        >
            + Add Project
        </button>
    </div>

    {projects.length === 0 ? (

        <p>No projects added.</p>

    ) : (

        projects.map((project) => (

            <div
                key={project.project_id}
                className="project-item"
            >

                {/* 👇 MOVE THE BUTTONS HERE */}

                <div className="project-actions">

                    <button
                        className="project-edit-btn"
                        onClick={() => {

                            setEditingProject(project);
                            setIsProjectModalOpen(true);

                        }}
                    >
                        Edit
                    </button>

                    <button
                        className="project-delete-btn"
                        onClick={async () => {

                            if (!window.confirm("Delete this project?")) return;

                            try {

                                await deleteProject(project.project_id);

                                const updatedProjects = await getProjects();

                                setProjects(updatedProjects);

                            } catch (error) {

                                console.error(error);

                            }

                        }}
                    >
                        Delete
                    </button>

                </div>

                <h4>{project.project_name}</h4>

                <p>{project.tech_stack}</p>

                <p>{project.description}</p>

                {project.github_link && (
                    <p>
                        <strong>GitHub:</strong> {project.github_link}
                    </p>
                )}

                {project.live_link && (
                    <p>
                        <strong>Live:</strong> {project.live_link}
                    </p>
                )}

            </div>

        ))

    )}

</ResumeSection>

<ResumeSection title="SKILLS">

    {skills.length === 0 ? (

        <p>No skills added.</p>

    ) : (

        <div className="resume-skills">

            {skills.map((skill) => (

                <span key={skill.skill_id}>
                    {skill.skill_name}
                </span>

            ))}

        </div>

    )}

</ResumeSection>

            </div>
            <EditResumeModal
    isOpen={isEditModalOpen}
    resume={resume}
    onClose={() => setIsEditModalOpen(false)}
    onSave={async (data) => {

    try {

        const updatedResume = await saveResume(data);

setResume(updatedResume);

setIsEditModalOpen(false);

    } catch (error) {

        console.error(error);

    }

}}
/>

<AddEducationModal
    isOpen={isEducationModalOpen}
    editingEducation={editingEducation}
    onClose={() => {

        setEditingEducation(null);
        setIsEducationModalOpen(false);

    }}
    onSave={async (educationData) => {

        try {

            if (editingEducation) {

                await updateEducation(
                    editingEducation.education_id,
                    educationData
                );

            } else {

                await createEducation(educationData);

            }

            const updatedEducation = await getEducation();

            setEducation(updatedEducation);

            setEditingEducation(null);

            setIsEducationModalOpen(false);

        } catch (error) {

            console.error(error);

        }

    }}
/>

<AddProjectModal
    isOpen={isProjectModalOpen}
    editingProject={editingProject}
    onClose={() => {

        setEditingProject(null);
        setIsProjectModalOpen(false);

    }}
    onSave={async (projectData) => {

        try {

            if (editingProject) {

                await updateProject(
                    editingProject.project_id,
                    projectData
                );

            } else {

                await createProject(projectData);

            }

            const updatedProjects = await getProjects();

            setProjects(updatedProjects);

            setEditingProject(null);

            setIsProjectModalOpen(false);

        } catch (error) {

            console.error(error);

        }

    }}
/>
        </AppLayout>

    );
}