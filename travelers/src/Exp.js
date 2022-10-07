import React from "react";
import mas  from "./styles/plus.png"
import share from "./styles/cuota.png"
import cama from "./styles/cama.png"
import avion from "./styles/avion.png"
import marker from "./styles/marker.png"
import flechaizq from "./styles/flecha-circulo-izquierda.png"
import flechader from "./styles/flecha-circulo-derecha.png"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";

function Exp({imagenProfile, imagen}){
    const name = imagenProfile.toString()
    const destiny = imagen.toString()
    return ( 
    <div className="box-exp">
        <a  name="experiencia" id="experiencias"></a>
        <div className="profile-container">
            <img
                className="profile-pic"
                src={`./images/${imagenProfile}.jpg`}
                alt={`Foto de ${imagenProfile}`}
            />
            <h2 className="profile-name">{name}</h2>
        </div>
{/*         <CarouselProvider className='slider-prov-exp'
          naturalSlideWidth={600}
          naturalSlideHeight={400}
          totalSlides={3}
        >
          <ButtonBack><img
            className="slider-izq-exp"
            src={flechaizq}
            alt={`icono flecha izquierda`}
        /></ButtonBack>
          <Slider className="slider">
            <Slide className="slide"index={0}><img
            className="destiny-image"
            src={`./images/${imagen}.jpg`}
            alt={`Foto de ${imagen}`}
        /></Slide>
            <Slide className="slide"index={1}><img
            className="destiny-image"
            src={`./images/${imagen}.jpg`}
            alt={`Foto de ${imagen}`}
        /></Slide>
            <Slide className="slide" index={2}><img
            className="destiny-image"
            src={`./images/${imagen}.jpg`}
            alt={`Foto de ${imagen}`}
        /></Slide>
          </Slider>
        <ButtonNext><img
            className="slider-der-exp"
            src={flechader}
            alt={`icono flecha derecha`}
        /></ButtonNext>
        </CarouselProvider> */}
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