import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>URBAN THREADS</h1>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/contact">Contacto</Link>
      </div>
    </nav>
  )
}

export default Navbar;