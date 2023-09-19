import styles from "./SideBarBig.module.scss"
import { GoHome } from "react-icons/go";
import { TbPhoto } from "react-icons/tb";
import { MdOutlineExplore } from "react-icons/md";
import { HiOutlineShare } from "react-icons/hi2";
import NavItem from "../NavItem/NavItem";
function SideBarBig() {
  return (
    <aside className={styles.aside__big}>
        <nav>
            <ul className={styles.sidebar__menu}>
                <NavItem icon={<GoHome/>} text='Home'/>
                <NavItem icon={<TbPhoto/>} text='Gallery'/>
                <NavItem icon={<MdOutlineExplore/>} text='Explore'/>
                <NavItem icon={<HiOutlineShare/>} text='Share'/>
            </ul>
        </nav>
        <div className={styles.library}>
            <ul className={styles.sidebar__library}>
                <p>Library</p>
                <NavItem icon={<GoHome/>} text='Favorite'/>
                <NavItem icon={<GoHome/>} text='Album'/>
                <NavItem icon={<GoHome/>} text='Archive'/>
                <NavItem icon={<GoHome/>} text='Bin'/>
            </ul>
        </div>
    </aside>
  )
}

export default SideBarBig