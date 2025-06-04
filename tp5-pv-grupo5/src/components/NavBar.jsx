import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Inicio</Link>
      <Link to="/alumnos" style={{ marginRight: '1rem', color: 'white' }}>Alumnos</Link>
      <Link to="/nuevo" style={{ marginRight: '1rem', color: 'white' }}>Agregar Alumno</Link>
      <Link to="/acerca" style={{ color: 'white' }}>Acerca de</Link>
    </nav>
  );
};

export default NavBar;
