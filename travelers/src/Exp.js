import React from "react";
import mas  from "./styles/plus.png"
import share from "./styles/cuota.png"
import cama from "./styles/cama.png"
import avion from "./styles/avion.png"
import marker from "./styles/marker.png"

function Exp({imagenProfile, imagen}){
    const name = imagenProfile.toString()
    const destiny = imagen.toString()
    return ( 
    <div className="box-exp">
        <div className="profile-container">
            <img
                className="profile-pic"
                src={`./images/${imagenProfile}.jpg`}
                alt={`Foto de ${imagenProfile}`}
            />
            <h2 className="profile-name">{name}</h2>
        </div>
        <img
            className="destiny-image"
            src={`./images/${imagen}.jpg`}
            alt={`Foto de ${imagen}`}
        />
        <div className="exp-div">
            <p className="exp-title">Visitando {destiny}</p>
            <p className="price-card">$8.000,00</p>
            <p className="ubication-card"><img className="img-gps" alt="Gps icon" src={marker}></img>{destiny}</p>    
            <p className="airline-card"><img className="img-airplane" alt="Airplane icon" src={avion}></img>Flying Airline</p>
            <p className="hotel-card"><img className="img-bed" alt="Bed icon" src={cama}></img>Olimpo Resort</p>
        </div>
        <div className="buttons-exp">
            <button className="img-share-button"><img className="img-share" alt="Share icon" src={share}></img></button>
            <button className="img-mas-button"><img className="img-mas" alt="Add Icon" src={mas}></img></button>
        </div>
    </div>
    );
 }
 export default Exp;