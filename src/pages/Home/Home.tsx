import {Link, useNavigate} from 'react-router-dom';
import React from 'react';

const Home = () => {
    //variabes, use state
    const navigate = useNavigate();

    //funciones 
    const navigateToSearch = () => {
        navigate('/search');
    }

    const navigateToTasks = (id: string) => {
        navigate(`/tasks/${id}`);
    }   



    //use effect

    //render 
  return (
    <div>
        <div> 
            <Link to = "/about"> About </Link>
            <button onClick={navigateToSearch}> Ir a busqueda </button>
            <button onClick={() => navigateToSearch()}> Ir a busqueda </button> 

            <button onClick={() => navigateToTasks('123')}> Ir a tarea 123 </button>
            {/* no hacer */}
            {/* <a href="/search"> Ir a busqueda </a> */}
            {/* <button onClick={navigateToSearch()}> Ir a busqueda </button> */}




            <Link to = "/tasks"> Tasks </Link>
            <Link to = "/search"> Search </Link>
        </div>
        <h1> Dashboard </h1>
    Pagina de inicio 
    <p> Hola </p>
    </div>
  )
}

export default Home