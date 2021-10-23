import React from 'react'
import './admin.css'
const Admin = () => {

    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <h1 class="tit">ADMINISTRADOR</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Docentes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Estudiantes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Materias</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Ambientes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Horarios</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Designaciones</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Nombre" aria-label="Search"></input>
                            <button class ="btn btn-outline-success" type ="submit">Buscar</button>
                        </form>
                    </div>
                </div>
           
       </nav>
        <div className="container">
            <div className="row">
                    <div class="col-sm-2"></div>   
                <div class="col-sm-8">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Carga Horaria</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>5 hrs.</td>
                                    <td><a href="#">eliminar  /    </a><a href="#">   Actualizar</a></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>10hr.</td>
                                    <td><a href="#">eliminar  /    </a><a href="#">   Actualizar</a></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>7hrs.</td>
                                    <td><a href="#">eliminar  /    </a><a href="#">   Actualizar</a></td>
                            </tr>
                        </tbody>
                    </table>
            </div>
                    <div class="col-sm-2"></div>
                
                </div>
        </div>
            <div class="d-grid gap-2 col-6 mx-auto">
                   <button class="btn btn-dark" type="button">Añadir Docente</button>
            </div>
           
       
    </>    
    );
}
export default Admin;