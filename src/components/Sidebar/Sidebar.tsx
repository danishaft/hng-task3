// import { Link } from "react-router-dom";
import NavItem from "../NavItem/NavItem"
import {signOut} from "firebase/auth"
import {auth} from "../../config/firebaseConfig"
import styles from "./Sidebar.module.scss"
import { GoHome } from "react-icons/go";
import { TbPhoto } from "react-icons/tb";
import { MdOutlineExplore } from "react-icons/md";
import { HiOutlineShare } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import { useSideBarContext } from "../../contexts/SideBarContext";
function Sidebar() {
    const _contextVal = useSideBarContext()
    const logOut = async() => {
        try{
            await signOut(auth)
        }catch (err){
            console.log("Error", err);
        }finally {
            console.log("logged out")
        }
    }
    if(_contextVal?.opened) {
        return (
            <aside className={styles.aside}>
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
                        <span className={styles.logout} onClick={logOut}><IoLogOutOutline/>Logout</span>
                    </ul>
                </div>
            </aside>
        )
    }else {
        return null;
    }
}

export default Sidebar