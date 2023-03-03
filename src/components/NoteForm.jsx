import { useRef } from "react";

export const NoteForm = ({ addNewNote }) => {
  const textNote = useRef();

  let sendForm = e => {
    e.preventDefault();
    addNewNote(textNote.current.value);
    textNote.current.value = '';
  }

  return (
    <div className="note-form">
      <p>New Note</p>
      <form onSubmit={sendForm}>
        <textarea ref={textNote} cols="50" rows="10" required></textarea>
        <button className="note-form__submit">→</button>
      </form>
    </div>
  )
}