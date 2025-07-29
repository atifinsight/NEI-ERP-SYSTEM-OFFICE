import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Frontend/Components/Auth/Login"
import Signup from "./Frontend/Components/Auth/Signup"
import AdminDashboard from "./Frontend/Components/AdminDashboard/AdminDashboard"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
    </Router>
  )
}

export default App