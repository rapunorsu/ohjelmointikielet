import React from 'react';
import '../App.css';

const Note = ({note, deletenotes, updateim}) => {
    const notestyle = note.important ? "importantNote": "regularNote";
    const localtime = new Date(note.date)
    console.log(note)
    return(
        
    <li className = {notestyle}>{localtime.toLocaleString()}: {note.content}
    <button onClick = {(e) => deletenotes(e, note.notesid)}>Poista</button> 
    <button onClick = {(e) => updateim(e, note.notesid, !note.important)}>Päivitä</button> </li>
    )
   }

const NotesList = ({mynotes, setmynotes, deletenotes, updateim}) => {
    
    return(
    <div>
    <ul>
        {mynotes.map(note => <Note key={note.notesid} note={note} id={note.notesid} deletenotes={deletenotes} updateim={updateim}/>)}
    </ul>
    </div>
    )
   }
    
   export default NotesList;

 