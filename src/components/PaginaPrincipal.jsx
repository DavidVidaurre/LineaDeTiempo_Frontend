import React from "react";

import '../style/PaginaPrincipal.css';

import logo from '../img/Logo.png'
import img1 from '../img/imgEPICI.png'
import img2 from '../img/imgLineaDeTiempo.jpeg'
import img3 from '../img/imgUNPRG.jpeg'

// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PaginaPrincipal = () => {
    // const navigate = useNavigate()
    // const handleClick = () =>{
    //     navigate('Login')
    // }

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('Acceso')
    }

    return (
        <>
            <header className="header">
                <div className="contenedorIMG">
                    <img src={logo} alt=""></img>
                    <div className="separadorIMG"></div>
                    <img src={img1} alt=''></img>
                </div>
                <div className="contenedorENLACES">
                    <button 
                        onClick={handleClick}
                    >Ingresar</button>
                    <div className="separador"></div>
                    <a href="#nosotros">Sobre Nosotros</a>
                </div>
            </header>
            <body className="cuerpoPagina">
                <section className="seccionPrincipal">
                    <div className="principalTexto">
                        <h1 className="tituloPrincipal">Macrono</h1>
                        <div>
                            <div>
                                <div className="subtituloPrincipal">
                                    <p>Crea tu propia línea de tiempo</p>
                                </div>
                            </div>
                            <div>
                                <div className="resumenPrincipal">
                                    <p>Nuestra aplicación te permite crear temas para 
                                        cada línea de tiempo que tengas, esto te dará el 
                                        control de todo lo que quieras crear.
                                    </p>
                                </div>
                                <div className="btnRegistrar">
                                    <button>Regístrate gratis</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="principalIMG">
                        <div className="imgLinea">
                            <img src={img2} alt=''></img>
                        </div>
                        <div className="cuadrosInstructivos">
                            <div className="cuadro">Crea Temas</div>
                            <div className="cuadro">Crea Líneas</div>
                            <div className="cuadro">Comparte</div>
                        </div>
                    </div>
                </section>
                <section className="aprendeComo">
                    <h1>APRENDE CÓMO</h1>
                    <div className="aprendeUnico">
                        <div className="cuadrosAprende">
                            <i class="fa-light fa-folder-open"></i>
                            <div className="cuadro">
                                <div>Crea Temas</div>
                            </div>
                        </div>
                        <div className="textoAprende">
                            <p>
                                Podrás crear temas que te servirán 
                                para identificar más rápido el 
                                contenido de tu linea de tiempo.
                            </p>
                        </div>
                    </div>
                    <div className="aprendeUnico">
                        <div className="cuadrosAprende">
                            <i class="fa-light fa-timeline-arrow"></i>
                            <div className="cuadro">
                                <div>Crea Líneas</div>
                            </div>
                        </div>
                        <div className="textoAprende">
                            <p>
                                Ingresa el nombre de tu linea de tiempo 
                                y dentro de ella crea diferentes eventos 
                                los cuales formarán parte de la misma.
                            </p>
                        </div>
                    </div>
                    <div className="aprendeUnico">
                        <div className="cuadrosAprende">
                            <i class="fa-regular fa-share-nodes"></i>
                            <div className="cuadro">
                                <div>Comparte</div>
                            </div>
                        </div>
                        <div className="textoAprende">
                            <p>
                                Una vez terminada tu linea de tiempo,
                                podrás compartirlo con los que tú quieras.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="seccionCreado">
                    <h1>CREADO POR</h1>
                    <div className="imgCreado">
                        <div>
                            <img src={img3} alt=''></img>
                        </div>
                        <div>
                            <img src={img1} alt=''></img>
                        </div>
                    </div>
                </section>
                <section className="nosotros" id="nosotros">
                    <h1>NOSOTROS</h1>
                    <div className="filaNosotros">
                        <div className="filaNosotros1">
                            <h3>Díaz Ramón Aldair Erikson</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="filaNosotros1">
                            <h3>Maquen Vidaurre Luis David</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="filaNosotros1">
                            <h3>Tezén Villanueva Elvis Arturo</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="filaNosotros">
                        <div className="filaNosotros2">
                            <h3>Tirado Julca Gianmarco</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="filaNosotros2">
                            <h3>Veliz Chempén Diego Armando</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="filaNosotros2">
                            <h3>Terán Santa Cruz Franklin Edinson</h3>
                            <p>Asesor</p>
                        </div>
                    </div>
                </section>
            </body>
            <footer className="footerCopy">
                <p>© 2022 Copyright: macrono.com</p>
            </footer>
        </>
    )
}

export default PaginaPrincipal