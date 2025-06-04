import { useNavigate } from 'react-router-dom';

const AlumnoItem = ({ alumno, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      color: '#fff',
      padding: '1rem',
      borderRadius: '10px',
      marginBottom: '1rem',
      boxShadow: '0 0 8px rgba(12, 11, 11, 0.5)'
    }}>
      <h3>{alumno.nombre} {alumno.apellido}</h3>
      <p><strong>LU:</strong> {alumno.id}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>

      <button onClick={() => navigate(`/alumnos/${alumno.id}`)}>Ver Detalles</button>
      <button onClick={() => navigate(`/alumnos/${alumno.id}/editar`)}>Editar</button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default AlumnoItem;
