import { CSSProperties } from "react";
import styles from "./Card.module.scss"
interface CardProps {
  url: string | undefined;
  tag: string;
  id: string;
  size: string | undefined ;
}
function Card (props: CardProps) {
  const {url, tag, size} = props
 
  const cardStyle: CSSProperties  = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
 let sizes;
 if(size === "wide"){
  sizes = styles.wide
 }else if(size === "big"){
  sizes = styles.big
 }
  

  return (
    <figure style={cardStyle}  className={sizes}>
        <figcaption>
            <p>{tag}</p>
        </figcaption> 
    </figure>
  )
}

export default Card