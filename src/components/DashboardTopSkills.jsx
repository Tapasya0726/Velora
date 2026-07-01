import "../styles/DashboardTopSkills.css";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import SkillItem from "./SkillItem";

export default function DashboardTopSkills(){

    const skills=[
        {
            name:"Javascript",
            percentage:85,
            icon:<FaJs/>,
            iconClass: "js-icon",
    progressClass: "js-progress"
  },
  {
    name:"React",
            percentage:50,
            icon:<FaReact/>,
            iconClass: "react-icon",
    progressClass: "react-progress"
  },
  {
    name:"Node.js",
            percentage:25,
            icon:<FaNodeJs/>,
            iconClass: "node-icon",
    progressClass: "node-progress"
  }

    ]



    return(
    <section className="topskills">
        <div className="skills-header">
            <h3>Top skills</h3>
            <a href="#">View all →</a>
        </div>

<div className="skills">

 {
    skills.map((skill,index) => (
        <SkillItem
        key={index}
        name={skill.name}
        percentage={skill.percentage}
        icon={skill.icon}
        iconClass={skill.iconClass}
        progressClass={skill.progressClass}
        />
    ))
 }

        </div>
    </section>
    );
}