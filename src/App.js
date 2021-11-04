import './App.css';
import Video from './Componentes/Video/Video';
import 'materialize-css/dist/css/materialize.min.css'
import Sliders from './Componentes/Slider/Slider';

function App() {
  return (
      <header className="App-header">
        <Video />
        <h2>Bem-vindo(a)!</h2>
        
        <h1 className="center ">Encontro Estadual do Ministério de Música e Artes</h1>
        <Sliders id="slides"/>
      </header>
  );
}

export default App;
