import { useEffect, useState } from "react";
import api from "../api/axios";
import "../styles/NewNoteModal.css";

export default function NewNoteModal({
    onClose,
    onNoteCreated,
    selectedNote
}) {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (selectedNote) {

            setTitle(selectedNote.title);
            setCategory(selectedNote.category);
            setContent(selectedNote.content);
            setTags(selectedNote.tags || "");

        } else {

            setTitle("");
            setCategory("");
            setContent("");
            setTags("");

        }

    }, [selectedNote]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!title || !category || !content) {

            alert("Please fill all required fields.");

            return;

        }

        try {

            setLoading(true);

            if (selectedNote) {

                await api.put(
                    `/api/notes/${selectedNote.note_id}`,
                    {
                        title,
                        category,
                        content,
                        tags
                    }
                );

            } else {

                await api.post(
                    "/api/notes",
                    {
                        title,
                        category,
                        content,
                        tags
                    }
                );

            }

            onNoteCreated();
            onClose();

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to save note."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>
                    {selectedNote ? "Edit Note" : "New Note"}
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <div className="form-group">

    <label>Category</label>

    <input
        type="text"
        placeholder="e.g. Study, Career, Personal"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
    />

</div>
                    <textarea
                        placeholder="Write your note..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Tags (optional)"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />

                    <div className="modal-buttons">

                        <button
                            type="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                        >
                            {
                                loading
                                    ? "Saving..."
                                    : selectedNote
                                        ? "Update Note"
                                        : "Create Note"
                            }
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}