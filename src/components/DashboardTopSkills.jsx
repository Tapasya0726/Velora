import "../styles/DashboardTopSkills.css";
import { getTopSkills } from "../services/dashboardService";
import { useEffect, useState } from "react";
import { getSkillIcon } from "../utils/getSkillIcon";
import { Link } from "react-router-dom";
import SkillItem from "./SkillItem";

export default function DashboardTopSkills(){

    const [skills, setSkills] = useState([]);

    useEffect(() => {

    const fetchTopSkills = async () => {

        try {

            const data = await getTopSkills();

console.log("Top Skills:", data);

            setSkills(data);

        } catch (error) {

            console.error(error);

        }

    };

    fetchTopSkills();

}, []);

    return(
    <section className="topskills">
        <div className="skills-header">
            <h3>Top skills</h3>
            <Link to="/skills">
    View all →
</Link>
        </div>

<div className="skills">

 {
    skills.map((skill) => (

    <SkillItem
        key={skill.skill_id}
        name={skill.skill_name}
        percentage={skill.progress}
        icon={getSkillIcon(skill.category)}
    />

))
 }

        </div>
    </section>
    );
}