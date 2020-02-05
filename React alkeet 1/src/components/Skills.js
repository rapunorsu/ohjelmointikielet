import React from 'react';
import '../App.css';
import NewSkills from '../components/NewSkills.js';

const Skilltypes = ({skill}) => {
    return (
        <>
        <tr><td>{skill.title}</td></tr>
        </>
    )
}

const Skills = ({showSkills, setShowSkills}) => {
    return (
        <div className="koira">
            <h1>Tehtävä 6</h1>

            <table>
            <tbody>
                <tr>
                <td> 
                    <NewSkills showSkills={showSkills} setShowSkills={setShowSkills}/>
                </td>
                </tr>

                {showSkills.map(c => <Skilltypes skill={c} key={c.id}/> )}
                </tbody>
            </table>
        </div>
    )
}

export default Skills;