import SpreadNote from "../components/SpreadNote";
import "./TarotSpreads.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function NotesPage() {
  const [isNotesPage, setIsNotesPage] = useState(true);
  const [currentNote, setCurrentNote] = useState(0);
  const [noteData, setNoteData] = useState(null);

  function getUserNotes() {
    let note = currentNote;
    axios
      .get(`api/notes/${note}`)
      .then((response) => {
        console.log(response.data);
        setNoteData(response.data);
      })
      .catch((error) => window.location.replace("/"));
  }

  const handleClick = () => {
    const spread_to_delete = noteData.spread_id;
    axios
      .delete(`api/notes/delete_spread/${spread_to_delete}`)
      .then((response) => {
        if (response.data.success) {
          setCurrentNote(0);
          window.location.reload();
        }
      });
  };

  useEffect(() => {
    getUserNotes();
  }, [currentNote]);

  return (
    <div className="notes-page">
      {Boolean(noteData) && (
        <SpreadNote
          spreadData={noteData}
          handleClick={handleClick}
          isNotesPage={isNotesPage}
          setCurrentNote={setCurrentNote}
          currentNote={currentNote}
        />
      )}
    </div>
  );
}
