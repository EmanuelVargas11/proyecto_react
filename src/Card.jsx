import React from 'react'
import CustomButton from './CustomButton';


function Card({Titulo, Descripcion}) {
    return (
        <div className="card bg-danger-subtle p-2 text-dark bg-opacity-50 text-body-tertiary d-flex justify-content-center align-items-center ">
            <h3 className="text-center text-tertiary">{Titulo}</h3>
            <p>{Descripcion}</p>
            <CustomButton contenido={'Ver mas'}/>
        </div>
    )    
}

export default Card