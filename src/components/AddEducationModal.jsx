import { useEffect, useState } from "react";
import ModalPortal from "./ModalPortal";
import "../styles/AddEducationModal.css";

export default function AddEducationModal({ isOpen, onClose, onSave, editingEducation }) {
    const [formData, setFormData] = useState({
        institution: "",
        degree: "",
        cgpa: "",
        start_year: "",
        end_year: "",
    });

    useEffect(() => {
        if (editingEducation) {
            setFormData({
                institution: editingEducation.institution,
                degree: editingEducation.degree,
                cgpa: editingEducation.cgpa,
                start_year: editingEducation.start_year,
                end_year: editingEducation.end_year,
            });
        } else {
            setFormData({
                institution: "",
                degree: "",
                cgpa: "",
                start_year: "",
                end_year: "",
            });
        }
    }, [editingEducation]);

    if (!isOpen) return null;

    return (
        <ModalPortal>
            <div className="modal-overlay">
                <div className="modal" role="dialog" aria-modal="true">
                    <div className="modal-header">
                        <h2>{editingEducation ? "Edit Education" : "Add Education"}</h2>
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
                                    Institution <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.institution}
                                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="field-group">
                                <label className="field-label">
                                    Degree <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.degree}
                                    onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="field-group">
                                <label className="field-label">
                                    CGPA <span className="required">*</span>
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={formData.cgpa}
                                    onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="field-group">
                                <label className="field-label">
                                    Start Year <span className="required">*</span>
                                </label>
                                <input
                                    type="number"
                                    value={formData.start_year}
                                    onChange={(e) => setFormData({ ...formData, start_year: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="field-group">
                                <label className="field-label">
                                    End Year <span className="required">*</span>
                                </label>
                                <input
                                    type="number"
                                    value={formData.end_year}
                                    onChange={(e) => setFormData({ ...formData, end_year: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="modal-buttons">
                            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                            <button type="submit" className="save-btn">{editingEducation ? "Update" : "Save"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </ModalPortal>
    );
}
