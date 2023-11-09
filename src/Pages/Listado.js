import React, { useEffect, useState } from "react";
import axios from "axios";
import './Listado.css';
import { Link, useParams } from "react-router-dom";


export default function Listado(){
    const [clientes, setClientes] = useState([]);

    const{id}=useParams()

    useEffect(()=>{
        loadClientes();
    },[]

    );

    const loadClientes=async()=>{
        const result=await axios.get("http://localhost:8080/api/clientes");
        setClientes(result.data); 
    }

    const borrarCliente=async(id)=>{
        await axios.delete(`http://localhost:8080/api/clientes/${id}`)
        loadClientes()
    }

    return(
        <div className="table-container">
            <h2 className="table-h2">Clientes</h2>
             <table className="styled-table">
                <thead>
                <tr>
                    <th scope="col" >#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">D.N.I</th>
                    <th scope="col">Correo electrónico</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Estado de cuenta</th>
                    <th scope="col">Acciones</th>
                </tr>
                </thead>
                <tbody>
                {
                clientes.map((cliente,index)=>(
                    <tr className="active-row">
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{cliente.nombre}</td>
                    <td>{cliente.apellido}</td>
                    <td>{cliente.dni}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.telefono}</td>
                    <td>{cliente.estadoCuenta}</td>
                    <td>
                        <Link className="btn-edit" to={`/editarCliente/${cliente.id}`}>Editar</Link>
                        <button className="btn-del"
                        onClick={()=>borrarCliente(cliente.id)}>Eliminar</button>
                    </td>
                    </tr>
                ))
            }
                </tbody>
                </table>
        </div>
    )
}