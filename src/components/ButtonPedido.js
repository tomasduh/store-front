import { Component } from "react";

const style = {
    button:{
        border: 'none',
        backgroundColor:  'green',
        color: 'white',
        padding: '12px 10px',
        borderRadius: '5px',
        fontSize: '15px',
        cursor: 'pointer',
    }
}

class ButtonPedido extends Component{
    render(){
        return(
            <button style={style.button}{...this.props}/>
        )
    }


}

export default ButtonPedido