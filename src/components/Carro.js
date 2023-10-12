import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import DetalleCarro from './DetalleCarro'
import Sesion from './Sesion'

const styles = {
    carro: {
        border: 'none',
        padding: '10px 25px',
        cursor: 'pointer',
        backgroundColor: 'green',
        borderRadius: '7px',
        color: 'white',
        fontSize: '15px',
    },
    bubble:{
        position: 'relative',
        left: '12px',
        top: '16px',
        zIndex: '2',
    }
}


class Carro extends Component{

    render(){
        const { carro, esCarroVisible, mostrarCarro, hacerPedido, handleLogout, isAuthenticated, handleLogin} = this.props
        const cantidad  = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={styles.bubble}>
                    {cantidad !== 0 ? <BubbleAlert value={cantidad}/>
                    : null}
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {esCarroVisible ? <DetalleCarro carro={carro}
                hacerPedido={hacerPedido}/>
                : null}
                <Sesion 
                    handleLogout={handleLogout}
                    isAuthenticated = {isAuthenticated}
                    handleLogin={handleLogin}
                />
                
            </div>
        )
    }

}

export default Carro;