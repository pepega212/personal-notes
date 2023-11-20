import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteDeleteBtn from "./NoteDeleteBtn";
import NoteArchiveBtn from "./NoteArchiveBtn";
import NoteActiveBtn from "./NoteActiveBtn";
import { showFormattedDate } from "../utils";

function NoteItem({
  id,
  title,
  createdAt,
  body,
  onDelete,
  archived,
  onActive,
  onArchive,
}) {
  return (
    <div className="note-item">
      <NoteItemContent
        title={title}
        date={showFormattedDate(createdAt)}
        body={body}
      />

      <div className="note-item__action">
        <NoteDeleteBtn id={id} onDelete={onDelete} />
        {archived ? (
          <NoteActiveBtn id={id} onActive={onActive} />
        ) : (
          <NoteArchiveBtn id={id} onArchive={onArchive} />
        )}
      </div>
    </div>
  );
}

export default NoteItem;
