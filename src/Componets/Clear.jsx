import React from 'react';
import './Clear.css'

const Clear = ({ children, manejarClear }) => (
    <div className='boton-clear'
    onClick={ manejarClear }>
        {children}
    </div>
);

export default Clear;