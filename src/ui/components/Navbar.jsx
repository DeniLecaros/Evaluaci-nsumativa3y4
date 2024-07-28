import { Link } from 'react-router-dom';
import './Navbar.css'; // Importar los estilos CSS
import logo from './manga.png'; // Asegúrate de que la ruta sea correcta
export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo-image" />
                </Link>
            </div>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">
                        Home
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/animes" className="navbar-link">
                        Animes
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/comics" className="navbar-link">
                        Comics
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/login" className="navbar-link">
                        Logout
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/pokemon-crud" className="navbar-link">
                        Pokemon CRUD
                    </Link>
                </li>
            </ul>
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Logo Espejo" className="logo-image mirror" />
                </Link>
            </div>
        </nav>
    );
};
