import React from "react";
import banner from "../Assets/banco-hz.jpg";
import {Link}  from "react-router-dom";
import './Institucional.css';

const Institucional =()=>{
    return (
        <div style={{margin: '3% 12%'}}>
            <div className="imagen-banner" >
                <img src={banner} alt="banner-img"  width='100%' height='220em'/>
            </div>
            <section className="bio-bank">
            <p style={{textIndent:'3.5em'}}>Banco DigitBank es una de las entidades privadas líderes del Sistema Financiero Argentino con presencia en todas las provincias del país. Forma parte del grupo IT-BANK, una de las entidades financieras más importantes de la región, con más de 25 años de experiencia.</p>
            <p>Atiende todos los segmentos de clientes:personas, empresas y organismos públicos, ofreciendo servicios y productos adecuados a sus necesidades.</p>
              <button className="btn-inst"><Link style={{textDecoration:'none'}} to='/cliente'>Quiero formar parte</Link></button>
              </section>
        </div>
    )
}

export default Institucional;