import React, { useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo-bank.png';
import { Link } from "react-router-dom";
const Navbar=() =>{

    const [menu, setMenu]= useState("cliente");
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo-banco" />
               <Link style={{textDecoration:'none'}} to =''> <p>DIGIBANK</p></Link>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("cliente")}}><Link style={{textDecoration:'none'}} to ='/cliente'>Crear Cliente</Link>{menu==="cliente"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("listado")}}><Link style={{textDecoration:'none'}} to='/listado'>Listado de clientes</Link>{menu==="listado"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("institucional")}}><Link style={{textDecoration:'none'}} to='/institucional'>Institucional</Link>{menu==="institucional"? <hr/>:<></>}</li>
                
            </ul>
        </div>
    )
}

export default Navbar;