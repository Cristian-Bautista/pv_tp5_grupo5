import { useParams } from 'react-router-dom';

const AlumnoDetalle = ({ alumnos }) => {
  const { id } = useParams();
  const alumno = alumnos.find(a => a.id === id);

  if (!alumno) return <p>Alumno no encontrado.</p>;

  return (
    <div className="detalle-alumno-card">
      <h2>Detalles del Alumno</h2>
      <p><strong>LU:</strong> {alumno.id}</p>
      <p><strong>Nombre:</strong> {alumno.nombre} {alumno.apellido}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
      <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
      <p><strong>Teléfono:</strong> {alumno.telefono}</p>
    </div>
  );
};

export default AlumnoDetalle;
