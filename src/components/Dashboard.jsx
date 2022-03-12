import { useState } from 'react';
import '../style/Dashboard.css';
import Temas from './Temas'
import ListadoLineasDeTiempoTema from './ListadoLineasDeTiempoTema';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import logo from '../img/Logo.png'
// import InicioGeneral from './InicioGeneral';

const Dashboard =({usuarios})=>{
	const [open, setOpen]= useState(false)

    return(
        <>
		<div>
			<header id="header" className='headerDashboard'>
				<nav>
					<div className="header_left">
						<div className="btn_ops">
							<button className="ops" onClick={()=>{setOpen(!open)}}>
								<i class="fas fa-bars"></i>
							</button>
						</div>
						<img src={logo} alt=""></img>
					</div>
					<div className="header_rigth" id="header_rigth">
						<p className="usuario" id="nombre_usuario">{usuarios.profileObj.name}</p>
						<img src={usuarios.profileObj.imageUrl} alt="" width="40px"/>
					</div>
				</nav>
			</header>
			
			<BrowserRouter>
				<main className='contenedor_dashboard'>
					<aside id="aside">
						<nav className={open ? 'sidebarOpen' : 'sidebar'}>
							<Link className="opcion" id="op_user" to='/AgregadasRecientemente'>
								<i class="fas fa-house-user"></i>
								<span>Inicio</span>		
								{/* <i className="far fa-home"></i> */}		
							</Link>
							<Link className="opcion" id="op_home" to="/Temas"
								><i class="fas fa-folder"></i>
								<span>Temas</span>
							</Link>
							<Link className="opcion" id="op_sign_out" to="/">
								<i class="fas fa-sign-out-alt"></i>
								<span>Salir</span>
							</Link>
						</nav>
					</aside>
					<div class="contenido" >
						{/* <BrowserRouter> */}
							<Routes>
								<Route
									path='/AgregadasRecientemente'
									// element={<InicioGeneral/>}
								/>
								<Route
									path='/Temas'
									element={<Temas id={usuarios.profileObj.googleId}/>}
								/>
								<Route
									path='/LineaDeTiempo/:id'
									element={<ListadoLineasDeTiempoTema id={usuarios.profileObj.googleId}/>}
								/>
							</Routes>
						
						{/* <InicioGeneral/> */}
						{/* <LineaDeTiempo/> */}
						{/* <Themes id={usuarios.profileObj.googleId}/> */}
					</div>
					{/* <BrowserRouter>
						<Routes>
							<Route
								path='/LineaDeTiempo/:id'
								element={<LineaDeTiempo/>}
							/>
						</Routes>
					</BrowserRouter>  */}
				</main>
			</BrowserRouter> 

		</div>
		<div>
		{/* <BrowserRouter>
			<Routes>
				<Route
					path='/LineaDeTiempo/:id'
					element={<LineaDeTiempo/>}
				/>
			</Routes>
		</BrowserRouter> */}
		
			
				
			
		</div>
    	</>
    );
};

export default Dashboard;
