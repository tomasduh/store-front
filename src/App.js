import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Pedidos from './views/Pedidos';
import Historial from './views/Historial';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cliente, setCliente] = useState([]);

  return (
    <div className='font-sans font-semibold'>
    <Router>
      <Routes>
        <Route path="/" element={<Home 
            isAuthenticated={isAuthenticated} 
            cliente={cliente} 
            setIsAuthenticated={setIsAuthenticated}
        />} />
        <Route path="/login" element={<Login
          setIsAuthenticated={setIsAuthenticated}
          setCliente={setCliente}
         />} />
        <Route path="/pedidos" element={<Pedidos
          cliente={cliente}
         />} />
        <Route path="/historial" element={<Historial
          cliente={cliente}
        />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;