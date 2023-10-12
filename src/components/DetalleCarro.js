import { Component } from "react";
import ButtonPedido from "./ButtonPedido"

const styles = {
    detalleCarro:{
        backgroundColor: 'white',
        position: 'absolute',
        top: 60,
        boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50
    },
    ul:{
        margin: 0,
        padding: 0
    },
    producto:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 10px',
        borderBottom: 'solid 1px #aaa'
    }
}

class DetalleCarro extends Component{

    render(){

        const { carro, hacerPedido } = this.props
        let total = 0
        carro.map(x =>
            total = total+(x.cantidad * x.precio))
        return(
            <div style={styles.detalleCarro}>
                <ul style={styles.ul}>
                    {carro.map(x => 
                    <li key={x.name} style={styles.producto}>
                        <img alt = {x.name} src={x.img} width='50' height='35'borderradius='60px'/>
                        {x.name} <span>{x.cantidad}</span>
                    </li>)}
                    <li style={styles.producto}>
                        <span>Su Total Es: </span>
                        <span><b>{total}</b></span>
                    </li>
                    <li style={styles.producto}>
                        <span></span>
                        <ButtonPedido onClick = {() => hacerPedido(carro, total)}>
                            Hacer pedido
                        </ButtonPedido> 
                    </li>  
                </ul>
            </div>
        )
    }
}

export default DetalleCarro