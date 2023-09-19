import styles from "./Card.module.scss"
interface CardProps {
  url: string;
  tag: string;
  id: string;
}
function Card(props: CardProps) {
  const {url, tag} = props
  return (
    <figure className={styles.card}>
        <div className={styles.image}>
            <img src={url} alt={tag} />
        </div>
        <figcaption>
            <p>{tag}</p>
        </figcaption>
    </figure>
  )
}

export default Card