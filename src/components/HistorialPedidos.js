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
            <table className="border border border-slate-500 text-center">
                <thead>
                    <tr>
                        <th className="border border-slate-300 px-4 py-2 bg-green-600">#</th>
                        <th className="border border-slate-300 px-4 py-2 bg-green-600">Artículos</th>
                        <th className="border border-slate-300 px-4 py-2 bg-green-600">Cantidad</th>
                        <th className="border border-slate-300 px-4 py-2 bg-green-600">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map((pedido, index) => (
                        <tr className="border border-slate-300 bg-green-200" key={pedido._id}>
                            <td>{index + 1}</td>
                            <td>
                                <ul>
                                    {pedido.pedido.map((articulo, index) => (
                                        <li style={styles.lista} key={index}>
                                            {articulo.producto.name}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {pedido.pedido.map((articulo, index) => (
                                        <li style={styles.lista} key={index}>
                                            {articulo.cantidad}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td>{pedido.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            : 
            <table className="border border border-slate-500 text-center">
            <thead>
                <tr>
                    <th className="border border-slate-300 px-4 py-2 bg-green-600">#</th>
                    <th className="border border-slate-300 px-4 py-2 bg-green-600">Usuario</th>
                    <th className="border border-slate-300 px-4 py-2 bg-green-600">Artículos</th>
                    <th className="border border-slate-300 px-4 py-2 bg-green-600">Cantidad</th>
                    <th className="border border-slate-300 px-4 py-2 bg-green-600">Total</th>
                </tr>
            </thead>
            <tbody>
                {pedidos.map((pedido, index) => (
                    <tr className="border border-slate-300 bg-green-200" key={pedido._id}>
                        <td>{index + 1}</td>
                        <td>{pedido.cliente.nombre}</td>
                        <td>
                            <ul>
                                {pedido.pedido.map((articulo, index) => (
                                    <li style={styles.lista} key={index}>
                                        {articulo.producto.name}
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td>
                            <ul>
                                {pedido.pedido.map((articulo, index) => (
                                    <li style={styles.lista} key={index}>
                                        {articulo.cantidad}
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td>{pedido.total}</td>
                    </tr>
                ))}
            </tbody>
            </table>
            }
        </div>
    );
}

export default HistorialPedidos;
