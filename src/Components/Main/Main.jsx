import React from "react";
import './Main.css';
import mainImage from "../Assets/banco.jpg";
const Main = ()=>{
    return(
        <div className="main">
            <img className="imgMain" src={mainImage} alt="imagenPpal" />
        </div>
    )
}

export default Main;