import { useEffect, useState } from "react";
import "../styles/AddEducationModal.css";

export default function AddEducationModal({
    isOpen,
    onClose,
    onSave,
    editingEducation
}) {

    const [formData, setFormData] = useState({
        institution: "",
        degree: "",
        cgpa: "",
        start_year: "",
        end_year: ""
    });

    useEffect(() => {

        if (editingEducation) {

            setFormData({
                institution: editingEducation.institution,
                degree: editingEducation.degree,
                cgpa: editingEducation.cgpa,
                start_year: editingEducation.start_year,
                end_year: editingEducation.end_year
            });

        } else {

            setFormData({
                institution: "",
                degree: "",
                cgpa: "",
                start_year: "",
                end_year: ""
            });

        }

    }, [editingEducation]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">

            <div className="modal">

    <h2>
        {editingEducation ? "Edit Education" : "Add Education"}
    </h2>

    <div className="form-group">
        <label>Institution</label>

        <input
            type="text"
            value={formData.institution}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    institution: e.target.value,
                })
            }
        />
    </div>

    <div className="form-group">
        <label>Degree</label>

        <input
            type="text"
            value={formData.degree}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    degree: e.target.value,
                })
            }
        />
    </div>

    <div className="form-group">
        <label>CGPA</label>

        <input
            type="number"
            step="0.01"
            value={formData.cgpa}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    cgpa: e.target.value,
                })
            }
        />
    </div>

    <div className="form-group">
        <label>Start Year</label>

        <input
            type="number"
            value={formData.start_year}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    start_year: e.target.value,
                })
            }
        />
    </div>

    <div className="form-group">
        <label>End Year</label>

        <input
            type="number"
            value={formData.end_year}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    end_year: e.target.value,
                })
            }
        />
    </div>

    <div className="modal-buttons">

        <button onClick={onClose}>
            Cancel
        </button>

        <button
            onClick={() => onSave(formData)}
        >
            {editingEducation ? "Update" : "Save"}
        </button>

    </div>

</div>

        </div>
    );

}