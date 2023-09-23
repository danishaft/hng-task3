// import { BrowserRouter as  Routes, Route } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import Gallery from "../../pages/Gallery/Gallery"
import styles from "./MainPage.module.scss" 
import SideBarBig from "../SideBarBig/SideBarBig"
// import Login from "../../pages/Login/Login"
function MainPage() {
  return (
        <section className={styles.main__page}>  
          <Sidebar/>
          <SideBarBig/>
          <Gallery/>
          {/* <Routes> */}
            {/* <Route path="/login" element={<Login/>}/> */}
            {/* <Route path="/gallery" element={<Gallery />}/> */}
          {/* </Routes> */}
        </section>
  )
}

export default MainPage