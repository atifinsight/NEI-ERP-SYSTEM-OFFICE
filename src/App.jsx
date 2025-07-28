import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminDashboard from "./Frontend/Components/AdminDashboard"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
        </Routes>
    </Router>
  )
}

export default App