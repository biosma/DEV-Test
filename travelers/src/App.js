import Destiny from "./Destiny";
import Offer from "./Offer";
import "./styles/styles.css"
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
        <div className="destiny-container">
          <Destiny imagen="Dolomites-Italy"/>
          <Destiny imagen="Hallstat-Austria"/>
          <Destiny imagen="El Cervino-Suiza"/>
        </div>
    </div>
  );
}

export default App;
