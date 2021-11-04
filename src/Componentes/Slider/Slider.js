import React from "react";
import M from 'materialize-css'
import {Slider, Slide, Caption} from 'react-materialize'
import musica from './musica.jpg';
import teatro from './teatro.jpg'


export default function Sliders(){
    return(
        <Slider
  fullscreen={false}
  options={{
    duration: 500,
    height: 250,
    indicators: false,
    interval: 10000
  }}
>
  <Slide image={<img className="slid"alt="" src={musica}/>}>
    <Caption placement="right">
      <h3>
        13 e 14 de novembro
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Guarde essa data!
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img className="slid" alt="" src={teatro}/>}>
    <Caption placement="left">
      <h3>
        Em Fortaleza - CE
      </h3>
      <h5 className="light grey-text text-lighten-3">
        presencial para lideranças.
      </h5>
    </Caption>
  </Slide>
  
  <Slide image={<img alt="" src=""/>}>
    <Caption placement="center">
      <h3>
        Acompanhe o evento por aqui :-)
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Fique ligado!
      </h5>
    </Caption>
  </Slide>
</Slider>
    );
}