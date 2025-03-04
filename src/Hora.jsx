import React from 'react'
function Hora() {
    // Obtener la hora actual
    const horaActual = new Date().getHours();
    // Determinar el saludo basado en la hora
        let saludo;
        if (horaActual < 12) {
            saludo = 'Buenos días';
        } else if (horaActual < 18) {
            saludo = 'Buenas tardes';
        } else {
            saludo = 'Buenas noches';
        }
    // Devolver el JSX con el saludo adecuado
    return (
        <div className='d-flex justify-content-center align-items-center ' >
            <p className='p-3 bg-danger text-white'>{saludo}, usuario!</p>
        </div>
    );
    }
    export default Hora