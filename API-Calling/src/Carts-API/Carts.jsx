const Carts = ({ cartData }) => {

    return (
        <>
            <div align="center" id="cart">
                <h1>Carts API</h1>

                <table className="table table-bordered" >
                    <thead className="table-success">
                        <tr>
                            <th>Id</th>
                            <th>Products</th>
                            <th>Total</th>
                            <th>TotalProducts</th>
                            <th>TotalQuantity</th>
                            <th>userId</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            cartData.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{val.id}</td>
                                        <td>
                                            <table className="table table-bordered border-success">
                                                <thead className="table-danger">
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Image</th>
                                                        <th>Title</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="table-group-divider">
                                                    {
                                                        val.products.map((product, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <td>{product.id}</td>
                                                                    <td><img src={product.thumbnail} width={70} /></td>
                                                                    <td>{product.title}</td>
                                                                    <td>{product.price}</td>
                                                                    <td style={{textAlign:"center"}}>{product.quantity}</td>
                                                                    <td>{product.total}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </td>
                                        <td>{val.total}</td>
                                        <td style={{ textAlign: "center" }}>{val.totalProducts}</td>
                                        <td style={{ textAlign: "center" }}>{val.totalQuantity}</td>
                                        <td>{val.userId}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Carts