import Logo from "./Logo";
import ButtonPedido from "./ButtonPedido";

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

function NavbarPedidos(props) {
        const { handleTienda } = props
        return( 
            <nav style={style.navbar}>
                <Logo/>
                <ButtonPedido onClick={handleTienda}>
                    Tienda
                </ButtonPedido>

            </nav>
        )


}

export default NavbarPedidos