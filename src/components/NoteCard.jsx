import "../styles/NoteCard.css";

export default function NoteCard({title,category,preview,date}){
    return(
        <div className="note-card">
            <div className="notecard-header">
            <h3>{title}</h3>
            <p>{preview}</p>
            </div>

            <div className="notecard-footer">
                <span className={`category category-${category.toLowerCase()}`}>
                    {category}
                    </span>
                <span>{date}</span>
            </div>

        </div>

    )
}