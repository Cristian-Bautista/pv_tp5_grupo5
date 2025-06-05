import { Link, useNavigate } from 'react-router-dom';

const AlumnoLista = ({ alumnos, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirmar = window.confirm('¿Estás seguro de eliminar este alumno?');
    if (confirmar) {
      onDelete(id);
    }
  };

  return (
    <div className="lista-alumnos">
      <h2>Lista de Alumnos</h2>
      {alumnos.map((alumno) => (
        <div key={alumno.id} className="alumno-card">
          <p><strong>{alumno.nombre} {alumno.apellido}</strong> - LU: {alumno.id}</p>
          <div className="alumno-botones">
            <button onClick={() => navigate(`/alumnos/${alumno.id}`)}>Ver Detalles</button>
            <button onClick={() => navigate(`/alumnos/${alumno.id}/editar`)}>Editar</button>
            <button onClick={() => handleDelete(alumno.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlumnoLista;


