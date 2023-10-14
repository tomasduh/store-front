import Logo from "./Logo";
import Carro from "./Carro";

const style = {
    navbar:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '60px',
        justifyContent:'space-between',
        position: 'relative',
        padding: '0px 50px',
        boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)'
    }
}

function Navbar(props) {
        const { carro, esCarroVisible, mostrarCarro, hacerPedido, isAuthenticated, handleLogout, handleLogin, pedidos} = props
        return( 
            <nav style={style.navbar}>
                <Logo/>
                <Carro 
                    pedidos={pedidos}
                    handleLogout={handleLogout}
                    isAuthenticated = {isAuthenticated}
                    handleLogin={handleLogin}
                    carro={carro}
                    esCarroVisible = {esCarroVisible} 
                    mostrarCarro={mostrarCarro} 
                    hacerPedido={hacerPedido}
                />
            </nav>
        )


}

export default Navbar