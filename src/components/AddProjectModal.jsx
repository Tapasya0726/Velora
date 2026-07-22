import { useEffect, useState } from "react";
import "../styles/AddProjectModal.css";

export default function AddProjectModal({
    isOpen,
    onClose,
    onSave,
    editingProject
}) {

    const [formData, setFormData] = useState({
        project_name: "",
        tech_stack: "",
        description: "",
        github_link: "",
        live_link: ""
    });

    useEffect(() => {

        if (editingProject) {

            setFormData({
                project_name: editingProject.project_name,
                tech_stack: editingProject.tech_stack,
                description: editingProject.description,
                github_link: editingProject.github_link,
                live_link: editingProject.live_link
            });

        } else {

            setFormData({
                project_name: "",
                tech_stack: "",
                description: "",
                github_link: "",
                live_link: ""
            });

        }

    }, [editingProject]);

    if (!isOpen) return null;

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>
                    {editingProject ? "Edit Project" : "Add Project"}
                </h2>

                <div className="form-group">
                    <label>Project Name</label>

                    <input
                        type="text"
                        value={formData.project_name}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                project_name: e.target.value
                            })
                        }
                    />
                </div>

                <div className="form-group">
                    <label>Tech Stack</label>

                    <input
                        type="text"
                        value={formData.tech_stack}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                tech_stack: e.target.value
                            })
                        }
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>

                    <textarea
                        rows="4"
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                description: e.target.value
                            })
                        }
                    />
                </div>

                <div className="form-group">
                    <label>GitHub Link</label>

                    <input
                        type="text"
                        value={formData.github_link}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                github_link: e.target.value
                            })
                        }
                    />
                </div>

                <div className="form-group">
                    <label>Live Link</label>

                    <input
                        type="text"
                        value={formData.live_link}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                live_link: e.target.value
                            })
                        }
                    />
                </div>

                <div className="modal-buttons">

                    <button onClick={onClose}>
                        Cancel
                    </button>

                    <button onClick={() => onSave(formData)}>
                        {editingProject ? "Update" : "Save"}
                    </button>

                </div>

            </div>

        </div>

    );

}