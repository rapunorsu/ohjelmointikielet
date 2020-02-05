import React, {useState} from 'react';
import './App.css';
import Hello from './components/Hello.js';
import Phonebook from './components/Phonebook.js';
import Linkbook from './components/Tht1.js';
import Teachers from './components/Tht2.js';
import Pictures from './components/Photos.js';
import Skills from './components/Skills.js';

const App = () => {
  const name = "Nelli";
  const phone = "0400283625";
  const age = 22;

  const p1 = {name: "Pena", phone: "050-6662221", age: 99, id: 1};
  const p2 = {name: "Pirjo", phone: "060-6662221", age:5, id: 2};
  const p3 = {name: "Irma", phone: "050-6663331", age: 55, id: 3};
  const p4 = {name: "Izmo", phone: "050-6663991", age: 21, id: 4};

  const phonebook = [p1, p2, p3, p4];

  const per1 = {name1: "Nelli K.", email: "nelli@gmail.com", linkto: "https://google.fi", id: 1};
  const per2 = {name1: "Rasmus K.", email: "rasmus@gmail.com", linkto: "https://is.fi", id: 2};

  const linkbook= [per1, per2];

  const teach1 = {name2: "Tiina", course: "Javascript", class: "B2074", id: 1};
  const teach2 = {name2: "Jorma", course: "Frontend -koodaus", class: "B2075", id: 2};

  const teachers = [teach1, teach2];

  const pic1 = {imageurl: "https://mk0evidensiafimq5n3q.kinstacdn.com/wp-content/uploads/2018/11/eho-koira3-e1555993125979.jpg", title: "Koira", 
  description: "Koira,joka makaa", id: 1};
  const pic2 = {imageurl: "https://pbs.twimg.com/media/Ck0E7KYVEAAMM50.jpg", title: "Koira", 
  description: "Koira,joka banaani", id: 2};

  const pictures = [pic1, pic2];

  const skill1 = {title:"React", id:1};
  const skill2 = {title:"CSS", id:2};

  const skilltypes = [skill1, skill2];

  const [showText, setShowText] = useState(true);
  const [showSkills, setShowSkills] = useState(skilltypes);


  return (
    <div className="App">
      <header className="App-header">
        <Hello name={name} phone={phone} age={age}/>
      </header>

      <section>
        <Phonebook phonebook={phonebook}/>
      </section>

      <section>
        {showText && <div><Linkbook people={linkbook}/></div>}
        <button onClick={() => setShowText(!showText)}>
        Click to Show/Hide Stuff
        </button>
     </section>

      <section>
        <Teachers teachers={teachers}/>
      </section>

      <section>
        <Pictures pictures={pictures}/>

      </section>

      <section>
        <Skills showSkills={showSkills} setShowSkills={setShowSkills}/>
        
        </section>


    </div>
  );
}

export default App;
