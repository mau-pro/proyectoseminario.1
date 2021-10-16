import React from 'react'
import './admin.css'
const adminUI= () => {

    return(
        <nav className="navbar">
            <h1>Administrador</h1> 
            <section className="links">
                <a href="./#">Docentes</a>
                <a href="./#">Estudiantes</a>
                <a href="./#">Materias</a>
                <a href="./#">Ambientes</a>
                <a href="./#">Horarios</a>
                <a href="./#">Designaciones</a>
            </section>
        </nav>
    );
};
export default admin;