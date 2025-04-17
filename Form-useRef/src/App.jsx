import { useRef } from "react"

function App() {

  let name = useRef("");
  let age = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.current.value);
    console.log(age.current.value);

  }

  return (
    <>
      <div align="center">
        <h1>Uncontrol Form</h1>

        <form onSubmit={handleSubmit}>
          <table border={1}>
            <tbody>
              <tr>
                <td>Name :- </td>
                <td><input type="text" ref={name} /></td>
              </tr>
              <tr>
                <td>Email :- </td>
                <td><input type="email" ref={age} /></td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" /></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

    </>
  )
}

export default App