import React from "react";

import { GoogleLogin } from 'react-google-login';
import { useState,useEffect } from 'react'

import '../style/PaginaPrincipal.css';
import '../style/Acceso.css';

import logo from '../img/Logo.png'
import imgLogin from '../img/imgLogin.jpeg'

import url from '../keys/backend_keys';
import Dashboard from './Dashboard';

const Acceso = () => {
    const [logeado, setLogeado] = useState(null)
    const responseGoogle = (response) => {
        console.log(response);
        setLogeado(response)
    }

    useEffect(
        function(){
            if(logeado!=null){
                fetch(`${url}/api/register`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        codigo: logeado?.profileObj.googleId,
                        name: logeado?.profileObj.name,
                        email: logeado?.profileObj.email,
                        photo: logeado?.profileObj.imageUrl,
                        current: true,
                        
                    }),
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        console.log(data)
                    })
            }
        },[logeado]
    )

    return (
        <div>
            {
                logeado != null ? 
                <>
                    <Dashboard usuarios={logeado}/>
                </>:
                <div>
                    <header className="header">
                        <div className="contenedorIMG">
                            <img src={logo} alt=''></img>
                        </div>
                    </header>
                    <div className="cuerpoAcceso">
                        <div className="contenidoForm">
                            <p>Iniciar Sesión</p>
                            <form className='formularioAcceso'>
                                <div className="btnLogin">
                                {
                                    logeado == null ? <GoogleLogin
                                        clientId="1056717193966-him0af1q4ed7csfr3n0iol6cct22qkj5.apps.googleusercontent.com"
                                        buttonText="Continuar con Google"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        // onClick={handleClick}
                                    /> : null
                                }
                                </div>
                            </form>
                        </div>
                        <img src={imgLogin} alt=''></img>
                    </div>
                </div>
            }
        </div>
    )
}

export default Acceso