import React, { Fragment } from 'react';

const C_Saludo = (props) => {
    return (
        <Fragment>
            <h2>Hola! {props.persona}</h2>
        </Fragment>
    );
}
 
export default C_Saludo;