import { category, products } from "./Data.js";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const filterData = (category) => {
    if (category === "All") {
      setData(products);
    } else {
      const filter = products.filter((val) => val.category === category);
      setData(filter);
    }
  };

  return (
    <div align="center">
      <h1>Filter App</h1>
      <button onClick={() => filterData("All")}>All</button>
      {category.map((cat, index) => {
        const { id, name } = cat;
        return (
          <div key={id} style={{ display: "inline-block" }}>
            <button onClick={() => filterData(name)}>{name}</button>
          </div>
        );
      })}

      <br /><br />
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Id</th> 
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            products.map((val, i) => {
              const { id, name, category, price, stock, discount } = val;
              return (
                <tr key={i}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{category}</td>
                  <td>{price}</td>
                  <td>{stock}</td>
                  <td>{discount}</td>
                </tr>
              );
            })
          ) : (
            data.map((val, i) => {
              const { id, name, category, price, stock, discount } = val;
              return (
                <tr key={i}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{category}</td>
                  <td>{price}</td>
                  <td>{stock}</td>
                  <td>{discount}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;