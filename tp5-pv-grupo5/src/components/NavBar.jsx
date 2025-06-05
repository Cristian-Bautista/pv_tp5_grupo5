import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav
      style={{
        width: '100vw',
        padding: '1.5rem',
        backgroundColor: '#333',
        color: 'white',
        fontSize: '1.2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)', // centra la barra aunque esté dentro de un contenedor limitado
        boxSizing: 'border-box',
      }}
    >
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
      <Link to="/alumnos" style={{ color: 'white', textDecoration: 'none' }}>Alumnos</Link>
      <Link to="/nuevo" style={{ color: 'white', textDecoration: 'none' }}>Agregar Alumno</Link>
      <Link to="/acerca" style={{ color: 'white', textDecoration: 'none' }}>Acerca de</Link>
    </nav>
  );
};

export default NavBar;
