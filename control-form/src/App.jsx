import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
  }

  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div align="center">
      <h1>Control Form</h1>

      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Name :- </td>
              <td>
                <input
                  type="text"
                  onChange={changeName}
                />
              </td>
            </tr>
            <tr>
              <td>Email :- </td>
              <td>
                <input
                  type="email"
                  onChange={changeEmail}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;