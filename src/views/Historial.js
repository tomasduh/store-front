import React, { useState, useEffect } from "react";
import Layout from '../components/Layout';
import Title from "../components/Title";
import { useNavigate } from 'react-router-dom';
import NavbarPedidos from "../components/NavbarPedidos";
import HistorialPedidos from "../components/HistorialPedidos";

function Historial(props) {
    const { cliente } = props;
    const navigate = useNavigate();
    const [pedidos, setPedidos] = useState([]);

    // Utiliza useEffect para cargar los pedidos cuando el componente se monta
    useEffect(() => {
        const traerPedidos = async () => {
        try {
            const response = await fetch('http://localhost:3000/pedidos/');
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
  
    }, []); 

    const handleTienda = () => {
        navigate('/');
      };
    
      return (
        <div>
          <NavbarPedidos
            handleTienda={handleTienda}
          />
          <Layout>
            <Title>Historial de Pedidos Clientes</Title>
            <HistorialPedidos pedidos={pedidos} cliente={cliente}/>
          </Layout>
        </div>
      );
}

export default Historial;