import React from "react";
import M from 'materialize-css'
import {Slider, Slide, Caption} from 'react-materialize'


export default function Sliders(){
    return(
        <Slider
  fullscreen={false}
  options={{
    duration: 500,
    height: 300,
    indicators: true,
    interval: 10000
  }}
>
  <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/1"/>}>
    <Caption placement="center">
      <h3>
        13 e 14 de novembro
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Guarde essa data!
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/2"/>}>
    <Caption placement="left">
      <h3>
        Em Fortaleza - CE
      </h3>
      <h5 className="light grey-text text-lighten-3">
        presencial para lideranças.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://lorempixel.com/780/580/nature/3"/>}>
    <Caption placement="right">
      <h3>
        Online
      </h3>
      <h5 className="light grey-text text-lighten-3">
        para demais irmãos.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4"/>}>
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