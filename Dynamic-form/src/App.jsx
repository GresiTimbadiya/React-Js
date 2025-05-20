import './App.css'
import { useState } from "react";

function App() {
  const [input, setInput] = useState([{
    username: "", useremail: "", usersalary: ""
  }])

  const addForm = () => {
    let newField = { username: "", useremail: "", usersalary: "" };
    setInput([...input, newField]);
  }

  const changeInput = (i, e) => {
    let field = [...input];
    field[i][e.target.name] = e.target.value;
    setInput(field);
  }

  const removeForm = (index, e) => {
    e.preventDefault();
    const filterData = input.filter((val, i) => i !== index);
    setInput(filterData);
  }

  const handleSubmit = () => {
    let nullField = input.filter(val =>
      val.username == "" || val.useremail == "" || val.usersalary == ""
    );

    if (nullField == false) {
      alert("Form Submitted Successfully...");
      console.log(input);
      setInput([{ username: "", useremail: "", usersalary: "" }]);
    } else {
      alert("Please fill all the fields...");
    }
  }

  return (
    <div className="container">
      <h2 align="center">React - Add & Delete Table Rows Dynamically</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Salary</th>
            <th>
              <button className="add-btn" onClick={() => addForm()}>+</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {input.map((val, index) => (
            <tr key={index}>
              <td><input type="text" name="username" value={val.username} onChange={(e) => changeInput(index, e)} placeholder="Enter your name" /></td>
              <td><input type="email" name="useremail" value={val.useremail} onChange={(e) => changeInput(index, e)} placeholder="Enter email" /></td>
              <td><input type="text" name="usersalary" value={val.usersalary} onChange={(e) => changeInput(index, e)} placeholder="Enter salary" /></td>
              <td>
                {index !== 0 && (
                  <button className="remove-btn" onClick={(e) => removeForm(index, e)}>X</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>

  )
}

export default App