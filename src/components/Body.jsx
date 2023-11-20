import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

function Body({ notes, querySearch, addNote, onDelete, onArchive, onActive }) {
  const activeNotes = notes.filter(
    (note) =>
      note.archived === false &&
      note.title.toLowerCase().includes(querySearch.toLowerCase().trim())
  );
  const archiveNotes = notes.filter(
    (note) =>
      note.archived === true &&
      note.title.toLowerCase().includes(querySearch.toLowerCase().trim())
  );
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Active Notes</h2>
      <NoteList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      <h2>Archived</h2>
      <NoteList notes={archiveNotes} onDelete={onDelete} onActive={onActive} />
    </div>
  );
}

export default Body;
