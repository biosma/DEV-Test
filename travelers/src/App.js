import React, { Component } from 'react'; 
import Offer from "./Offer";
import Exp from "./Exp";
import CarouselDestiny from './CarouselDestiny';
import Footer from "./Footer"
import flechaizq from "./styles/flecha-circulo-izquierda.png"
import flechader from "./styles/flecha-circulo-derecha.png"
import "./styles/styles.css";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Travelers</h1>
        <span className="profile"><img src="" alt="Profile Imagen"></img></span>
      </header>
      <nav className='nav-header'>
          <a href="#experiencia">Experiencias</a>
          <a href="#">Alojamiento</a>
          <div className="contenedor-searchbar">
            <input type="search" id="search" placeholder="Destinos" />
            <span className="icon"><i className="fa fa-search"></i></span>
          </div>
          <a href="#">Vuelos</a>
          <a href="#">Carros</a>
      </nav>
      <CarouselProvider className='slider-prov'
          naturalSlideWidth={1400}
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
      <nav className="nav-section">
        <h2 className="title-nav">Sugerencias</h2>
        <a href="#">Destinos</a>
        <a href="#">Hospedajes</a>
        <a href="#">Vuelos</a>
      </nav>
      <div className='destiny-container'>
        <CarouselDestiny/>
        </div>
      <nav className="nav-section">
        <h2 className="title-nav">Experiencias</h2>
        <a href="#">Amigos</a>
        <a href="#">Expertos</a>
      </nav>
      <Exp imagenProfile="Joaquina" imagen="Hallstat-Austria"></Exp>
      <Exp imagenProfile="Rodolfa" imagen="Dolomites-Italy"></Exp>
      <Exp imagenProfile="Rodolfa" imagen="Madrid"></Exp>
      <Footer/>
    </div>
  );
}

export default App;