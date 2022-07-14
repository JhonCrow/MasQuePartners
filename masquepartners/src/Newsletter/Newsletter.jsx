import React from 'react';
import './newsletter.css';
import send from '../images/send.png';

export default function Newsletter() {
    return (
        <div className='nsContainer'>
            <h1>Aprende desde cero</h1>
            <p>Suscribete a nuestro newsletter y no te pierdas nuestra información</p>
            <div className='inputContainer'>
                <input
                    type='email'
                    placeholder='Correo electrónico'
                />
                <button>
                    <img src={send} alt='not found' />
                </button>
            </div>
        </div>
    )
}
