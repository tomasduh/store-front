import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Productos from '../components/Productos'
import Layout from '../components/Layout'
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home(props) {
  const [productos, setProductos] = useState([]);
  const [carro, setCarro] = useState([]);
  const [esCarroVisible, setEsCarroVisible] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, cliente, setIsAuthenticated } = props;

  useEffect(() => {
      traerProductos();
  }, []); // Se ejecutará una vez al montar el componente

  const traerProductos = () => {
    fetch('http://localhost:3000/productos')
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud a la API falló');
        }
        return response.json();
      })
      .then(data => {
        setProductos(data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const agregarAlCarro = (producto) => {
    if (!isAuthenticated) {
      alert('Debes iniciar sesión para agregar productos al carrito');
    }else{
      const existeProducto = carro.find(x => x.name === producto.name);
      
      if (existeProducto) {
        const nuevoCarro = carro.map(x => (
          x.name === producto.name ? { ...x, cantidad: x.cantidad + 1 } : x
        ));
        setCarro(nuevoCarro);
      } else {
        setCarro([...carro, { ...producto, cantidad: 1 }]);
      }
    }
  }

  const mostrarCarro = () => {
    setEsCarroVisible(!esCarroVisible);
  }

  const hacerPedido = (carro, total) => {
      const pedido = carro.map(producto => ({
        producto: producto._id,
        cantidad: producto.cantidad
      }));
  
      const data = {
        cliente: cliente._id,
        pedido: pedido,
        total: total
      };
  
      fetch('http://localhost:3000/pedidos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        setCarro([]);
        setEsCarroVisible(false);
      })
      .catch(error => {
        alert('Error en el peridodo: ' + error.message);
      })
      .finally(() => {
        alert('Pedido realizado con éxito');
      });
  }

  const handleLogout = () => {
    // Llama a la función pasada como prop
    setIsAuthenticated(false);// Llama a la función pasada como prop
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const pedidos = () => {
    if(cliente.admin){
      navigate('/historial');
    }else{
      navigate('/pedidos');
    }
  }

  return (
    <div>
      <Navbar 
        pedidos={pedidos}
        carro={carro} 
        esCarroVisible={esCarroVisible} 
        mostrarCarro={mostrarCarro} 
        hacerPedido={hacerPedido}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
        isAuthenticated={isAuthenticated}
      />
      <Layout>
        <Title>Tienda</Title>
        <Productos
          agregarAlCarro={agregarAlCarro}
          productos={productos}
        />
      </Layout>
      <Footer/>
    </div>
  )
}

export default Home;
