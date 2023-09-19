import { ReactNode } from "react"
import styles from "./NavItem.module.scss"

interface NavItemProps {
    icon: ReactNode;
    text: string;
}
function NavItem(props: NavItemProps) {
    const {icon, text} = props
  return (
    <li className={styles.nav__item}>
        {icon}
        <p>{text}</p>
    </li>
  )
}

export default NavItem