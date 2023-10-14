import { Component } from "react";

const style = {
    titulo: {
        marginBottom: '35px'
    }
}

class Title extends Component{
    render(){
        return(
            <h1 className="text-3xl font-bold " style={style.titulo}>{this.props.children}</h1>
        )
    }
}

export default Title