import styles from "./Week.module.scss";
import { getDay } from "../../utils";
import { getDate, isToday } from "date-fns";
import cx from "classnames";

type Props = {
  week: Date[];
};

const Header = ({ week }: Props) => {
  return (
    <div className={[styles["grid-7"], styles.header].join(" ")}>
      {week.map((date, index) => (
        <div className="flex-center flex-column" key={index.toString()}>
          <div style={{ paddingBottom: "8px", fontSize: "12px" }}>{getDay(date)}</div>
          <div
            className={cx({
              "flex-center": true,
              [styles["header-date"]]: true,
              [styles["header-date--current"]]: isToday(date),
            })}
          >
            {getDate(date)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
