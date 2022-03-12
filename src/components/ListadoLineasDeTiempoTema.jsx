import React, {useState} from "react";

import '../style/Temas.css'
import '../style/ListadoLineasDeTiempoTema.css'

const ListadoLineasDeTiempoTema = () => {
    //MODAL PARA AGREGAR LÍNEA DE TIEMPO
    const ModalAgregarLinea = () => {
        return (
            <>
                <div className="modalAgregarTema">
                    <form className="formTema">
                        <div className="contenedorModalTema">
                            <h3>REGISTRAR LÍNEA DE TIEMPO</h3>
                            <div className="formContenidoTema">
                                <p>
                                    <label>Título</label>
                                    <input
                                        type="text"
                                        name='Titulo'
                                    ></input>
                                </p>
                                <p>
                                    <label>Palabras clave</label>
                                    <textarea
                                        rows="2"
                                        cols="50"
                                        placeholder="Palabras clave"
                                        name="PalabrasClave"
                                        style={{resize:'none'}}
                                    ></textarea>
                                </p>
                                <p>
                                    <label>Descripcion</label>
                                    <textarea
                                        rows="3"
                                        cols="50"
                                        placeholder="Descripcion"
                                        name="Descripcion"
                                        style={{resize:'none'}}
                                    ></textarea>
                                </p>
                                <div className="botonesModalTema">
                                    <button 
                                        className="btnRegistrar"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            // NuevaOrden()
                                        }}
                                    >Registrar</button>
                                    <button 
                                        className="btnCancelar"
                                        onClick={() => {setFormLinea(false)}}
                                    >Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }

    const [formLinea, setFormLinea] = useState(false);
	const onFormLinea = () => {
		setFormLinea(!formLinea);
	};

    const ModalCompartir = () => {
        return (
            <>
                <div className="modalCompartirLinea">
                    <form className="formCompartir">
                        <div className="contenedorModalCompartir">
                            <h3>Compartir mediante:</h3>
                            <div className="formContenidoCompartir">
                                <div className="iconosRedesSociales">
                                    <i class="fa-brands fa-facebook" style={{color:'#166FE5'}}></i>
                                    <i class="fa-brands fa-whatsapp" style={{color:'#25D366'}}></i>
                                </div>
                                <p>
                                    <label>URL</label>
                                    <div style={{display:'flex', columnGap:'3%'}}>
                                        <input
                                            type="text"
                                            name='Titulo'
                                            value="https://www.nombreapp.com/linea/15423"
                                        ></input>
                                        <i class="fa-regular fa-clipboard-check" style={{fontSize:'35px', marginTop:'3%'}} ></i>
                                    </div>
                                </p>
                                <div className="botonesModalCompartir">
                                    <button 
                                        className="btnCancelar"
                                        onClick={() => {setFormCompartir(false)}}
                                    >Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }

    const [formCompartir, setFormCompartir] = useState(false);
	const onFormCompartir = () => {
		setFormCompartir(!formCompartir);
	};

    return(
        <div className="contenidoLineas">
            <div className="accionesListadoLinea">
                <div className="btnLinea" onClick={onFormLinea}>
                    <i class="fa-regular fa-circle-plus"></i>
                    <p>Línea</p>
                </div>
                {formLinea && <ModalAgregarLinea/>}
                <h2>TEMA SELECCIONADO</h2>
            </div>
            <div className="listadoLineas">
                <div className="LineaGeneral">
                    <div className="Linea">
                        <p>Línea de tiempo 1</p>
                        <div className="iconosLinea">
                            <i class="fa-regular fa-pen-to-square"></i>
                            <i class="fa-regular fa-trash-can"></i>
                            <i class="fa-regular fa-arrow-up-right-from-square"></i>
                        </div>
                    </div>
                    <i class="fa-regular fa-share-nodes" style={{fontSize:'25px', marginTop:'1%'}} onClick={onFormCompartir}></i>
                    {formCompartir && <ModalCompartir/>}
                </div>
                <div className="LineaGeneral">
                    <div className="Linea">
                        <p>Línea de tiempo 2</p>
                        <div className="iconosLinea">
                            <i class="fa-regular fa-pen-to-square"></i>
                            <i class="fa-regular fa-trash-can"></i>
                            <i class="fa-regular fa-arrow-up-right-from-square"></i>
                        </div>
                    </div>
                    <i class="fa-regular fa-share-nodes" style={{fontSize:'25px', marginTop:'1%'}}></i>
                </div>
                <div className="LineaGeneral">
                    <div className="Linea">
                        <p>Línea de tiempo 3</p>
                        <div className="iconosLinea">
                            <i class="fa-regular fa-pen-to-square"></i>
                            <i class="fa-regular fa-trash-can"></i>
                            <i class="fa-regular fa-arrow-up-right-from-square"></i>
                        </div>
                    </div>
                    <i class="fa-regular fa-share-nodes" style={{fontSize:'25px', marginTop:'1%'}}></i>
                </div>
                <div className="LineaGeneral">
                    <div className="Linea">
                        <p>Línea de tiempo 4</p>
                        <div className="iconosLinea">
                            <i class="fa-regular fa-pen-to-square"></i>
                            <i class="fa-regular fa-trash-can"></i>
                            <i class="fa-regular fa-arrow-up-right-from-square"></i>
                        </div>
                    </div>
                    <i class="fa-regular fa-share-nodes" style={{fontSize:'25px', marginTop:'1%'}}></i>
                </div>
                <div className="LineaGeneral">
                    <div className="Linea">
                        <p>Línea de tiempo 5</p>
                        <div className="iconosLinea">
                            <i class="fa-regular fa-pen-to-square"></i>
                            <i class="fa-regular fa-trash-can"></i>
                            <i class="fa-regular fa-arrow-up-right-from-square"></i>
                        </div>
                    </div>
                    <i class="fa-regular fa-share-nodes" style={{fontSize:'25px', marginTop:'1%'}}></i>
                </div>
            </div>
        </div>
    )
}

export default ListadoLineasDeTiempoTema