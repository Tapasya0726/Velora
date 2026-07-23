import { useEffect, useState } from "react";
import ModalPortal from "./ModalPortal";
import "../styles/EditResumeModal.css";

export default function EditResumeModal({ isOpen, onClose, onSave, resume }) {
    const [formData, setFormData] = useState({
        summary: "",
        github: "",
        linkedin: "",
        portfolio: "",
        experience: "",
        certifications: "",
        achievements: "",
    });

    useEffect(() => {
        if (resume) {
            setFormData({
                summary: resume.summary || "",
                github: resume.github || "",
                linkedin: resume.linkedin || "",
                portfolio: resume.portfolio || "",
                experience: resume.experience || "",
                certifications: resume.certifications || "",
                achievements: resume.achievements || "",
            });
        }
    }, [resume]);

    if (!isOpen) return null;

    return (
        <ModalPortal>
            <div className="modal-overlay">
                <div className="modal" role="dialog" aria-modal="true">
                    <div className="modal-header">
                        <h2>Edit Resume</h2>
                        <button type="button" className="close-btn" onClick={onClose}>✕</button>
                    </div>

                    <div className="modal-body">
                        <div className="field-group">
                            <label className="field-label">
                                Professional Summary <span className="required">*</span>
                            </label>
                            <textarea
                                value={formData.summary}
                                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                                rows={4}
                                required
                            />
                        </div>

                        <div className="social-grid">
                            <div className="field-group social-field">
                                <label className="field-label">GitHub</label>
                                <input
                                    type="text"
                                    value={formData.github}
                                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                                />
                            </div>

                            <div className="field-group social-field">
                                <label className="field-label">LinkedIn</label>
                                <input
                                    type="text"
                                    value={formData.linkedin}
                                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                />
                            </div>

                            <div className="field-group social-field">
                                <label className="field-label">Portfolio</label>
                                <input
                                    type="text"
                                    value={formData.portfolio}
                                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="field-group">
                            <label className="field-label">Experience</label>
                            <textarea
                                rows={3}
                                value={formData.experience}
                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                            />
                        </div>

                        <div className="field-group">
                            <label className="field-label">Certifications</label>
                            <textarea
                                rows={3}
                                value={formData.certifications}
                                onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                            />
                        </div>

                        <div className="field-group">
                            <label className="field-label">Achievements</label>
                            <textarea
                                rows={3}
                                value={formData.achievements}
                                onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="modal-buttons">
                        <button type="button" onClick={onClose}>Cancel</button>
                        <button type="button" onClick={() => onSave(formData)}>Save</button>
                    </div>
                </div>
            </div>
        </ModalPortal>
    );
}
