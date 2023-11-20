import React from "react";
import SearchNotes from "./SearchNotes";

function Header({ searchNote }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <SearchNotes searchNote={searchNote} />
    </div>
  );
}

export default Header;
