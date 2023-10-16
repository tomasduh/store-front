import { Component } from "react";

const style = {
    layout:{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '35px'
    },
    container:{
        width: '1200px'
    }
}

class Layout extends Component{
    render(){
        return(
            <div style={style.layout}>       
              <div style={style.container}>
                {this.props.children}
              </div>
            </div>
        )
    }


}

export default Layout