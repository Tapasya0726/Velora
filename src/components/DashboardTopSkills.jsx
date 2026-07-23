import "../styles/DashboardTopSkills.css";
import { getTopSkills } from "../services/dashboardService";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { getSkillIcon } from "../utils/getSkillIcon";
import { Link } from "react-router-dom";
import SkillItem from "./SkillItem";

export default function DashboardTopSkills(){

    const [skills, setSkills] = useState([]);

    useEffect(() => {

    const fetchTopSkills = async () => {

        try {

            const data = await getTopSkills();

            setSkills(data);

        } catch (error) {

            console.error(error);

        }

    };

    fetchTopSkills();

}, []);

    return(
    <section className="topskills">
        <div className="topskills-header">
            <h3>Top skills</h3>
            <Link to="/skills" className="dashboard-link">
                <span>View all</span>
                <FiArrowRight />
            </Link>
        </div>

        <div className="skills">

            {
                skills.length === 0 ? (
                    <p className="no-skill-message">
                        No skills added yet!
                    </p>
                ) : (
                    skills.map((skill) => (
                        <SkillItem
                            key={skill.skill_id}
                            name={skill.skill_name}
                            percentage={skill.progress}
                            icon={getSkillIcon(skill.category)}
                        />
                    ))
                )
            }

        </div>
    </section>
    );
}