import styles from "./Week.module.scss";
import Header from "./Header";

type Props = {
  week: Date[];
};

const Week = ({ week }: Props) => {
  return (
    <div className={styles.week}>
      <Header week={week} />
    </div>
  );
};

export default Week;
