import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  
  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      alert('Note Succesfully Added!')
      setNewNote('');
     
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    alert('Note Succesfully Deleted!')
  };

  return (
    <div className="App">
      <h1>Welcome to Note App</h1>
      
      <div className="note-input">
        <input
          type="text"
          placeholder="Enter your note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>Add</button>
        
      </div>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button className='del' onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
