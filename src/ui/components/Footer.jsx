import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>Anime & Superheroes</h2>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>
                            <Link to="/animes">Animes</Link>
                        </li>
                        <li>
                            <Link to="/comics">Comics</Link>
                        </li>
                        <li>
                            <Link to="/Contacto">Contacto</Link>
                        </li>
                        <li>
                            <Link to="/about">Acerca de</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Anime & Superheroes. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};
