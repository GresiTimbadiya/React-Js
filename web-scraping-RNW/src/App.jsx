import { useState, useEffect } from "react";

function App() {
  const [datas, setDatas] = useState([]);

  const fetchData = () => {
    fetch(`https://mocki.io/v1/b8c08270-4f90-424a-bbd0-df6dd2466710`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDatas(data);
      })
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Image Table</h1>
      <table border="1" cellPadding="10" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((val, i) => (
            <tr key={i}>
              <td>
                <img
                  src={val.logo.img}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
