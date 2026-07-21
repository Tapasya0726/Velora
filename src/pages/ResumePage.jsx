import AppLayout from "../layouts/AppLayout";
import ResumeSection from "../components/ResumeSection";
import { useEffect, useState } from "react";
import { getResume } from "../services/resumeService";
import { getEducation } from "../services/educationService";
import { getProjects } from "../services/projectService";
import { getSkills } from "../services/skillsService";
import EditResumeModal from "../components/EditResumeModal";
import { saveResume } from "../services/resumeService";
import AddEducationModal from "../components/AddEducationModal";

import {
    createEducation,
    updateEducation
} from "../services/educationService";
import "../styles/ResumePage.css";

export default function ResumePage(){
    const [resume, setResume] = useState(null);
    const [education, setEducation] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

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
                    <p>{resume?.summary || "No summary added."}</p>
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

    {projects.length === 0 ? (

        <p>No projects added.</p>

    ) : (

        projects.map((project) => (

            <div
                key={project.project_id}
                className="project-item"
            >
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
        </AppLayout>

    );
}