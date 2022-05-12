import styles from "../styles/Home.module.css";
import WellActivityData from "../public/WellActivityData.json";
import React, { Component } from "react";
import TextC from "./TextC";
export class Text extends Component {
  state = {
    ActivityData: WellActivityData,
  };

  render() {
    return (
      <div>
        <TextC propsData={this.state.ActivityData} />
      </div>
    );
  }
}

export default Text;

//  function Text() {
//    return (
//     <a className={styles.card}>
//     <h3>The Black Lady</h3>
//        <h3>Sabeltann</h3>
//        <h3>Abra Havn</h3>
//        <h3>Tann 1</h3>
//        {/* <Bar/>   */}
//      </a>
//    );
//  }

//  export default Text;
