import styles from "../styles/Home.module.css";
import BarGraph from "../components/BarGraph";
import WellActivityData from "../public/WellActivityData.json"

export default function Home() {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h1>
          <p>Daily Well Report</p>
          <p>11th-October</p>
        </h1>
      </div>

      <a className={styles.card}>
        <p>The Black Lady</p>
        <p>Sabeltann</p>
        <p>Abra Havn</p>
        <p>Tann 1</p>
      </a>

      <a className={styles.card}>
      <p>
        Running Casing
      </p>
      <p>
        KPI : 48 m/h
      </p>
      </a>

      <a className={styles.card}>
      <p>
        Tripping Speed
      </p>
      <p>
        KPI : 166 m/h
      </p>
      </a> 
      <a className={styles.card}>
      <p>
        Well History Section
      </p>
      </a> 

      <a className={styles.card}>
      <p>
        Daily Activity 11th Oct Section
      </p>
      </a> 

      <a className={styles.card}>
      <p>
        Well Depth Section
      </p>
      </a> 

       {/* <BarGraph />  */}
   </div>
  );
}
