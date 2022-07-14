import React from 'react'
import logoA from '../images/logoAmarillo.png';
import './footer.css';
import facebook from '../images/F.png';
import instagram from '../images/I.png';
import youtube from '../images/y.png';
import twitter from '../images/t.png';
import linkedin from '../images/il.png';
import tiktok from '../images/tk.png';

export default function Footer() {
    return (
        <footer className='footerContainer'>
            <div className='infoContainer'>
                <div >
                    <h1>Sobre Nosotros</h1>
                    <ul>
                        <li>Quienes Somos</li>
                        <li>Sala de prensa</li>
                        <li>Trabaja con Nosotros</li>
                        <li>Premios</li>
                    </ul>
                </div>

                <div>
                    <h1>Cursos</h1>
                    <ul>
                        <li>Desarrollo</li>
                        <li>Marketing</li>
                        <li>E-commerce</li>
                        <li>Estrategia Digital</li>
                        <li>Negocios Digitales</li>
                        <li>Diseño</li>
                    </ul>
                </div>

                <div>
                    <h1>Contácto</h1>
                    <ul>
                        <li>Oficina</li>
                        <li>Centro de ayuda</li>
                        <li>Programa Partners</li>
                        <li>Programa de afiliados</li>
                    </ul>
                </div>
                <div>
                    <h1>Recursos</h1>
                    <ul>
                        <li>Digital Gift</li>
                        <li>Blog</li>
                        <li>Communidad</li>
                        <li>Foro</li>
                    </ul>
                </div>

            </div>
            <div className='mediaContainer'>
                <img src={logoA} alt='not found' />
                <div>
                    <a href='https://www.facebook.com' target='blank'><img src={facebook} alt='notfound' /></a>
                    <a href='https://www.instagram.com/masquepartners/?hl=es-la' target='blank'><img src={instagram} alt='notfound' /></a>
                    <a href='https://www.youtube.com' target='blank'><img src={youtube} alt='notfound' /></a>
                    <a href='https://www.twitter.com' target='blank'><img src={twitter} alt='notfound' /></a>
                    <a href='https://www.linkedin.com' target='blank'><img src={linkedin} alt='notfound' /></a>
                    <a href='https://www.tiktok.com' target='blank'><img src={tiktok} alt='notfound' /></a>
                    <p>Todos los derechos reservados <em>masquepartners.com</em></p>
                </div>
            </div>
        </footer>
    )
}
