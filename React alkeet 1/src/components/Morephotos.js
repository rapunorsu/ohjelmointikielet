import React from 'react';
import '../App.css';
import Likebutton from './Likebutton'

const Morephotos = ({pictures}) => {
 
    return (

        <div className="Morephotos">
            <img src={pictures.imageurl} alt="koira"/>
            <p> {pictures.description}</p>

            <Likebutton/>
        </div>
    )
}

export default Morephotos;