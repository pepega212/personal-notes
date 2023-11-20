import React from "react";

function NoteActiveBtn({ id, onActive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onActive(id)}>
      Unarchive
    </button>
  );
}

export default NoteActiveBtn;
