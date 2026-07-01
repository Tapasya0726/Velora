import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import {
    SiTailwindcss,
    SiPostgresql,
    SiExpress,
    SiFigma
} from "react-icons/si";
import SkillCard from "../components/SkillCard"; 
import AppLayout from "../layouts/AppLayout";
import "../styles/SkillsPage.css";

export default function SkillsPage(){
    const skills = [
        {
            id:1,
            icon:<FaReact/>,
            name: "React.js",
            category: "Frontend",
            level: "Advanced",
            progress: 90
        },
        {
            id: 2,
            icon: <FaHtml5 />,
            name: "HTML",
            category: "Frontend",
            level: "Advanced",
            progress: 95
        },
        {
            id: 3,
            icon: <FaCss3Alt />,
            name: "CSS",
            category: "Frontend",
            level: "Intermediate",
            progress: 75
        },
        {
            id: 4,
            icon: <FaJs />,
            name: "JavaScript",
            category: "Frontend",
            level: "Intermediate",
            progress: 70
        },
        {
            id: 5,
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
            category: "Frontend",
            level: "Beginner",
            progress: 45
        },
        {
            id: 6,
            icon: <FaNodeJs />,
            name: "Node.js",
            category: "Backend",
            level: "Intermediate",
            progress: 65
        },
        {
            id: 7,
            icon: <SiExpress />,
            name: "Express.js",
            category: "Backend",
            level: "Beginner",
            progress: 40
        },
        {
            id: 8,
            icon: <SiPostgresql />,
            name: "PostgreSQL",
            category: "Backend",
            level: "Beginner",
            progress: 35
        },
        {
            id: 9,
            icon: <FaGitAlt />,
            name: "Git",
            category: "Tools",
            level: "Intermediate",
            progress: 70
        }
    ];
        
    return(
        <AppLayout>
            <div className="skills-page">
                <div className="header-row">

                    <div className="skills-header">
                        <div>
                        <h6>CAREER</h6>
                          <div className="skills-title">
                        <h2>Skills</h2>
                        </div>
                        <span>{skills.length} skills · 3 categories</span>
                        </div>
                    </div>

                    <button className="add-skill">
                        + Add Skill
                    </button>

                </div>
                                <div className="skills-overview">

                    <h2>75%</h2>

                    <p>Average Skill Level</p>

                    <span>
                        3 Advanced · 4 Intermediate · 3 Beginner
                    </span>

                </div>
                 <div className="category-section">

                    <h5>FRONTEND</h5>

                    <div className="skills-grid">

                        {skills
                            .filter(skill => skill.category === "Frontend")
                            .map(skill => (
                                <SkillCard
                                    key={skill.id}
                                    icon={skill.icon}
                                    name={skill.name}
                                    level={skill.level}
                                    progress={skill.progress}
                                />
                            ))
                        }

                    </div>

                </div>
                <div className="category-section">

                    <h5>BACKEND</h5>

                    <div className="skills-grid">

                        {skills
                            .filter(skill => skill.category === "Backend")
                            .map(skill => (
                                <SkillCard
                                    key={skill.id}
                                    icon={skill.icon}
                                    name={skill.name}
                                    level={skill.level}
                                    progress={skill.progress}
                                />
                            ))
                        }

                    </div>
                </div>

                                <div className="category-section">

                    <h5>TOOLS</h5>

                    <div className="skills-grid">

                        {skills
                            .filter(skill => skill.category === "Tools")
                            .map(skill => (
                                <SkillCard
                                    key={skill.id}
                                    icon={skill.icon}
                                    name={skill.name}
                                    level={skill.level}
                                    progress={skill.progress}
                                />
                            ))
                        }

                    </div>

                </div>                
            </div>
        </AppLayout>

    );
}