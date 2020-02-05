import React, {useState} from 'react';
import '../App.css';

const Register = ({register}) => {
    const [newRegUs, setNewRegUs] = useState("");
    const [newRegName, setnewRegName] = useState("");
    const [newRegPas, setNewRegPas] = useState("");

    const mySubmitHandler = e => {
        register(e, newRegUs, newRegPas, newRegName)
        setNewRegUs("");
        setnewRegName("");
        setNewRegPas("");
     }


    return (
        <form onSubmit={e => mySubmitHandler(e)}>

        <h2>Rekisteröidy</h2>
        <p>Username</p>
        <input
          type='text'
          name='username'
          onChange={e =>setNewRegUs(e.target.value)}
          value = {newRegUs}
        />

        <p>Name</p>
        <input
          type='text'
          name='name'
          onChange={e =>setnewRegName(e.target.value)}
          value = {newRegName}
        />

        <p>Password</p>
        <input
          type='password'
          name='password'
          onChange={e =>setNewRegPas(e.target.value)}
          value = {newRegPas}
        /> <br></br>
        
      <input type='submit' />
        
        </form> 
    );
}



export default Register;