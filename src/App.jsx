import { useState, useEffect } from 'react';
import { Title } from './components/Title';
import { NotesList } from './components/NotesList';
import { NoteForm } from './components/NoteForm';
import './App.css'

function App() {

  const url = 'http://localhost:8080/notes';

  const [notes, updateNotes] = useState([]);


  function getNotes() {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        if (needUpdateNotes(result)) {
          updateNotes(result)
        }
      }
    );
  }

  function deleteNote(id) {
    let deleteUrl = `${url}/${id}`;

    fetch(deleteUrl, {
      method: 'DELETE'
    }).then(() => {getNotes()})
  }

  function addNote(textNote) {
    fetch(url, {
      method: "POST",
      body: textNote
    }).then(() => getNotes());
  }


  useEffect(() => {
    getNotes();
  });


  function needUpdateNotes(serverNotes) {
    let hasNewNotes = false;

    if (notes.length == serverNotes.length) {
      notes.forEach((item, index) => {
        if (item.id != serverNotes[index].id) {
          hasNewNotes = true;
        }
      })
    } else {
      hasNewNotes = true
    }

    return hasNewNotes;
  }


  return (
    <div className="App">
      <Title title="Notes" onUpdate={getNotes} />
      <NotesList notes={notes} onDelete={deleteNote} />
      <NoteForm addNewNote={addNote} />
    </div>
  )
}

export default App
