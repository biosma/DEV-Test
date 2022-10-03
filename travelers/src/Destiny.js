import React from "react";
import mas  from "./styles/plus.png"
import share from "./styles/cuota.png"
function Destiny({imagen}){
    const name = imagen.toString()
    return ( 
    <div className="box-destiny">
        <div className="buttons-destiny">
{/*             <button className="share-destiny-button"><i className="fa fa-share-alt "></i></button>
            <button className="add-destiny-button"><i className="fa fa-plus"></i></button> */}
            <button className="img-share-button"><img className="img-share" src={share}></img></button>
            <button className="img-mas-button"><img className="img-mas" src={mas}></img></button>
        </div>
        <img
            className="image-destiny"
            src={`./images/${imagen}.jpg`}
            alt={`Foto de ${imagen}`}
        />
        <div className="description-destiny-div">
            <h2 className="destiny-card">{name}</h2>
            <p className="description-destiny-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget felis nunc. Vestibulum...</p>
            <p className="rating-destiny-card"><i className="fa fa-star"></i>4.3</p>    
        </div>
    </div>
    );
 }
 export default Destiny;