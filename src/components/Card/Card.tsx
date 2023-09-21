import { CSSProperties, LegacyRef, forwardRef } from "react";
import styles from "./Card.module.scss"
export interface CardProps {
  url: string ;
  tag: string;
  index?: number;
  extra?: {
    transform:string | undefined;
    transition: string | undefined;
  };
  faded?: boolean;
}

const Card = forwardRef(({url, tag, faded,  extra, ...props}: CardProps, ref) => {
  const cardStyle: CSSProperties  = {
        opacity: faded ? '0.2' : '1',
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: "100%",
        ...extra,
  }
 
  return (
    <figure className={styles.figure} ref={ref as LegacyRef<HTMLElement> | undefined} style={cardStyle}  {...props}>
        <figcaption>
            <p>{tag}</p>
        </figcaption> 
    </figure>
  )
})


export default Card