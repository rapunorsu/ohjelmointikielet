import React, {useState} from 'react';
import '../App.css';

const NewSkills = ({showSkills, setShowSkills}) => {
   const [newSkill, setNewSkill] = useState("");


   const handleSkillChange = (event) => {
    setNewSkill(event.target.value)
    console.log(newSkill)
  }

      const addSkill = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        console.log(newSkill, showSkills)
        setShowSkills(showSkills.concat({title: newSkill, id: newSkill}));
      }

      return (
        <form onSubmit={addSkill}>
          <input value={newSkill}
          onChange={handleSkillChange}/>
        <button type="submit">save</button>
      </form>   
      );
    }
  
  
//   ReactDOM.render(<MyForm />, document.getElementById('root'));
  export default NewSkills;