import styles from "../styles/Home.module.css";
import BarGraph from "../components/BarGraph";
import DepthGraph from "../Components_Depth/DepthGraph";
import LineGraph from "../Components_line/GraphLine";
import DailyReport from "../Components_DailyReport/DailyReport";
import RunCasing from "../Components_RunCasing/RunCasing";
import TripSpeed from "../Components_TripSpeed/TripSpeed";
import Text from "../Components_Text/Text";

export default function Home() {
  return (
    <div className={styles.grid}>
        <DailyReport />
        <div className={styles.card}>
        <Text />  
        </div>
        <RunCasing />
        <TripSpeed />
        <LineGraph />
        <BarGraph />  
        <DepthGraph />
   </div>
  );
}
