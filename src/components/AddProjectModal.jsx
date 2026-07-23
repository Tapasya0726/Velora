import { useEffect, useState } from "react";
import ModalPortal from "./ModalPortal";
import "../styles/AddProjectModal.css";

export default function AddProjectModal({ isOpen, onClose, onSave, editingProject }) {
    const [formData, setFormData] = useState({
        project_name: "",
        tech_stack: "",
        description: "",
        github_link: "",
        live_link: "",
    });

    useEffect(() => {
        if (editingProject) {
            setFormData({
                project_name: editingProject.project_name,
                tech_stack: editingProject.tech_stack,
                description: editingProject.description,
                github_link: editingProject.github_link,
                live_link: editingProject.live_link,
            });
        } else {
            setFormData({
                project_name: "",
                tech_stack: "",
                description: "",
                github_link: "",
                live_link: "",
            });
        }
    }, [editingProject]);

    if (!isOpen) return null;

    return (
        <ModalPortal>
            <div className="modal-overlay">
                <div className="modal" role="dialog" aria-modal="true">
                    <div className="modal-header">
                        <h2>{editingProject ? "Edit Project" : "Add Project"}</h2>
                        <button type="button" className="close-btn" onClick={onClose}>✕</button>
                    </div>

                    <form
                        className="modal-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            onSave(formData);
                        }}
                    >
                        <div className="modal-body">
                            <div className="field-group">
                                <label className="field-label">
                                    Project Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.project_name}
                                    onChange={(e) => setFormData({ ...formData, project_name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="field-group">
                                <label className="field-label">
                                    Tech Stack <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.tech_stack}
                                    onChange={(e) => setFormData({ ...formData, tech_stack: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="field-group">
                                <label className="field-label">
                                    Description <span className="required">*</span>
                                </label>
                                <textarea
                                    rows="4"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="field-group">
                                <label className="field-label">GitHub Link</label>
                                <input
                                    type="text"
                                    value={formData.github_link}
                                    onChange={(e) => setFormData({ ...formData, github_link: e.target.value })}
                                />
                            </div>

                            <div className="field-group">
                                <label className="field-label">Live Link</label>
                                <input
                                    type="text"
                                    value={formData.live_link}
                                    onChange={(e) => setFormData({ ...formData, live_link: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="modal-buttons">
                            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                            <button type="submit" className="save-btn">{editingProject ? "Update" : "Save"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </ModalPortal>
    );
}
