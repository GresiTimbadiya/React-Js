import { useState } from 'react'
import './App.css'

function App() {

  let [task, setTask] = useState("");
  let [allRecord, setAllRecord] = useState([]);
  let [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const addtask = () => {

    if (id) {
      let up = allRecord.map((val) => {
        if (val.taskid === id) {
          val.taskname = task;
        }
        return val;
      })
      setAllRecord(up);
      setId("");
      setTask("");
    }
    else {
      let obj = {
        taskid: Math.floor(Math.random() * 1000),
        taskname: task,
        status: 'Active'
      }
      setAllRecord([...allRecord, obj])
      alert("Task added successfully....")
      setTask("");
    }
  }

  const deleteRecord = (id) => {
    let deleteTask = allRecord.filter(val => val.taskid !== id);
    setAllRecord(deleteTask);
  }

  const editRecord = (id) => {
    let editTask = allRecord.find(val => val.taskid === id);
    setTask(editTask.taskname);
    setId(id);
  }

  const changeStatus = (id) => {
    let upStatus = allRecord.map((val) => {
      if (val.taskid == id) {
        if (val.status == 'Active') {
          val.status = 'Deactive'
        }
        else {
          val.status = 'Active'
        }
      }
      return val;
    })

    setAllRecord(upStatus);
  }

  return (
    <>
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your Task...." value={task} onChange={(e) => setTask(e.target.value)} />
          {
            id ? <input type="submit" value="Edit" onClick={() => addtask()} />
              : <input type="submit" value="submit" onClick={() => addtask()} />
          }
        </form>
        <h2>View Task</h2>
        {
          allRecord.length === 0 ? <h3 align='center'>Record not found....</h3> : ""
        }

        <table align='center' border={1} cellPadding={7}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Task</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allRecord.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{val.taskid}</td>
                    <td>{val.taskname}</td>
                    <td>
                      {
                        val.status === 'Active' ? <span onClick={() => changeStatus(val.taskid)} style={{ color: "green", cursor: "pointer" }}>{val.status}</span>
                          : <span onClick={() => changeStatus(val.taskid)} style={{ color: "red" ,cursor: "pointer" }}>{val.status}</span>
                      }
                    </td>
                    <td>
                      <input type="button" value="Delete" style={{ marginRight: "10px" }} onClick={() => deleteRecord(val.taskid)} />
                      <input type="button" value="Edit" onClick={() => editRecord(val.taskid)} />
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
