import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PaginaPrincipal from "./components/PaginaPrincipal";
import Acceso from "./components/Acceso";
// import FormularioDatosUsuario from '../src/components/FormularioDatosUsuario'

function App() {
  const [user, setUser]= useState(null)
  return (
    <div>  
        {/* <PaginaPrincipal/> */}
        {/* <Acceso/> */}
        {/* <FormularioDatosUsuario/> */}
       <>
      <BrowserRouter>
        <Routes>
            <Route
                path='/'
                element={<PaginaPrincipal/>}
            />
            <Route
                path='/Acceso'
                element={<Acceso/>}
            />
           {user && (
              <Route
                path='/Dashboard'
                element={<Dashboard usuarios={()=>setUser(true)}/>}
              />
            )}
        </Routes>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;

