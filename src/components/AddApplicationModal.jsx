import { useState, useEffect } from "react";
import api from "../api/axios";
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
        applied_date: ""
    });

  useEffect(() => {

    if (selectedApplication) {

        setFormData({

            company_name: selectedApplication.company_name,

            role: selectedApplication.role,

            status: selectedApplication.status,

            applied_date:
                selectedApplication.applied_date
                    ?.split("T")[0] || ""

        });

    } else {

        setFormData({

            company_name: "",

            role: "",

            status: "Applied",

            applied_date: ""

        });

    }

}, [selectedApplication]);


    if (!isOpen) return null;

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

   const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        if (selectedApplication) {

            await api.put(
                `/applications/${selectedApplication.application_id}`,
                formData
            );

        } else {

            await api.post(
                "/applications",
                formData
            );

        }

        onApplicationAdded();

        onClose();

    } catch (error) {

        console.error("Error saving application:", error);

    }

};

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>
    {selectedApplication
        ? "Edit Application"
        : "Add Application"}
</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="company_name"
                        placeholder="Company Name"
                        value={formData.company_name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="role"
                        placeholder="Role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option>Applied</option>
                        <option>Interview</option>
                        <option>Offer</option>
                        <option>Rejected</option>
                    </select>

                    <input
                        type="date"
                        name="applied_date"
                        value={formData.applied_date}
                        onChange={handleChange}
                        required
                    />

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
    {selectedApplication ? "Update" : "Save"}
</button>

                    </div>

                </form>

            </div>

        </div>

    );

}