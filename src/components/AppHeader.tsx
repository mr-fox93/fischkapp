import styles from "./AppHeader.module.scss";
import logo from "../assets/logo.svg";
import ButtonIcon from "../assets/Add new.svg";
import { addNewCard } from "../services/flashcardService";

interface AppHeaderProps {
  cardsAmount: number;
}

const AppHeader: React.FC<AppHeaderProps> = ({ cardsAmount }) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logo} alt="logo" />
        <p className={styles.name}>Cards: {cardsAmount}</p>
      </div>
      <button className={styles.btn} /*onClick={addNewCard}*/>
        <img src={ButtonIcon} alt="add" />
      </button>
    </header>
  );
};

export default AppHeader;
