import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AlumnoForm({ alumnos, setAlumnos }) {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const esEdicion = Boolean(id); 

  const [alumno, setAlumno] = useState({
    id: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: ''
  });

  useEffect(() => {
    if (esEdicion) {
      const alumnoExistente = alumnos.find((a) => a.id === id);
      if (alumnoExistente) {
        setAlumno(alumnoExistente);
      }
    }
  }, [esEdicion, id, alumnos]);

  const handleChange = (e) => {
    setAlumno({
      ...alumno,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!alumno.id || !alumno.nombre || !alumno.apellido) {
      alert('Por favor completá los campos obligatorios');
      return;
    }

    if (esEdicion) {
      const actualizados = alumnos.map((a) =>
        a.id === id ? alumno : a
      );
      setAlumnos(actualizados);
    } else {
      setAlumnos([...alumnos, alumno]);
    }

    navigate('/alumnos');
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-alumno">
      <h2>{esEdicion ? 'Editar Alumno' : 'Agregar Alumno'}</h2>

      <label>ID (LU):
        <input
          type="text"
          name="id"
          value={alumno.id}
          onChange={handleChange}
          required
          disabled={esEdicion} 
          className='input-lu'
        />
      </label>

      <label>Nombre:
        <input
          type="text"
          name="nombre"
          value={alumno.nombre}
          onChange={handleChange}
          required
        />
      </label>

      <label>Apellido:
        <input
          type="text"
          name="apellido"
          value={alumno.apellido}
          onChange={handleChange}
          required
        />
      </label>

      <label>Curso:
        <input
          type="text"
          name="curso"
          value={alumno.curso}
          onChange={handleChange}
          required
        />
      </label>

      <label>Email:
        <input
          type="email"
          name="email"
          value={alumno.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>Domicilio:
        <input
          type="text"
          name="domicilio"
          value={alumno.domicilio}
          onChange={handleChange}
          required
        />
      </label>

      <label>Teléfono:
        <input
          type="tel"
          name="telefono"
          value={alumno.telefono}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">{esEdicion ? 'Actualizar' : 'Guardar'}</button>
    </form>
  );
}

export default AlumnoForm;
