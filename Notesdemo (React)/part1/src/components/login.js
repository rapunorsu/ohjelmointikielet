import React, {useState} from 'react';
import '../App.css';

const LogIn = ({loginto}) => {
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");

     const mySubmitHandler = e => {
        loginto(e, newUsername, newPassword)
        setNewUsername("");
        setNewPassword("");
     }

     return (
        <form onSubmit={e => mySubmitHandler(e)}>

        <h2>Kirjaudu sisään</h2>
        <p>Username</p>
        <input
          type='text'
          name='username'
          onChange={e =>setNewUsername(e.target.value)}
          value = {newUsername}
        />

        <p>Password</p>
        <input
          type='password'
          name='password'
          onChange={e =>setNewPassword(e.target.value)}
          value = {newPassword}
        /> <br></br>
        
      <input type='submit' />
        
        </form> 

     );
    }




export default LogIn;
