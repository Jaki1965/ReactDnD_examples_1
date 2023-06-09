import { useDrag} from "react-dnd";
import styles from './card.module.css' ;

export default function Card() {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "card",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div className={styles.card} ref={dragRef}>
      <img className={styles.image} src="http://s1.fotokto.ru/photo/full/34/346121.jpg"></img>
    </div>
  );
}