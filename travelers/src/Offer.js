import React from "react";
import mas  from "./styles/plus.png"
import share from "./styles/cuota.png"
function Offer({imagen}){
    const name = imagen.toString()
    const dias = "- 3 dias 2 noches"
    return ( 
    <div className="conteiner-card">
        <h2 className="offers-card">Ofertas</h2>
        <img
            className="image-card"
            src={`./images/${imagen}.jpg`}
            alt={`Foto de ${imagen}`}
        />
        <div className="description-div">
            <p className="description-card">{name} {dias}</p>
            <p className="price-card">$2.000,00</p>
            <p id="rating-card"><i className="fa fa-star"></i>4.3</p>    
            <ul className="features-card">
                <li>Boleto de avión ida y vuelta</li>
                <li>Estadia</li>
                <li>Tour Nocturno</li>
            </ul>
            <button className="buy-button">Comprar</button>
        </div>
        <button className="img-share-button-offer"><img className="img-share-offer" alt="Share icon" src={share}></img></button>
        <button className="img-mas-button-offer"><img className="img-mas-offer" alt="Add Icon" src={mas}></img></button>
    </div>
    );
 }
 export default Offer;
