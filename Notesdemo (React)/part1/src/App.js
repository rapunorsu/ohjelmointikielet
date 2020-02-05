import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Note from './components/notes'
import MyForm from './components/insertnote'
import LogIn from './components/login'
import Register from './components/register'


// axios
//   .get('serviceurl')
//   .then(response => {
//     const notes = response.data
//     console.log(notes)
//   })

const App = () => {

  const [notes, setNotes] = useState([]) 
  const [authToken, setAuthToken] = useState([]) 
  // const [newNote, setNewNote] = useState('')
  // const [showAll, setShowAll] = useState(true)

  const serviceurl = '/notes';
  const serviceurlLogin = '/login';
  const serviceurlLReg = '/register';

  let headers = {
  headers: { Authorization: `bearer ${authToken}`},
  }

  const hook = () => {
    console.log('effect')
    axios
      .get(serviceurl, headers)
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }

  const userHook = () => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    setAuthToken(user.token)
    }
    }
    useEffect(userHook, [])
  
  useEffect(hook, [authToken])

  const deletenotes = (e, id) => {
    e.stopPropagation();
    console.log(id)
   axios.delete(`${serviceurl}/${id}`, headers)
   .then( response =>{
    console.log("Poisto onnistui")

    setNotes(notes.filter(m => m.notesid !== id))

   }
   )
   }

   const loginto = (e, newUsername, newPassword) => {
    e.preventDefault();
     const tempUser = {
       username: newUsername,
       password: newPassword
     }
     axios.post(serviceurlLogin, tempUser)
     .then( response => {
       console.log("login success")
       console.log(response.data.token);
       setAuthToken(response.data.token);
       
       window.localStorage.setItem(
         'loggedNoteappUser', JSON.stringify(response.data)
       )
     })
   }

  

   const register = (e, newRegUs, newRegPas, newRegName) => {
    e.preventDefault();
     const tempUser = {
       username: newRegUs,
       name: newRegName,
       password: newRegPas
     }
     axios.post(serviceurlLReg, tempUser)
     .then( response => {
       console.log("register success")
       
     })
   }

   const updateim = (e, id, value) => {
      e.stopPropagation();
      console.log(id)
        let tempNote = notes.find(n => n.notesid === id)
        tempNote = { ...tempNote, important: value };

    axios.put(`${serviceurl}/${id}`, tempNote, headers)
      .then(res => {
          console.log("Muistiinpanon tärkeyttä muutettu")
          const tempNotes = notes.map(n => {
              if (n.notesid === id) {
              n = tempNote;
              }
              return n;
          })
          console.log(tempNote)
          setNotes(tempNotes)
          })
    }

   const createNote = (e, newNote, newImportant ) => {
     e.preventDefault();
     const tempnote = {
       content: newNote,
       important: newImportant
     }
     axios.post(serviceurl, tempnote, headers)
     .then( response => {
       console.log(response.data)
       setNotes(notes.concat(response.data));
     })
   }


  return (
    <div className="App">
      <header className="App-header">
        
          <h1>Notesdemo</h1>
        
      </header>
      <section>
        Hello! Welcome to my notes demo! <br></br><br></br>
      </section>
      <section>
        <Register register={register}/>
        <LogIn loginto={loginto}/>
        <MyForm createNote={createNote}/><br></br><br></br>
      <Note mynotes={notes} setmynotes={setNotes} deletenotes={deletenotes} updateim={updateim} />
      </section>
    </div>
  );
}

export default App;
