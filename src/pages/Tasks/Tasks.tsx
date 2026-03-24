import React from 'react'
import { useParams } from 'react-router-dom';

const Tasks = () => {
    //variabes, use state
    const {id} = useParams();

    //funciones 

    //use effect

    //render 
  return (
    <div>
    Pagina de tareas 
    <p> El id que voy a buscar es: {id} </p>
    </div>
  )
}

export default Tasks