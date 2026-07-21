import { useState, useEffect } from "react";
import AppLayout from "../layouts/AppLayout";
import { getSkillIcon } from "../utils/getSkillIcon";
import SkillCard from "../components/SkillCard";
import AddSkillModal from "../components/AddSkillModal";
import {
    getSkills,
    createSkill,
    getSkillStats,
    updateSkill,
    deleteSkill,
} from "../services/skillsService";

import "../styles/SkillsPage.css";

export default function SkillsPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [editingSkill, setEditingSkill] = useState(null);

    const [skills, setSkills] = useState([]);

    const [stats, setStats] = useState({
        total: 0,
        averageProgress: 0,
        beginner: 0,
        intermediate: 0,
        advanced: 0
    });

    const categories = [...new Set(skills.map(skill => skill.category))];

    const refreshSkills = async () => {

    try {

        const skillsData = await getSkills();
        setSkills(skillsData);

        const statsData = await getSkillStats();
        setStats(statsData);

    } catch (error) {

        console.error(error);

    }

};

    useEffect(() => {

        refreshSkills();

    }, []);

    return (

        <>

            <AppLayout>

                <div className="skills-page">

                    <div className="header-row">

                        <div className="skills-header">

                            <div>

                                <h6>CAREER</h6>

                                <div className="skills-title">
                                    <h2>Skills</h2>
                                </div>

                                <span>
                                    {skills.length} skills · {categories.length} categories
                                </span>

                            </div>

                        </div>

                        <button
    className="add-skill"
    onClick={() => {

        setEditingSkill(null);
        setIsModalOpen(true);

    }}
>
    + Add Skill
</button>

                    </div>

                    <div className="skills-overview">

                        <h2>{stats.averageProgress}%</h2>

                        <p>Average Skill Level</p>

                        <span>
                            {stats.advanced} Advanced · {stats.intermediate} Intermediate · {stats.beginner} Beginner
                        </span>

                    </div>

                    {categories.map((category) => (

                        <div
                            className="category-section"
                            key={category}
                        >

                            <h5>{category.toUpperCase()}</h5>

                            <div className="skills-grid">

                                {skills
                                    .filter(skill => skill.category === category)
                                    .map(skill => (

                                        <SkillCard
                                            key={skill.skill_id}
                                            icon={getSkillIcon(skill.skill_name)}
                                            name={skill.skill_name}
                                            level={skill.level}
                                            progress={skill.progress}

                                              onEdit={() => {

        setEditingSkill(skill);
        setIsModalOpen(true);

    }}

    onDelete={async () => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this skill?"
    );

    if (!confirmDelete) return;

    try {

        await deleteSkill(skill.skill_id);

        await refreshSkills();

    } catch (error) {

        console.error(error);

    }

}}
                                        />

                                    ))}

                            </div>

                        </div>

                    ))}

                </div>

            </AppLayout>

            <AddSkillModal
                isOpen={isModalOpen}
                editingSkill={editingSkill}
                onClose={() => {

    setEditingSkill(null);
    setIsModalOpen(false);

}}
                onSave={async (skill) => {

    try {

        if (editingSkill) {

            await updateSkill(editingSkill.skill_id, skill);

        } else {

            await createSkill(skill);

        }

        await refreshSkills();

        setEditingSkill(null);
        setIsModalOpen(false);

    } catch (error) {

        console.error(error);

    }

}}
            />

        </>

    );

}