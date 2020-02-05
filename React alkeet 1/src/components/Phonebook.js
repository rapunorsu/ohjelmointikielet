import React from 'react';
import '../App.css';

const Contact = ({contact}) => {
    return (
        <li>{contact.name} ({contact.age}), puh > {contact.phone} </li>
    )
}

const Phonebook = ({phonebook}) => {
    return (
        <div className="koira">
        <h1>Demo</h1>
        {/* <Contact contact = {phonebook[0]} />
        <Contact contact = {phonebook[1]} />
        <Contact contact = {phonebook[2]} /> */}

        {phonebook.map(c => <Contact contact={c} key={c.id}/> )}

    </div>
    );
}

export default Phonebook;