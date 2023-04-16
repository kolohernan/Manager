import React, { Fragment } from 'react';
import C_Avatar from './avatar';

const C_comentario = ({p_sujeto}) => {
    return (
        <Fragment>
            <h1>Caja de comentarios</h1>
            <div className="d-flex">
                <div className="flex-shrink-0 ms-3">
                    <C_Avatar urlImagen={p_sujeto.urlImagen}/>
                </div>
                <div className="flex-grow-1 ms-3">
                    <h4>{p_sujeto.nombre}</h4>
                    {p_sujeto.texto}
                </div>
            </div>
        </Fragment>
    );
}
 
export default C_comentario;


