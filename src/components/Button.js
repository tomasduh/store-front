import { Component } from "react";

const style = {
    button:{
        border: 'none',
        backgroundColor:  'green',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '5px',
        fontSize: '15px',
        cursor: 'pointer',
    }
}

class Button extends Component{
    render(){
        return(
            <button style={style.button}{...this.props}/>
        )
    }


}

export default Button