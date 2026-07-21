import { useState, useEffect } from "react";
import "../styles/AddSkillModal.css";

export default function AddSkillModal({
    isOpen,
    onClose,
    onSave,
    editingSkill = null
}) {

    const [skillName, setSkillName] = useState("");
    const [category, setCategory] = useState("");
    const [progress, setProgress] = useState(50);

    useEffect(() => {

        if (editingSkill) {

            setSkillName(editingSkill.skill_name || editingSkill.name);
            setCategory(editingSkill.category);
            setProgress(editingSkill.progress);

        } else {

            setSkillName("");
            setCategory("");
            setProgress(50);

        }

    }, [editingSkill, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!skillName.trim() || !category.trim()) {
            alert("Please fill all fields.");
            return;
        }

        onSave({
            skill_name: skillName.trim(),
            category: category.trim(),
            progress: Number(progress)
        });

    };

    return (

        <div className="modal-overlay">

            <div className="modal-container">

                <div className="modal-header">

                    <h2>
                        {editingSkill ? "Edit Skill" : "Add Skill"}
                    </h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        ✕
                    </button>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>Skill Name</label>

                        <input
                            type="text"
                            placeholder="e.g. React.js"
                            value={skillName}
                            onChange={(e) =>
                                setSkillName(e.target.value)
                            }
                        />

                    </div>

                    <div className="form-group">

                        <label>Category</label>

                        <input
                            type="text"
                            placeholder="e.g. Frontend"
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                        />

                    </div>

                    <div className="form-group">

                        <label>
                            Progress ({progress}%)
                        </label>

                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={(e) =>
                                setProgress(e.target.value)
                            }
                        />

                    </div>

                    <div className="modal-buttons">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            {editingSkill
                                ? "Update Skill"
                                : "Save Skill"}
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}