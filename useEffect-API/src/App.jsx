import { useState } from "react";
import { useEffect } from "react";


function App() {

  let [carts, setCarts] = useState([]);

  const getCarts = () => {
    fetch(`https://dummyjson.com/carts`)
      .then(res => res.json())
      .then((data) => {
        setCarts(data.carts);
      })
  }

  useEffect(() => {
    getCarts();
  }, []);

  return (
    <>

      <table align="center" border={1} cellpadding={10} cellSpacing={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Products</th>
            <th>Total</th>
            <th>TotalProducts</th>
            <th>TotalQuantity</th>
            <th>UserId</th>
          </tr>
        </thead>
        <tbody>
          {
            carts.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val.id}</td>
                  <td>
                    <table border={1} cellpadding={2} cellSpacing={1}>
                      <thead>  
                        <tr>
                          <th>Id</th>
                          <th>Thumbnail</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          val.products.map((cart, index) => {
                            return (
                              <tr key={index}>
                                <td>{cart.id}</td>
                                <th><img src={cart.thumbnail} width={60} /></th>
                                <th>{cart.title}</th>
                                <th>{cart.price}</th>
                                <th>{cart.quantity}</th>
                                <th>{cart.total}</th>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </td>
                  <td>{val.total}</td>
                  <td>{val.totalProducts}</td>
                  <td>{val.totalQuantity}</td>
                  <td>{val.userId}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </>
  )

}
export default App