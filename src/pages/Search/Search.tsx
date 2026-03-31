import { useParams } from 'react-router-dom';

function Search() {
  const { id } = useParams();

  return (
    <div>
      Pagina de tareas
      <p>El id que voy a buscar es: {id}</p>
    </div>
  );
}

export default Search;