import { Component } from "react";

const styles = {
    sesion: {
        position: 'relative',
        border: 'none',
        padding: '10px 25px',
        cursor: 'pointer',
        backgroundColor: 'green',
        borderRadius: '7px',
        color: 'white',
        fontSize: '15px',
        marginLeft: '10px',
    }
}


class Sesion extends Component{

    render(){
        const {isAuthenticated, handleLogout, handleLogin, pedidos} = this.props
        return(
            <div> 
                {isAuthenticated === true ? 
                <button onClick={pedidos} style={styles.sesion}>
                    Pedidos
                </button>: null
                }
                {isAuthenticated === false ? 
                <button onClick={handleLogout} style={styles.sesion}>
                    Log In
                </button>:
                <button onClick={handleLogin} style={styles.sesion}>
                    Log Out  
                </button>
                }
            </div>
        )
    }
}


export default Sesion