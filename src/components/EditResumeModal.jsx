import { useEffect, useState } from "react";
import "../styles/EditResumeModal.css";

export default function EditResumeModal({
    isOpen,
    onClose,
    onSave,
    resume
}) {

    const [formData, setFormData] = useState({
        summary: "",
        github: "",
        linkedin: "",
        portfolio: "",
        experience: "",
        certifications: "",
        achievements: ""
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
                achievements: resume.achievements || ""
            });

        }

    }, [resume]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">

            <div className="modal">

    <h2>Edit Resume</h2>

    <div className="form-group">
        <label>Professional Summary</label>

        <textarea
            value={formData.summary}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    summary: e.target.value,
                })
            }
            rows={4}
        />
    </div>

    <div className="form-group">
        <label>GitHub</label>

        <input
            type="text"
            value={formData.github}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    github: e.target.value,
                })
            }
        />
    </div>

    <div className="form-group">
        <label>LinkedIn</label>

        <input
            type="text"
            value={formData.linkedin}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    linkedin: e.target.value,
                })
            }
        />
    </div>

    <div className="form-group">
        <label>Portfolio</label>

        <input
            type="text"
            value={formData.portfolio}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    portfolio: e.target.value,
                })
            }
        />
    </div>

    <div className="form-group">
        <label>Experience</label>

        <textarea
            rows={3}
            value={formData.experience}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    experience: e.target.value,
                })
            }
        />
    </div>

    <div className="form-group">
        <label>Certifications</label>

        <textarea
            rows={3}
            value={formData.certifications}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    certifications: e.target.value,
                })
            }
        />
    </div>

    <div className="form-group">
        <label>Achievements</label>

        <textarea
            rows={3}
            value={formData.achievements}
            onChange={(e) =>
                setFormData({
                    ...formData,
                    achievements: e.target.value,
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
            Save
        </button>

    </div>

</div>

        </div>
    );

}