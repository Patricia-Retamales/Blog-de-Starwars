import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import injectContext from "./store/appContext";
import DetallePersonaje from "./components/DetallePersonaje";
import DetallePlanet from "./components/DetallePlanet";
import DetalleSpecies from "./components/DetalleSpecies";
import DetalleVehicles from "./components/DetalleVehicles";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
       <Route path="/detalle/personaje/:id" element={<DetallePersonaje/>}/>
      <Route path="/detalle/planet/:id" element={<DetallePlanet/>}/>
      <Route path="/detalle/specie/:id" element={<DetalleSpecies/>}/>
      <Route path="/detalle/vehicle/:id" element={<DetalleVehicles/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
