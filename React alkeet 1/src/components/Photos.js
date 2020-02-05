
import React, {useState} from 'react';
import '../App.css';
import Morephotos from './Morephotos';

const OnePhoto = ({pictures}) => {
    const [showPic, setshowPic] = useState(false);
    return (
        <>
        <h1 onClick={() => setshowPic(!showPic)}>{pictures.title}</h1>

        {showPic && <Morephotos pictures={pictures}/>}
        </>
    )
}

const Pictures = ({pictures}) => {
    return (
        <div className="koira">
            <h1>Tehtävä 3</h1>

            {pictures.map(c => <OnePhoto pictures={c} key={c.id}/> )}
          
        </div>
    )
}

export default Pictures;