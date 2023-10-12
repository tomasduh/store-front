import { Component } from "react";

const style ={
    logo:{
        fontWeigth: '1000',
        fontSize: '1.5rem',
    }
}

class Logo extends Component{

    render(){
        return(
            <div style={style.logo}>
                <b>Shop</b>
            </div>
        )
    }

}

export default Logo