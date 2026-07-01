import NoteCard from "../components/NoteCard"
import AppLayout from "../layouts/AppLayout";
import "../styles/NotesPage.css";

export default function NotesPage(){
    const notes=[
        {
            id:1,
            title:"JWT Auth Deep Dive",
            category:"auth",
            preview:"Access tokens, refresh rotation, bcrypt hashing for the auth module.",
            date:"Jun 7"
        },
        {
            id:2,
            title:"PostgreSQL Schema",
            preview:"All tables, foreign keys, indexes. Normalized to 3NF.",
            category:"sql",
            date:"Jun 6"
        },
        {
            id:3,
            title:"React State Architecture",
            preview:"Context API vs Redux. Chose Context + useReducer.",
            category:"react",
            date:"Jun 5"
        },
        {
            id:4,
            title:"REST API Design",
            preview:"Base URL /api/v1. CRUD patterns. Middleware chain.",
            category:"api",
            date:"Jun 4"
        }
    ]

    const categories = [
        "All",
        "Frontend",
        "Backend",
        "Career"
    ]
    
    return(
        <AppLayout>
         <div className="notes-page">
            <div className="notes-header">
                <h6>WORKSPACE</h6>
                <h2>Notes</h2>
                <p>4 notes</p>
        </div>
            <div className="search-newnote">
                <div className="search-container">
                <input 
                type="text"
                placeholder="Search notes..."
                />
                    </div>
                <button className="newnote">
                    + New 
                </button>
            </div>
            

            <div className="categories">
        {categories.map(category => (
            <button key={category}>
                {category}
            </button>
        ))}
        </div>

        <div className="notes-grid">
        {notes.map(note => (
            <NoteCard
            key={note.id}
            title={note.title}
            category={note.category}
            preview={note.preview}
            date={note.date}
            />
        ))}

        <div className="add-note-card">
            <span>+</span>
            <p>New Note</p>
        </div>
        </div>
        </div>
        
</AppLayout>
    );
}