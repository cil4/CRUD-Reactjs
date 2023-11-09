import React from "react";
import './Footer.css';
import qr from '../Assets/QR_code_for_mobile_English_Wikipedia.svg';
import imgfinanc from '../Assets/BCRA_USF_Naranja.png';
import gmail from '../Assets/gmail-logo.png';
import phone from '../Assets/phone-logo.png';
import ig from '../Assets/instagram-logo.png';
import fb from '../Assets/facebook-logo.png';
import lk from '../Assets/linkedin-logo.png'

import location from '../Assets/location-logo.png';
const Footer = ()=>{
    return (
        <div>
        <div className="footerDiv">
            <section className="qr">
                <img src={qr} alt="codigoQR" width='120px'/>
                <div className="digi">
                <h4>¿Necesitás ayuda?</h4>
                <p>Chateá con <strong>Digi</strong>, nuestra asistente virtual de DigiBank. <br/>Sólo tenés que escanear el código QR y vas a poder resolver tus consultas las 24 horas.</p>
                </div>
            </section>
        </div>
        <section className="redes">
            <ul className="redes_lista">
            <li className="redes_lista_item"> <img src={gmail} alt="logo-gmail" /> Contáctenos</li>
            <li className="redes_lista_item"> <img src={phone} alt="logo-phone" /> Teléfonos útiles</li>
            <li className="redes_lista_item">Redes</li>

            <ul className="redes_logos">
            <li><img src={ig} alt="logo-instagram" /></li>
            <li><img src={fb} alt="logo-facebook" /></li>
            <li><img src={lk} alt="logo-linkedin" /></li>
            </ul>

            <li className="redes_lista_item"> <img src={location} alt="logo-pin" /> Sucursales y cajeros</li>
            </ul>
        </section>
        <section className="infoFinanc">
            
            <ul className="informacionImp"> 
                <li>Defensa al Consumidor </li>
                <li>Información al usuario financiero</li>
                <li>Términos y condiciones</li>
                <li>Comisiones, cargos y tasas</li>
            </ul>
            <img src={imgfinanc} alt="img-info-usuario-financ" width='350px' height='125px' />
        </section>

            <div className="footerP">
            <p> - Banco DigiBank Argentina S.A 2023 - </p>

            </div>
        </div>
        
    )
}
export default Footer;