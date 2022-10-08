import React, { Component } from 'react';
import Destiny from "./Destiny";
import flechaizq from "./styles/flecha-circulo-izquierda.png"
import flechader from "./styles/flecha-circulo-derecha.png"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";


function CarouselDestiny(){
    return(
    <CarouselProvider className='slider-prov-destiny'
    naturalSlideWidth={360}
    naturalSlideHeight={420}
    totalSlides={4}
    visibleSlides={3}>
      <ButtonBack className="slider-izq-button"><img
        className="slider-izq-destiny"
        src={flechaizq}
        alt={`icono flecha izquierda`}
    /></ButtonBack>
      <Slider className="slider-destiny">
        <Slide className="slide-destiny" index={0}><Destiny imagen="El Cervino-Suiza"></Destiny></Slide>
        <Slide className="slide-destiny" index={1}><Destiny imagen="Dolomites-Italy"></Destiny></Slide>
        <Slide className="slide-destiny" index={2}><Destiny imagen="Hallstat-Austria"></Destiny></Slide>
        <Slide className="slide-destiny" index={3}><Destiny imagen="Madrid"></Destiny></Slide>
      </Slider>
      <ButtonNext className="slider-der-button"><img
        className="slider-der-destiny"
        src={flechader}
        alt={`icono flecha derecha`}
    /></ButtonNext>
    </CarouselProvider>)
    }
    export default CarouselDestiny