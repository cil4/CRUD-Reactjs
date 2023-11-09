import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Institucional from './Components/Institucional/Institucional';
import CrearCliente from './Pages/CrearCliente';
import Listado from './Pages/Listado';
import EditarCliente from './Pages/EditarCliente';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
          <Route path='/' element={<Main/>}/>
        <Route path='/cliente' element={<CrearCliente/>}/>

        <Route path='/listado' element={<Listado/>}/>
        <Route path='/institucional' element={<Institucional/>}/>
        <Route path='/editarCliente/:id' element={<EditarCliente/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
