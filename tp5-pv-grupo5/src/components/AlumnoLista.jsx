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
    <div>
      <h2>Lista de Alumnos</h2>
      {alumnos.map((alumno) => (
        <div
          key={alumno.id}
          style={{
            background: '#222',
            color: 'white',
            padding: '1rem',
            margin: '1rem 0',
            borderRadius: '8px'
          }}
        >
          <strong>{alumno.nombre} {alumno.apellido}</strong> - LU: {alumno.id}<br />
          <button onClick={() => navigate(`/alumnos/${alumno.id}`)}>Ver Detalles</button>
          <button onClick={() => navigate(`/alumnos/${alumno.id}/editar`)}>Editar</button>
          <button onClick={() => handleDelete(alumno.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default AlumnoLista;

