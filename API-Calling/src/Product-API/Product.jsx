
const Product = ({ productData }) => {
    console.log(productData);

    return (
        <>
            <div align="center" id="product">
                <h1>Product API</h1>

                <table className="table table-bordered">
                    <thead className="table-secondary">
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Tags</th>
                            <th>Stock</th>
                            <th>Image</th>
                            <th>Reviews</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            productData.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{val.id}</td>
                                        <td>{val.title}</td>
                                        <td>{val.category}</td>
                                        <td>{val.price}</td>
                                        <td>
                                            {
                                                val.tags.map((tag,i)=>{
                                                    return(
                                                        <li key={i}>{tag}</li>
                                                    )
                                                })
                                            }
                                        </td>
                                        <td>{val.stock}</td>
                                        <td>
                                            {
                                                val.images.map((img,id)=>{
                                                    return(
                                                        <img src={img} width={90} key={id} />
                                                    )
                                                })
                                            }
                                        </td>
                                        <td>
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>reviewerName</th>
                                                        <th>Comment</th>
                                                        <th>Rating</th>
                                                        <th>Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        val.reviews.map((r,i)=>{
                                                            return(
                                                                <tr key={i}>
                                                                    <td>{r.reviewerName}</td>
                                                                    <td>{r.comment}</td>
                                                                    <td>{r.rating}</td>
                                                                    <td>{r.date.slice(0,10)}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {/* <div className="container">
                    <div className="row">
                        {
                            productData.map((product, index) => {
                                return (

                                    <div className="col-md-3 mb-3 p-2" key={index}>
                                        <div className="card" >
                                            <div className="card-body p-0">
                                                <img src={product.thumbnail} alt="" width={200} />
                                                <h6 className="card-title">{product.title}</h6>
                                                <h5 className="card-text fs-4">Price :- {product.price}</h5>
                                                <h6 className="card-text">Category :- {product.category}</h6>
                                                <h6 className="card-text">Stock :- {product.stock}</h6>
                                                <h6 className="card-text">
                                                    <ul>Tag :
                                                        {
                                                            product.tags.map((tag, i) => {
                                                                return (
                                                                    <li key={i} style={{ listStyle: "none" }}>{tag}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </h6>
                                                <div className="d-flex justify-content-center mt-3">
                                                    <h6 className="card-text me-3">Weight :- {product.weight}</h6>
                                                    <h6 className="card-text">Rating :- {product.rating}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Product