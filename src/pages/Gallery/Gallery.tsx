import styles from "./Gallery.module.scss"
import Card from "../../components/Card/Card"
import jsonData from "../../../public/data.json"
import { v4 as uuidv4 } from "uuid"
import {getClass} from "../../utils/utils"
function Gallery() {
  const items = jsonData.map((item, index) => {
    item.id = uuidv4()
    return <Card key={item.id} id={item.id} url={item.url} tag={item.tag} size={getClass(index)}/>
  })
  return (
    <main className={styles.main}>
      <h1>This month</h1>
      <div className={styles.gallery}>
        {items}
      </div>
    </main>
  )
}

export default Gallery