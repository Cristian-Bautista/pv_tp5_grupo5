import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar';
import AlumnoLista from './components/AlumnoLista';
import AlumnoForm from './components/AlumnoForm';
import AlumnoDetalle from './components/AlumnoDetalle';
import AcercaDe from './components/acercade';
import Home from './components/Home';

function App() {
  const [alumnos, setAlumnos] = useState(() => {
    const guardados = localStorage.getItem('alumnos');
    return guardados ? JSON.parse(guardados) : [
      {
        id: 'LU001',
        nombre: 'María',
        apellido: 'Pérez',
        curso: 'Tercero',
        email: 'maria@gmail.com',
        domicilio: 'Av. Libertador 100',
        telefono: '3884888888',
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
  }, [alumnos]);

  const handleDelete = (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar este alumno?");
    if (confirmar) {
      setAlumnos(alumnos.filter((alumno) => alumno.id !== id));
    }
  };

  return (
    <>
      <NavBar />

      <main style={{ padding: '2rem', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumnos" element={
            <AlumnoLista
              alumnos={alumnos}
              setAlumnos={setAlumnos}
              onDelete={handleDelete}
            />
          } />
          <Route path="/nuevo" element={<AlumnoForm alumnos={alumnos} setAlumnos={setAlumnos} />} />
          <Route path="/alumnos/:id" element={<AlumnoDetalle alumnos={alumnos} />} />
          <Route path="/alumnos/:id/editar" element={<AlumnoForm alumnos={alumnos} setAlumnos={setAlumnos} />} />
          <Route path="/acerca" element={<AcercaDe />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <footer style={{ textAlign: 'center', padding: '1rem', background: '#222', color: '#eee' }}>
        TP5 - Programación Visual © 2025
      </footer>
    </>
  );
}

export default App;
