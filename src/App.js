import React from 'react'
import './App.css';
import Video from './Componentes/Video/Video';
import 'materialize-css/dist/css/materialize.min.css'
import Sliders from './Componentes/Slider/Slider';
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <>
    <Video />
      <header className="App-header">
        
        <h2>Bem-vindo(a)!</h2>
        
        <h1 className="center ">Encontro Estadual do Ministério de Música e Artes</h1>
        <Sliders id="slides"/>
      </header> 
      <Footer />
      </>
  );
}

export default App;
