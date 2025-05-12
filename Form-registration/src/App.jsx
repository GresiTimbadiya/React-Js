import { useState } from "react";
import './App.css'

const App = () => {

  let [formInput, setformInput] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    usergender: ""
  })

  const changeInput = (e) => {
    const { name, value } = e.target;

    setformInput(
      {
        ...formInput,
        [name]: value
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);
    alert("Form submitted");

    setformInput({
      username: "",
      useremail: "",
      userpassword: "",
      usergender: ""
    })

  }

  return (
    <>
      <div className="form-wrapper">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name :</label>
            <input type="text" name="username" value={formInput.username} onChange={changeInput} placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Email :</label>
            <input type="email" name="useremail" value={formInput.useremail} onChange={changeInput}
              placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password :</label>
            <input type="password" name="userpassword" value={formInput.userpassword} onChange={changeInput}
              placeholder="Enter your password" />
          </div>

          <div className="form-group">
            <label>Gender :</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="usergender" value="male" checked={formInput.usergender === 'male'}
                  onChange={changeInput} /> Male
              </label>
              <label>
                <input type="radio" name="usergender" value="female" checked={formInput.usergender === 'female'}
                  onChange={changeInput} />Female
              </label>
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App