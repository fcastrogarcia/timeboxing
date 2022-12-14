import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Week } from "../components";
import { useAtom } from "jotai";
import { currentWeekAtom, setNextWeekAtom, setPreviousWeekAtom } from "../atoms";

const Home: NextPage = () => {
  const [week] = useAtom(currentWeekAtom);
  const [, incrementWeek] = useAtom(setNextWeekAtom);
  const [, decrementWeek] = useAtom(setPreviousWeekAtom);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <button onClick={decrementWeek}>Atrás</button>
        <Week week={week} />
        <button onClick={incrementWeek}>Siguiente</button>
      </main>
    </div>
  );
};

export default Home;
