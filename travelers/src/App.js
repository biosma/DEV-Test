import Destiny from "./Destiny";
import Offer from "./Offer";
import Exp from "./Exp";
import facebook from "./styles/facebook.png";
import twitter from "./styles/twitter.png";
import instagram from "./styles/instagram.png";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Travelers</h1>
        <span className="profile"><img src="" alt="Profile Imagen"></img></span>
      </header>
      <nav>
          <a href="#">Experiencias</a>
          <a href="#">Alojamiento</a>
          <div className="contenedor-searchbar">
            <input type="search" id="search" placeholder="Destinos" />
            <span className="icon"><i className="fa fa-search"></i></span>
          </div>
          <a href="#">Vuelos</a>
          <a href="#">Carros</a>
        </nav>
        <Offer imagen="Madrid"/>
        <nav className="nav-section">
          <h2 className="title-nav">Sugerencias</h2>
          <a href="#">Destinos</a>
          <a href="#">Hospedajes</a>
          <a href="#">Vuelos</a>
        </nav>
        <div className="destiny-container">
          <Destiny imagen="Dolomites-Italy"/>
          <Destiny imagen="Hallstat-Austria"/>
          <Destiny imagen="El Cervino-Suiza"/>
        </div>
        <nav className="nav-section">
          <h2 className="title-nav">Experiencias</h2>
          <a href="#">Amigos</a>
          <a href="#">Expertos</a>
        </nav>
        <Exp imagenProfile="Joaquina" imagen="Hallstat-Austria"></Exp>
        <Exp imagenProfile="Rodolfa" imagen="Dolomites-Italy"></Exp>
        <Exp imagenProfile="Rodolfa" imagen="Madrid"></Exp>
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
              <a href="#"><img className="img-contact" src={facebook}></img></a>
              <a href="#"><img className="img-contact" src={twitter}></img></a>
              <a href="#"><img className="img-contact" src={instagram}></img></a>
            </section>
        </footer>
    </div>
  );
}

export default App;
