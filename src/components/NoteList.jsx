import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive, onActive }) {
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">Notes not found</p>;
  }
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          onDelete={onDelete}
          onArchive={onArchive}
          onActive={onActive}
        />
      ))}
    </div>
  );
}

export default NoteList;
