import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import View from "./pages/View";
import Edit from "./pages/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  )
}

export default App