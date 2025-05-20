import { use, useState } from "react";
import './App.css'

const App = () => {

  const [allRecord, setAllRecord] = useState(localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [])

  const [formInput, setformInput] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    usergender: "",
    courses: [],
    usercity: ""
  })

  let [formErrors, setFormErrors] = useState({
    username: "", useremail: "", userpassword: "", usergender: "", usercourse: [], usercity: ""
  })

  const changeInput = (e) => {
    const { name, value, type, checked } = e.target;

    if (type == "checkbox") {
      if (checked) {
        setformInput({
          ...formInput,
          courses: [...formInput.courses, value]
        })
      } else {
        setformInput({
          ...formInput,
          courses: [...formInput.courses.filter(val => val != value)]
        })
      }
    } else {
      setformInput(
        {
          ...formInput,
          [name]: value
        }
      )
    }
  }

  const formValidation = () => {
    let check = true;
    let errors = { username: "", useremail: "", userpassword: "", usergender: "", usercourse: [], usercity: "" }

    if (!formInput.username) {
      errors.username = "Name is required";
      check = false;
    }
    if (!formInput.useremail) {
      errors.useremail = "Email is required";
      check = false;
    }
    if (!formInput.userpassword) {
      errors.userpassword = "Password is required";
      check = false;
    }
    if (!formInput.usergender) {
      errors.usergender = "Gender is required";
      check = false;
    }
    if (!formInput.usercity) {
      errors.usercity = "City is required";
      check = false;
    }
    if (formInput.courses.length == 0) {
      errors.usercourse = "Course is required";
      check = false;
    }

    setFormErrors(errors);
    return check;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      console.log(formInput);
      alert("Form submitted");

      let oldRecord = [...allRecord, formInput];
      setAllRecord(oldRecord);
      localStorage.setItem('users', JSON.stringify(oldRecord));

      setformInput({
        username: "",
        useremail: "",
        userpassword: "",
        usergender: "",
        courses: [],
        usercity: ""
      })
    }
  }

  const deleteUser = (index) => {
    let deleteRecord = allRecord.filter((val, i) => i != index);
    setAllRecord(deleteRecord);
    localStorage.setItem('users', JSON.stringify(deleteRecord));
    alert("Record deleted");
  }

  return (
    <>
      <div className="form-wrapper">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name :</label>
            <input type="text" name="username" value={formInput.username} onChange={changeInput} placeholder="Enter your name" />
            {
              formErrors.username && (
                <span style={{ color: "red" }}>{formErrors.username}</span>
              )
            }
          </div>

          <div className="form-group">
            <label>Email :</label>
            <input type="text" name="useremail" value={formInput.useremail} onChange={changeInput}
              placeholder="Enter your email" />
            {
              formErrors.useremail && (
                <span style={{ color: "red" }}>{formErrors.useremail}</span>
              )
            }
          </div>

          <div className="form-group">
            <label>Password :</label>
            <input type="password" name="userpassword" value={formInput.userpassword} onChange={changeInput}
              placeholder="Enter your password" />
            {
              formErrors.userpassword && (
                <span style={{ color: "red" }}>{formErrors.userpassword}</span>
              )
            }
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
                {
                  formErrors.usergender && (
                    <span style={{ color: "red", marginLeft: "13px" }}>{formErrors.usergender}</span>
                  )
                }
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Courses :</label>
            <div className="radio-group">
              <label>
                <input type="checkbox" name="courses" value="nodejs" checked={formInput.courses.includes("nodejs")}
                  onChange={changeInput} /> Node js
              </label>
              <label>
                <input type="checkbox" name="courses" value="java" checked={formInput.courses.includes("java")}
                  onChange={changeInput} />Java
              </label>
              <label>
                <input type="checkbox" name="courses" value="php" checked={formInput.courses.includes("php")}
                  onChange={changeInput} />PHP
              </label>
              <label>
                <input type="checkbox" name="courses" value="python" checked={formInput.courses.includes("python")}
                  onChange={changeInput} />Python
              </label>
            </div>
            {
              formErrors.usercourse && (
                <span style={{ color: "red" }}>{formErrors.usercourse}</span>
              )
            }
          </div>

          <div className="form-group" style={{ display: "flex" }}>
            <label style={{ marginRight: "10px" }}>City :</label>
            <select name="usercity" value={formInput.usercity} onChange={changeInput}>
              <option value="">Select city</option>
              <option value="surat">Surat</option>
              <option value="ahemdabad">Ahemdabad</option>
              <option value="vadodara">Vadodara</option>
              <option value="rajkot">Rajkot</option>
              <option value="vapi">Vapi</option>
            </select>
            {
              formErrors.usercity && (
                <span style={{ color: "red", marginLeft: "13px" }}>{formErrors.usercity}</span>
              )
            }
          </div>

          <input type="submit" />
        </form>
      </div>

      <table align="center" border={1} cellPadding={5} className="table-container">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Courses</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allRecord.map((item, index) => {
              const { username, useremail, userpassword, usergender, courses, usercity } = item;
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{username}</td>
                  <td>{useremail}</td>
                  <td>{userpassword}</td>
                  <td>{usergender}</td>
                  <td>{courses.join(" , ")}</td>
                  <td>{usercity}</td>
                  <td>
                    <button onClick={() => deleteUser(index)} className="delete-btn">Delete</button>
                  </td>
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