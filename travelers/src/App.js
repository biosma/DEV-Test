import React, { useState, useEffect } from 'react'; 
import Offer from "./Offer";
import Exp from "./Exp";
import CarouselDestiny from './CarouselDestiny';
import Footer from "./Footer"
import flechaizq from "./styles/flecha-pequena-izquierda.png"
import flechader from "./styles/flecha-pequena-derecha.png"
import lupa from "./styles/busqueda.png"
import "./styles/styles.css";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';


function App() {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 375px)").matches
  )
  useEffect(() => {
    window
    .matchMedia("(max-width: 375px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Travelers</h1>
        <span className="profile"><img className="profile-img" src="./images/Joaquina.jpg" alt="Profile Imagen"></img>▼</span>
      </header>
      <nav className='nav-header'>
          <a href="#experiencia">Experiencias</a>
          <a href="#">Alojamiento</a>
          <div className="contenedor-searchbar">
            <input type="search" id="search" placeholder="Destinos" />
            <div className="icon-container">
              <img className="icon-lupa" src={lupa} alt={`icono lupa`}/>
            </div>  
          </div>
          <a href="#">Vuelos</a>
          <a href="#">Carros</a>
      </nav>
      {matches && 
      <CarouselProvider className='slider-prov'
          naturalSlideWidth={375}
          naturalSlideHeight={400}
          totalSlides={3}
        >
          <ButtonBack><img
            className="slider-izq"
            src={flechaizq}
            alt={`icono flecha izquierda`}
        /></ButtonBack>
          <Slider className="slider">
            <Slide className="slide"index={0}><Offer imagen="Madrid"/></Slide>
            <Slide className="slide"index={1}><Offer imagen="Dolomites-Italy"/></Slide>
            <Slide className="slide"index={2}><Offer imagen="El Cervino-Suiza"/></Slide>
          </Slider>
        <ButtonNext><img
            className="slider-der"
            src={flechader}
            alt={`icono flecha derecha`}
        /></ButtonNext>
        </CarouselProvider>
        }
        {!matches && 
        <CarouselProvider className='slider-prov'
            naturalSlideWidth={1440}
            naturalSlideHeight={600}
            totalSlides={3}
          >
            <ButtonBack><img
              className="slider-izq"
              src={flechaizq}
              alt={`icono flecha izquierda`}
          /></ButtonBack>
            <Slider className="slider">
              <Slide className="slide"index={0}><Offer imagen="Madrid"/></Slide>
              <Slide className="slide"index={1}><Offer imagen="Dolomites-Italy"/></Slide>
              <Slide className="slide"index={2}><Offer imagen="El Cervino-Suiza"/></Slide>
            </Slider>
          <ButtonNext><img
              className="slider-der"
              src={flechader}
              alt={`icono flecha derecha`}
          /></ButtonNext>
          </CarouselProvider>
          }
      <nav className="nav-section">
        <h2 className="title-nav">Sugerencias</h2>
        <a href="#">Destinos</a>
        <a href="#">Hospedajes</a>
        <a href="#">Vuelos</a>
      </nav>
      <div className='destiny-container'>
        <CarouselDestiny/>
        </div>
      {!matches && <div>
        <nav className="nav-section">
          <h2 className="title-nav">Experiencias</h2>
          <a href="#">Amigos</a>
          <a href="#">Expertos</a>
        </nav>
        <Exp imagenProfile="Joaquina" imagen="Hallstat-Austria"></Exp>
        <Exp imagenProfile="Rodolfa" imagen="Dolomites-Italy"></Exp>
        <Exp imagenProfile="Rodolfa" imagen="Madrid"></Exp>
        <Footer/></div>}
    </div>
  );
}

export default App;
