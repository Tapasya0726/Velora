import { useEffect, useState } from "react";
import api from "../api/axios";
import NoteCard from "../components/NoteCard";
import NewNoteModal from "../components/NewNoteModal";
import EmptyState from "../components/EmptyState";
import AppLayout from "../layouts/AppLayout";
import "../styles/NotesPage.css";

export default function NotesPage() {

    const [notes, setNotes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");

    const fetchNotes = async () => {

        try {

            const response = await api.get("/api/notes");

            setNotes(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        fetchNotes();

    }, []);

    const handleEditNote = (note) => {

        setSelectedNote(note);

        setShowModal(true);

    };

    const handleDeleteNote = async (noteId) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this note?"
        );

        if (!confirmDelete) return;

        try {

            await api.delete(`/api/notes/${noteId}`);

            fetchNotes();

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to delete note."
            );

        }

    };

    // Dynamic Categories
    const categories = [
        "All",
        ...new Set(notes.map(note => note.category))
    ];

    // Filter Notes
   const filteredNotes = notes.filter((note) => {

    const matchesCategory =
        selectedCategory === "All" ||
        note.category === selectedCategory;

    const matchesSearch =
        note.title
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        note.content
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        note.category
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        (note.tags || "")
            .toLowerCase()
            .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;

});

    return (

        <AppLayout>

            <div className="notes-page">

                {/* Header */}

                <div className="notes-header">

                    <h6>WORKSPACE</h6>

                    <h2>Notes</h2>

                    <p>{filteredNotes.length} notes</p>

                </div>

                {/* Search + New Button */}

                <div className="search-newnote">

                    <div className="search-container">

                        <input
    type="text"
    placeholder="Search notes..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>
                    </div>

                    <button
                        className="newnote"
                        onClick={() => {

                            setSelectedNote(null);

                            setShowModal(true);

                        }}
                    >
                        + New
                    </button>

                </div>

                {/* Categories */}

                <div className="categories">

                    {categories.map(category => (

                        <button

                            key={category}

                            className={
                                selectedCategory === category
                                    ? "active-category"
                                    : ""
                            }

                            onClick={() =>
                                setSelectedCategory(category)
                            }

                        >

                            {category}

                        </button>

                    ))}

                </div>

                {/* Notes */}

                <div className="notes-grid">

                    {filteredNotes.length === 0 ? (
                        <EmptyState
                            icon={<span>✎</span>}
                            title={notes.length === 0 ? "Start collecting ideas" : "No notes match your search"}
                            description={
                                notes.length === 0
                                    ? "Capture snippets, plans, and inspiration in one place so your workspace stays clear."
                                    : "Try a broader search or switch categories to uncover the note you need."
                            }
                            actionLabel={notes.length === 0 ? "Create your first note" : "Clear search"}
                            onAction={() => {
                                if (notes.length === 0) {
                                    setSelectedNote(null);
                                    setShowModal(true);
                                } else {
                                    setSearch("");
                                    setSelectedCategory("All");
                                }
                            }}
                        />
                    ) : (
                        filteredNotes.map(note => (

                            <NoteCard

                            key={note.note_id}

                            title={note.title}

                            category={note.category}

                            tags={note.tags}

                            preview={note.content}

                            date={
                                new Date(
                                    note.created_date
                                ).toLocaleDateString(
                                    "en-IN",
                                    {
                                        day: "numeric",
                                        month: "short"
                                    }
                                )
                            }

                            onEdit={() =>
                                handleEditNote(note)
                            }

                            onDelete={() =>
                                handleDeleteNote(
                                    note.note_id
                                )
                            }

                            />

                        ))
                    )}

                    <div

                        className="add-note-card"

                        onClick={() => {

                            setSelectedNote(null);

                            setShowModal(true);

                        }}

                    >

                        <span>+</span>

                        <p>New Note</p>

                    </div>

                </div>

            </div>

            {showModal && (

                <NewNoteModal

                    selectedNote={selectedNote}

                    onClose={() => {

                        setShowModal(false);

                        setSelectedNote(null);

                    }}

                    onNoteCreated={fetchNotes}

                />

            )}

        </AppLayout>

    );

}