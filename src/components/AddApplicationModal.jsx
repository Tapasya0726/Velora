import { useState, useEffect } from "react";
import api from "../api/axios";
import ModalPortal from "./ModalPortal";
import "../styles/AddApplicationModal.css";

export default function AddApplicationModal({
    isOpen,
    onClose,
    onApplicationAdded,
    selectedApplication,
}) {
    const [formData, setFormData] = useState({
        company_name: "",
        role: "",
        status: "Applied",
        applied_date: "",
    });

    useEffect(() => {
        if (selectedApplication) {
            setFormData({
                company_name: selectedApplication.company_name,
                role: selectedApplication.role,
                status: selectedApplication.status,
                applied_date: selectedApplication.applied_date?.split("T")[0] || "",
            });
        } else {
            setFormData({
                company_name: "",
                role: "",
                status: "Applied",
                applied_date: "",
            });
        }
    }, [selectedApplication]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (selectedApplication) {
                await api.put(`/applications/${selectedApplication.application_id}`, formData);
            } else {
                await api.post("/applications", formData);
            }

            onApplicationAdded();
            onClose();
        } catch (error) {
            console.error("Error saving application:", error);
        }
    };

    return (
        <ModalPortal>
            <div className="modal-overlay">
                <div className="modal" role="dialog" aria-modal="true">
                    <div className="modal-header">
                        <h2>{selectedApplication ? "Edit Application" : "Add Application"}</h2>
                        <button type="button" className="close-btn" onClick={onClose}>✕</button>
                    </div>

                    <form onSubmit={handleSubmit} className="modal-body">
                        <div className="field-group">
                            <label className="field-label">
                                Company Name <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                name="company_name"
                                placeholder="Company Name"
                                value={formData.company_name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="field-group">
                            <label className="field-label">
                                Role <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                name="role"
                                placeholder="Role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="field-group">
                            <label className="field-label">
                                Status <span className="required">*</span>
                            </label>
                            <select name="status" value={formData.status} onChange={handleChange} required>
                                <option>Applied</option>
                                <option>Interview</option>
                                <option>Offer</option>
                                <option>Rejected</option>
                            </select>
                        </div>

                        <div className="field-group">
                            <label className="field-label">
                                Applied Date <span className="required">*</span>
                            </label>
                            <input
                                type="date"
                                name="applied_date"
                                value={formData.applied_date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="modal-buttons">
                            <button type="button" className="cancel-btn" onClick={onClose}>
                                Cancel
                            </button>
                            <button type="submit" className="save-btn">
                                {selectedApplication ? "Update" : "Save"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </ModalPortal>
    );
}
