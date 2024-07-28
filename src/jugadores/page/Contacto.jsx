import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactPage.css';

const Contacto = () => {
    const navigate = useNavigate();

    return (
        <div className="contact-container">
            <div className="contact-content">
                <h1>Contacto</h1>
                <p>
                    <strong>Alumno:Deni Lecaros</strong> Nombre del Alumno
                </p>
                <p>
                    <strong>Sede:Inacap Puente Alto</strong> Nombre de la Sede
                </p>
                <p>
                    <strong>Carrera:Ingeniría en Informática</strong> Nombre de la Carrera
                </p>
                <button onClick={() => navigate('/')} className="btn-home">
                    Volver al Inicio
                </button>
            </div>
        </div>
    );
};

export default Contacto;
