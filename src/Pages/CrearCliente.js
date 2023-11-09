import React,{  useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import './CrearCliente.css';
import { useNavigate } from "react-router-dom";

export default function CrearCliente (){


    let navigate= useNavigate();

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


    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/clientes", cliente)
        navigate("/listado")
    }
    return (
        <div className="formCreacion">
            
                <div className="formCreacion_caja">
                <h2 className="form-title">Registro Cliente</h2>
<form onSubmit={(e)=>onSubmit(e)}>
                <div className="formCreacion_">
                    <label htmlFor="Nombre" className="form-label"></label>
                    <input type={"text"} className="form-control" placeholder="Ingrese nombre"
                    name="nombre" value={nombre}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>

                <div className="formCreacion_">
                    <label htmlFor="Apellido" className="form-label"></label>
                    <input type={"text"} className="form-control" placeholder="Ingrese apellido"
                    name="apellido" value={apellido}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>

                <div className="formCreacion_">
                    <label htmlFor="Dni" className="form-label"></label>
                    <input type={"text"} className="form-control" placeholder="Ingrese DNI"
                    name="dni" value={dni}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>


                <div className="formCreacion_">
                    <label htmlFor="Email" className="form-label"></label>
                    <input type={"text"} className="form-control" placeholder="Ingrese correo electrónico"
                    name="email" value={email}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>

                <div className="formCreacion_">
                    <label htmlFor="Telefono" className="form-label"></label>
                    <input type={"text"} className="form-control" placeholder="Ingrese teléfono"
                    name="telefono" value={telefono}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>

                <div className="formCreacion_">
                    <label htmlFor="EstadoCuenta" className="form-label"></label>
                    <input type={"text"} className="form-control" placeholder="Ingrese
                    una opción: ACTIVA, BLOQUEADA O INACTIVA"
                    name="estadoCuenta" value={estadoCuenta} onChange={(e)=>onInputChange(e)} ></input> 
                
                </div>

                <button type="submit" className="btn-reg">Enviar</button>
                <Link to="/" className="btn-canc">Cancelar</Link>
</form>
                </div>
            
            </div>
    )
}
