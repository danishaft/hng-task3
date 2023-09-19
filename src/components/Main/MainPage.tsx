import Sidebar from "../Sidebar/Sidebar"
import Gallery from "../../pages/Gallery/Gallery"
import styles from "./MainPage.module.scss" 
import SideBarBig from "../SideBarBig/SideBarBig"
function MainPage() {
  return (
    <section className={styles.main__page}>
        <Sidebar/>
        <SideBarBig/>
        <Gallery />
    </section>
  )
}

export default MainPage