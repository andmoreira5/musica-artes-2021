import React from 'react'
import logo from './logo.png'
import './estilo.css'   

export default function Footer(){
    return(

        <footer class="page-footer ">
          <div class="container">
            <div class="row">
              <div class="col l12 s12 center">
                <img src={logo} className="logo " />
                <div class="footer-copyright">
                <div class="container  center">
                      <a id="developer" href="mailto:and.moreira5@gmail.com" className="white-text">Desenvolvido por Anderson Moreira</a> 
                </div>
            </div>
              </div>
              
            </div>
          </div>
          
        </footer>
       
    );
}