import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner page-width">
        <h1 className="brand">URBAN THREADS</h1>
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/products">Productos</Link>
          <Link to="/contact">Contacto</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar