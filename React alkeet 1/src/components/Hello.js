import React from 'react';
import '../App.css';

const Hello = ({name, phone, age}) => {
    return (
    <div>
        <h1>Hello world!</h1>
        <p>Minä olen {name}. Voit soittaa minulle numeroon {phone}. Olen {age}-vuotias.
        </p>
    </div>
    );
}

export default Hello;