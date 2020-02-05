import React from 'react';
import '../App.css';

const Contact = ({contact}) => {
    return (
    <tr><td>{contact.name2}</td>
    <td>{contact.course}</td>
    <td>{contact.class}</td></tr>
    )
}

const Teachers = ({teachers}) => {
    return (
        <div className="koira">
            <h1>Tehtävä 2</h1>

        <table>
        <tbody>
            <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Class</th>
            </tr>

            {teachers.map(c => <Contact contact={c} key={c.id}/> )}

        </tbody>
        </table>
          
        </div>
    )
}

export default Teachers;