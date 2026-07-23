import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "../styles/NoteCard.css";

export default function NoteCard({
    title,
    category,
    preview,
    tags,
    date,
    onEdit,
    onDelete
}) {

    return (

        <div className="note-card">

            <div className="notecard-header">

                <h2>{title}</h2>

                <p>{preview}</p>

            </div>

            <div className="notecard-footer">

                <span className="category">
                    {tags}
                </span>

                <div className="note-actions">

                    <span className="note-date">{date}</span>

                    <button
                        type="button"
                        className="icon-btn"
                        onClick={onEdit}
                        aria-label="Edit note"
                    >
                        <FiEdit2 />
                    </button>

                    <button
                        type="button"
                        className="icon-btn delete"
                        onClick={onDelete}
                        aria-label="Delete note"
                    >
                        <FiTrash2 />
                    </button>

                </div>

            </div>

        </div>

    );

}