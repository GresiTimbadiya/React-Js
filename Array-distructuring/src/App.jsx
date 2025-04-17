

function App() {

  let obj = [
    {
      id: 1,
      name: "Riya",
      age: 20,
      address: {
        area:"Kothrud",
        city: "Pune",
        state: "Maharashtra",
      }
    },
    {
      id: 2,
      name: "Rohit",
      age: 21,
      address: {
        area:"Varachha",
        city: "Surat",
        state: "Gujarat",
      }
    }, {
      id: 3,
      name: "Ram",
      age: 27,
      address: {
        area:"Kota",
        city: "Jaipur",
        state: "Rajasthan",
      }
    }, {
      id: 4,
      name: "Shyam",
      age: 25,
      address: {
        area:"Noida",
        city: "Lucknow",
        state: "Uttar Pradesh",
      }
    }
  ];

  return (
    <>
      <div align="center">
        <h2>Object Distructuring</h2>
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {
              obj.map((val, index) => {
                return (
                  <tr>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                    <td>{val.address.area}, {val.address.city}, {val.address.state}</td>
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

export default App