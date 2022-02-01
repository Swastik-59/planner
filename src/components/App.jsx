import React, { useState } from "react";
import Header from "./app/Header";
import Footer from "./app/Footer";
import Note from "./app/Note";
import CreateArea from "./app/CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function AddNote(KeepNote) {
        setNotes(prevNotes => {
            return [...prevNotes, KeepNote];
        })
    }

    function DeleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea
                onAdd={AddNote}
            />
            {notes.map((NoteItem, index) => {
                return <Note
                    id={index}
                    title={NoteItem.title}
                    content={NoteItem.content}
                    onchecked={DeleteNote}
                />
            })}
            <Footer />
        </div>
    );
}

export default App;