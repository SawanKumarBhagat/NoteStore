import React, { useEffect, useState } from "react";

function Note({ note, deleteNote, saveNote, present }) {
  const [data, setInput] = useState(note);

  function onDelete(e) {
    e.preventDefault();
    deleteNote(note?._id);
  }

  function onSave(e) {
    e.preventDefault();
    saveNote(data);
  }

  useEffect(() => {
    setInput(note);
  }, [note]);

  const changeTitle = (e) => {
    setInput({ ...data, title: e.target.value});
    if (!present) alert("Add or select a note first!!!")
    };

  const changeBody = (e) => {
    setInput({ ...data, body: e.target.value});
    if (!present) alert("Add or select a note first!!!")
  };

  return (
    <div className="mx-4 bg-white rounded-2xl">
      <div className="flex items-center justify-between py-4 px-10 sticky top-0 h-120 mx-auto z-20 border-b-2 border-[#eee]">
        <input
          placeholder="Title"
          type="text"
          className="text-2xl font-semibold outline-none"
          rows="1"
          value={data?.title}
          onChange={changeTitle}
        />
        <div className="flex space-x-4">
          <button onClick={onSave}><p className="text-[#33aaff] text-lg font-semibold bg-[#0d84ff14] rounded-md px-[20px] py-1 active:text-black">Save</p></button>
          <button onClick={onDelete} className="flex items-center active:text-[#33aaff]">
            <span className="material-icons">delete</span>
          </button>
        </div>
      </div>
      <div>
        {/* <input className="bg-gray-200 rounded-md w-32 px-3 py-1 m-4" type="text" placeholder="Folder" /> */}
        <textarea
          type="text"
          placeholder="Note"
          className="px-10 py-4 h-[80vh] w[400px] md:w-[700px] outline-none "
          value={data?.body}
          onChange={changeBody}
        />
      </div>
    </div>
  );
}

export default Note;
