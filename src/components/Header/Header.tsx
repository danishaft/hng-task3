import styles from "./Header.module.scss"
import { MdAccountCircle } from "react-icons/md";
import Hamburger from 'hamburger-react'
import { useSideBarContext } from "../../contexts/SideBarContext";
function Header() {
    const {setOpened} = useSideBarContext()
  return (
    <header>
        <div className={styles.heading}>
            <div className={styles.logo__mb}>
                <Hamburger size={19} onToggle={toggled => {
                    if(toggled){
                        setOpened((prev: boolean) => !prev)
                    }else{
                        setOpened((prev: boolean) => !prev)
                    }
                }}/>
            </div>

            <div className={styles.logo__bg}>
                <h1>Premiere</h1>
            </div>
            <div className={styles.middle}>
                <form>
                    <input type='text' placeholder='Search'/>
                </form>
            </div>
            <div className={styles.profile__mb}>
                <MdAccountCircle/>
            </div>
            
        </div>
    </header>
  )
}

export default Header