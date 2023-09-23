import FullPage from "./pages/FullPage/FullPage"
import Login from "./pages/Login/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Header from "./components/Header/Header"
// import MainPage from "./components/Main/MainPage"
import "./assets/styles/styles.scss"
function App() {

  return (
    <Router>
      <Routes >
        <Route path= "login" element={<Login/>} />
        <Route path="/" element={<FullPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
