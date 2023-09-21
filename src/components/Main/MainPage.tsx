import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import Gallery from "../../pages/Gallery/Gallery"
import styles from "./MainPage.module.scss" 
import SideBarBig from "../SideBarBig/SideBarBig"
import Login from "../../pages/Login/Login"
function MainPage() {
  return (
      <Router>
        <section className={styles.main__page}>
          <Sidebar/>
          <SideBarBig/>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Gallery />}/>
          </Routes>
        </section>
      </Router>
  )
}

export default MainPage