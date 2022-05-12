import styles from "../styles/Home.module.css";

const TextC = (props) => {
  const records = props.propsData.map((record, i) => {
    if (i === 0)
      return (
        <div>
          <h4> INSTALLATION: {record.INSTALLATION}</h4>
          <h4> OPERATOR: {record.OPERATOR}</h4>
          <h4>FIELD: {record.FIELD}</h4>
          <h4>WELL: {record.WELL}</h4>
        </div>
      );
  });

  return <div>{records}</div>;
};

export default TextC;
