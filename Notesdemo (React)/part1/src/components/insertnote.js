import React, {useState} from 'react';
import '../App.css';

const MyForm = ({createNote}) => {
   const [newNote, setNewNote] = useState("");
    const [newImportant, setNewImportant] = useState(true);

   const mySubmitHandler = e => {
        createNote(e, newNote, newImportant)
        setNewNote("")
        setNewImportant(true)
     
      }

      return (
        <form onSubmit={e => mySubmitHandler(e)}>
        <h2>Add a note:</h2>
        <input
          type='text'
          name='content'
          onChange={e =>setNewNote(e.target.value)}
          value = {newNote}
        />
        <p>Important?</p>
        <select value={newImportant} onChange={e =>setNewImportant(e.target.value)}>
        <option value="true">True</option >
        <option value="false" >False</option>
      </select>
      <input type='submit' />
        </form> 
      );
    }
  
  
//   ReactDOM.render(<MyForm />, document.getElementById('root'));
  export default MyForm;
