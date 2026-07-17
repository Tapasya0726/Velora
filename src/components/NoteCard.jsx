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

                    <span>{date}</span>

                    <button
                        className="icon-btn"
                        onClick={onEdit}
                    >
                        ✏️
                    </button>

                    <button
                        className="icon-btn delete"
                        onClick={onDelete}
                    >
                        🗑️
                    </button>

                </div>

            </div>

        </div>

    );

}