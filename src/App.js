import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cliente, setCliente] = useState([]);

  return (
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
      </Routes>
    </Router>
  );
}

export default App;