import React, { useState, useEffect } from "react";
import Layout from '../components/Layout';
import Title from "../components/Title";
import { useNavigate } from 'react-router-dom';
import NavbarPedidos from "../components/NavbarPedidos";
import HistorialPedidos from "../components/HistorialPedidos";
import Footer from "../components/Footer";

function Pedidos(props) {
  const navigate = useNavigate();
  const { cliente } = props;
  const [pedidos, setPedidos] = useState([]);

  // Utiliza useEffect para cargar los pedidos cuando el componente se monta
  useEffect(() => {
    if(cliente._id){
        const traerPedidos = async () => {
          try {
            const response = await fetch('http://localhost:3000/pedidos/' + cliente._id);
            if (!response.ok) {
              throw new Error('La solicitud a la API falló');
            }
            const data = await response.json();
            setPedidos(data);
          } catch (error) {
            console.error(error);
          } 
        };
        traerPedidos();
    }

  }, [cliente._id]); // El segundo argumento es un array de dependencias

  const handleTienda = () => {
    navigate('/');
  };

  return (
    <div>
      <NavbarPedidos
        handleTienda={handleTienda}
      />
      <Layout>
        <Title>Mis Pedidos</Title>
        <HistorialPedidos pedidos={pedidos} cliente={cliente}/>
      </Layout>
      <Footer/>
    </div>
  );
}

export default Pedidos;