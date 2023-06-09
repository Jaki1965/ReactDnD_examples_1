import { useDrop} from "react-dnd";
import styles from './box.module.css' ;
import Card from "../card/card";

export default function Box({ card, moveCard }) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: () => moveCard(),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  return (
    <div
      className={styles.box}
      ref={dropRef}
      style={{ backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12" }}
    >
      {card ? <Card /> : "Контейнер"}
    </div>
  );
}