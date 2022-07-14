import React from 'react';
import { useState } from 'react';
import pp from '../images/form.png';
import './form.css';
import emailjs from '@emailjs/browser';

function validate(input) {
    let errors = {};
    console.log(errors);
    if (!input.Nombre) {
        errors.Nombre = 'El nombre es requerido.';
    } else if (input.Nombre.length > 30) {
        errors.Nombre = 'no debe exceder las 30 letras';
    } else if (!/^[A-Z ]+$/i.test(input.Nombre)) {
        errors.Nombre = 'Solo pueden ser letras';
    };

    if (!input.Apellido) {
        errors.Apellido = 'El apellido es requerido.';
    } else if (input.Apellido.length > 30) {
        errors.Apellido = 'no debe exceder las 30 letras';
    } else if (!/^[A-Z ]+$/i.test(input.Apellido)) {
        errors.Apellido = 'Solo pueden ser letras';
    };

    if (!input.Email) {
        errors.Email = 'El email es requerido.';
    } else if (input.Email.length > 30) {
        errors.Email = 'no debe exceder las 30 caracteres';
    } else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(input.Email)) {
        errors.Email = 'No es un correo valido';
    }
    if (!input.Celular) {
        errors.Celular = 'Debe especificar el celular.';
    };

    if (!input.Curso) {
        errors.Curso = 'Debe indicar el curso';
    };
    if (!input.Nombre && !input.Apellido && !input.Email && !input.Celular && !input.Curso) {
        errors.Curso = '*Todos los campos son requeridos';
    };
    return errors;
};

export default function Form() {
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        Nombre: '',
        Apellido: '',
        Email: '',
        Celular: '',
        Curso: '',
    });

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    };

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_krst84i', 'template_n38t3av', e.target, '7T9CRibpTEt0xSWnE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setInput({
            Nombre: '',
            Apellido: '',
            Email: '',
            Celular: '',
            Curso: '',
        });
    }

    function geo() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(succes, error);
        };
        function error(err) {
            console.warn(err)
        };

        function succes(geolocationPosition) {
            var coords = geolocationPosition.coords;
            var latitude = coords.latitude;
            var longitude = coords.longitude;
            var maps = `https://www.google.com/maps/@${latitude},${longitude},5z`;
            return maps;
        };
    }

    return (
        <div className='firstContainer'>

            <div>
                <img src={pp} alt='not found' />
                {geo()}
            </div>

            <div>
                <h2>Comencemso juntos <br></br>tu formación</h2>
                <form className='formContainer' onSubmit={(e) => sendEmail(e)}>

                    <div className='Columns'>
                        <div className='column1'>
                            <div>
                                <input
                                    type='text'
                                    name='Nombre'
                                    value={input.Nombre}
                                    placeholder='Nombre'
                                    onChange={e => handleInputChange(e)}
                                />
                                {errors.Nombre && (<p className='alertError'>{errors.Nombre}</p>)}
                            </div>
                            <div>
                                <input
                                    type='text'
                                    name='Apellido'
                                    value={input.Apellido}
                                    placeholder='Apellido'
                                    onChange={e => handleInputChange(e)}
                                />
                                {errors.Apellido && (<p className='alertError'>{errors.Apellido}</p>)}
                            </div>
                            <div>
                                <input
                                    type='text'
                                    name='Email'
                                    value={input.Email}
                                    placeholder='Correo electrónico'
                                    onChange={e => handleInputChange(e)}
                                />
                                {errors.Email && (<p className='alertError'>{errors.Email}</p>)}
                            </div>
                        </div>

                        <div className='column2'>
                            <div>
                                <input
                                    type='number'
                                    name='Celular'
                                    value={input.Celular}
                                    placeholder='Celular'
                                    onChange={e => handleInputChange(e)}
                                />
                                {errors.Celular && (<p className='alertError'>{errors.Celular}</p>)}
                            </div>

                            <div className='opt'>
                                <select
                                    name='Curso'
                                    onChange={e => handleInputChange(e)}>
                                    <option value=''>Curso de interés</option>
                                    <option value='Desarrollo'>Desarrollo</option>
                                    <option value='Marketing'>Marketing</option>
                                    <option value='E-commerce'>E-commerce</option>
                                    <option value='Estrategia Digital'>Estrategia Digital</option>
                                    <option value='Negocios Digitales'>Negocios Digitales</option>
                                    <option value='Diseño'>Diseño</option>
                                </select>
                                {errors.Curso && (<p className='alertError'>{errors.Curso}</p>)}
                            </div>
                        </div>

                    </div>
                    <span>*Todos los campos son requeridos</span><br></br><br></br>
                    <button type='Submit' className='sendBtn' >COMIENZA AHORA</button>
                </form>

            </div >

        </div >
    )
}
