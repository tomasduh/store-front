import { Component } from "react";
import Button from "./Button";

const style = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '30%',
        padding: '10px',
        borderRadius: '5px'
    },
    img:{
        width: '100%',
        borderRadius: '5px'
    }
}

class Producto extends Component{
    render(){
        const { producto, agregarAlCarro} = this.props
        return(
            <div style={style.producto}>
                <img style={style.img}  alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <h2>{producto.precio}</h2>
                <Button onClick = {() => agregarAlCarro(producto)}>
                    Agregar al Carro
                </Button>
            </div>
        )
    }


}

export default Producto