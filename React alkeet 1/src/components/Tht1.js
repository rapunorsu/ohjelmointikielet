import React from 'react';
import '../App.css';

const Contact = ({contact}) => {
    return (
    <div>
        <li>{contact.name1}, ({contact.email}), <a href={contact.linkto}>linkki </a></li>
    </div>
    )
}

const Linkbook = ({people}) => {
    return (
        <div className="koira">
            <h1>Tehtävä 1</h1>
          {people.map(c => <Contact contact={c} key={c.id}/> )}
        </div>
    )
}

export default Linkbook;