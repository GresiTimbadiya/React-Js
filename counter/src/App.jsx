import { useState } from "react"
import Counter from "./assets/Counter"
import "bootstrap/dist/css/bootstrap.min.css";
import Todolist from "./Todolist";

function App() {

  let [cnt, setCnt] = useState(0);
  let [todo, setTodo] = useState([
    { id: 101, name: "Reading" },
    { id: 102, name: "Coding" },
    { id: 103, name: "Sleeping" },
    { id: 104, name: "Eating" }
  ]);

  const plus = () => {
    setCnt(cnt + 1)
  }
  const minus = () => {
    setCnt(cnt - 1)
  }
  const reset = () => {
    setCnt(0)
  }

  return (
    <>
      <Counter
        cnt={cnt}
        plus={plus}
        minus={minus}
        reset={reset}
        minusBtn={cnt <= 0}
      />

      <Todolist todo={todo} />
    </>
  )
}

export default App
