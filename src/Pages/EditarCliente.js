import React,{  useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import './EditarCliente.css';
import { useNavigate } from "react-router-dom";

export default function EditarCliente (){


    let navigate= useNavigate();

    const {id}= useParams()

    const [cliente, setCliente] = useState({
        nombre:"",
        apellido:"",
        dni:"",
        email:"",
        telefono:"",
        estadoCuenta:""
    })

    const{nombre,apellido,dni,email,telefono,estadoCuenta}=cliente

    const onInputChange=(e)=>{
        setCliente({...cliente, [e.target.name]:e.target.value})
    }

    useEffect(()=>{
        loadCliente()
    }, [])

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/clientes/${id}`, cliente)
        navigate("/listado")
    }

    const loadCliente = async()=>{
        const result = await axios.get(`http://localhost:8080/api/clientes/${id}`)
        setCliente(result.data)
    }
    return (
        <div className="formCreacion">
            
                <div className="form_container">
                <h2 className="edit_h2">Modificar Cliente</h2>
<form onSubmit={(e)=>onSubmit(e)}>
                <div className="formCreacion_">
                    <label htmlFor="Nombre" className="form-label">Nombre</label>
                    <input type={"text"} className="form-control" placeholder="Ingrese nombre"
                    name="nombre" value={nombre}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>

                <div className="formCreacion_">
                    <label htmlFor="Apellido" className="form-label">Apellido</label>
                    <input type={"text"} className="form-control" placeholder="Ingrese apellido"
                    name="apellido" value={apellido}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>

                <div className="formCreacion_">
                    <label htmlFor="Dni" className="form-label">Documento Nacional de Identidad</label>
                    <input type={"text"} className="form-control" placeholder="Ingrese DNI"
                    name="dni" value={dni}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>


                <div className="formCreacion_">
                    <label htmlFor="Email" className="form-label">Correo electrónico</label>
                    <input type={"text"} className="form-control" placeholder="Ingrese correo electrónico"
                    name="email" value={email}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>

                <div className="formCreacion_">
                    <label htmlFor="Telefono" className="form-label">Teléfono</label>
                    <input type={"text"} className="form-control" placeholder="Ingrese teléfono"
                    name="telefono" value={telefono}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>

                <div className="formCreacion_">
                    <label htmlFor="EstadoCuenta" className="form-label">Estado de la Cuenta</label>
                    <input type={"text"} className="form-control" placeholder="ACTIVA, BLOQUEADA O INACTIVA"
                    name="estadoCuenta" value={estadoCuenta} onChange={(e)=>onInputChange(e)} ></input> 
             
                </div>

                <button type="submit" className="btn-reg">Enviar</button>
                <Link to="/" className="btn-canc">Cancelar</Link>
</form>
                </div>
            
            </div>
    )
}
