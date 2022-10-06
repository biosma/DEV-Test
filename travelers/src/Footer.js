import React from "react";
import facebook from "./styles/facebook.png";
import twitter from "./styles/twitter.png";
import instagram from "./styles/instagram.png";

function Footer(){
    return(
        <footer>
          <h2 className="footer-title">Travelers</h2>
            <section className="section-1">
              <a href="#">Destinos</a>
              <a href="#">Hospedajes</a>
              <a href="#">Experiencias</a>
            </section>
            <section className="section-2"> 
              <a href="#">Conocenos</a>
              <a href="#">Socios</a>
              <a href="#">Terminos y Condiciones</a>
            </section>
            <section className="section-3">
              <p>Contactanos</p>
              <a href="#"><img className="img-contact" alt="facebook icon" src={facebook}></img></a>
              <a href="#"><img className="img-contact" alt="twitter icon" src={twitter}></img></a>
              <a href="#"><img className="img-contact" alt="instagram icon" src={instagram}></img></a>
            </section>
        </footer>
    )
}
export default Footer