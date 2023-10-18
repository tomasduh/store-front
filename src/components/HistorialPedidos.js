import '../styles/Pedido.css'
const styles = {
    lista: {
        listStyle: 'none',
        fontSize: 18,
        justifyContent: 'space-between',
    }
};

function HistorialPedidos(props) {
    const { pedidos, cliente } = props;
    console.log(pedidos);

    return (
        <div>
            {cliente.admin === false ? 
            <div className="ctn-cards">
                <div className="card-container">
                    <div className="card-column-user">
                        <h2><b>Numero de Pedido</b></h2>
                    </div>
                    <div className="card-column-user">
                        <h2><b>Artículos</b></h2>
                    </div>
                    <div className="card-column-user">
                        <h2><b>Cantidad</b></h2>
                    </div>
                    <div className="card-column-user">
                        <h2><b>Total</b></h2>
                    </div>
                </div>
                {pedidos.map((pedido, index) => (
                    <div className="card-container" key={index}>
                        <div className="card-column-user">
                            <p>{index + 1}</p>
                        </div>
                        <div className="card-column-user">
                            <ul>
                                {pedido.pedido.map((articulo, subIndex) => (
                                    <li style={styles.lista} key={subIndex}>
                                        {articulo.producto.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-column-user">
                            <ul>
                                {pedido.pedido.map((articulo, subIndex) => (
                                    <li style={styles.lista} key={subIndex}>
                                        {articulo.cantidad}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-column-user">
                            <p>{pedido.total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}$</p>
                        </div>
                    </div>
                ))}
            </div>
            : 
            <div className="ctn-cards">
                <div className="card-container">
                    <div className="card-column">
                        <h2><b>Numero de Pedido</b></h2>
                    </div>
                    <div className="card-column">
                        <h2><b>Usuario</b></h2>
                    </div>
                    <div className="card-column">
                        <h2><b>Artículos</b></h2>
                    </div>
                    <div className="card-column">
                        <h2><b>Cantidad</b></h2>
                    </div>
                    <div className="card-column">
                        <h2><b>Total</b></h2>
                    </div>
                </div>
                {pedidos.map((pedido, index) => (
                    <div className="card-container" key={index}>
                        <div className="card-column">
                            <p>{index + 1}</p>
                        </div>
                        <div className="card-column">
                            <p>{pedido.cliente.nombre}</p>
                        </div>
                        <div className="card-column">
                            <ul>
                                {pedido.pedido.map((articulo, subIndex) => (
                                    <li style={styles.lista} key={subIndex}>
                                        {articulo.producto.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-column">
                            <ul>
                                {pedido.pedido.map((articulo, subIndex) => (
                                    <li style={styles.lista} key={subIndex}>
                                        {articulo.cantidad}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-column">
                            <p>{pedido.total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}$</p>
                        </div>
                    </div>
                ))}
            </div>
            }
        </div>
    );
}

export default HistorialPedidos;
