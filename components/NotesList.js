import { fetchAddNote } from "@/utils/fetchAddNote";
import { fetchDeleteNote } from "@/utils/fetchDeleteNote";
import { fetchNotes } from "@/utils/fetchNotes";
import { fetchUpdateNote } from "@/utils/fetchUpdateNote";
import React, { useEffect, useState } from "react";
import Note from "./Note";
import NotesGlimpse from "./NotesGlimpse";
import addNote from "@/pages/api/addNote";

function NotesList({ user }) {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState([]);
  const [present, setPresent] = useState(false);

  useEffect(() => {
    fetchNotes().then((result) => {
      setNotes(result);
    });
    if(notes.length != 0) setNote(notes[0]);
    else setNote({title: '', body: ''})
    // if(notes.includes(note, 0)) setPresent(true);
    // notes.includes(note, 0) ? setPresent(true) : setPresent(false);
  }, [notes.length]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  async function handleAddNote(e) {
    e.preventDefault();
    await fetchAddNote();
    await fetchNotes().then((res) => setNotes(res));
    // setNote(notes[0]);
  }

  const deleteNote = async (_id) => {
    if (confirm("Delete this note?")) {
      if (notes.length == 1) {
        await fetchDeleteNote(_id);
        // await fetchAddNote();
        await fetchNotes().then((res) => setNotes(res));
        // setNote(notes[0]);
      } else {
      const index = notes.findIndex((note) => _id === note._id);
      await fetchDeleteNote(_id);
      await fetchNotes().then((Notess) => setNotes(Notess));
      // setNote(notes[0]);
      }
    }
  };

  async function saveNote(data) {
    if (user.value && confirm("Save this note?")) {
      await fetchUpdateNote(data);
      await fetchNotes().then((Notess) => setNotes(Notess));
    } else {
      alert("Please login first to save this note!");
    }
  }

  const [activeNote, setActiveNote] = useState(0);

  function active(data, i) {
    setNote(data);
    setActiveNote(i);
  }

  return (
    <div className="flex my-2 h-[90vh]">
      <div className="w-[250px] md:w-[300px] bg-white rounded-2xl">
        <div className="border-b border-[#f5f5f5]">
          <h2 className="text-2xl p-5">Notes</h2>
          <div className="flex items-center ">
            <div className="bg-[#f4f4f4] rounded-full flex items-center space-x-2 p-4 ml-1 xl:ml-4 h-10 w-40 xl:w-56 text-xs xl:text-sm">
              <span className="material-icons">search</span>
              <input
                type="text"
                onChange={handleSearch}
                placeholder="Type to search..."
                className="bg-[#f4f4f4] outline-none w-20 xl:w-40"
              />
            </div>
            <button
              onClick={handleAddNote}
              className="items-center flex text-[#33aaff] active:text-black ml-2"
            >
              <span className="material-icons md- ">add_circle</span>
            </button>
          </div>
          <div className="text-xs text-slate-900 px-6 py-3">
            Total notes: {notes && notes.length}
          </div>
        </div>
        <div className="cursor-pointer h-[650px] overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#33aaff]/50">
          {notes?.map((noteGlimpse, i) => (
            <div
              key={i}
              style={{
                backgroundColor:
                  note && note._id == noteGlimpse._id ? "#f1f1f1" : "white",
              }}
              onClick={() => active(noteGlimpse, i)}
            >
              <NotesGlimpse note={noteGlimpse} />
            </div>
          ))}
        </div>
      </div>
      <Note note={note} deleteNote={deleteNote} saveNote={saveNote} present={notes.some(data => data._id === note._id) ? true : false} />
    </div>
  );
}

export default NotesList;
