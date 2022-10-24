import React from 'react';
import './Button.css';

function Button(props){

    const  esOperador = (valor) =>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return(
        <div 
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
            {props.children}
        </div>
    );
}

export default Button;