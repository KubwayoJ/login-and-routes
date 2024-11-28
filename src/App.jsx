import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



import Home from "./pages/Home"
import Login from "./components/Login"
import Notfound from "./components/Notfound"


const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </Router>
    

    </div>
 
  )
}

export default App