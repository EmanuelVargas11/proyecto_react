import React from 'react'

const Greeting = (props) => {
  return (

    <section className=' w-50 mx-auto d-flex justify-content-center align-items-center'>
        <p className='d-flex justify-content-center align-items-center bg-black text-white ' >Hola, {props.name}!</p>
    </section>
    
  )
}

export default Greeting;
