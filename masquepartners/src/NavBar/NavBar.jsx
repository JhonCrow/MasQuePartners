import React from 'react';
import './navbar.css';
import logo from '../images/logo.png';

export default function NavBar() {
    return (
        <div>
            <nav className='navContainer'>
                <img src={logo} alt='not found' />
                <ul>
                    <li><a>Inicio</a></li>
                    <li><a>Cursos</a></li>
                    <li><a>Digital Gift</a></li>
                    <li><a>Blog</a></li>
                    <li><button>Iniciar Sesión</button></li>
                </ul>
            </nav>
        </div>
    )
}
