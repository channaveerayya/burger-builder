import React from "react";
import PropTypes from "prop-types";
import styles from "./BuildControl.module.css";
const BuildControl = props => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button className={styles.Less}>Less</button>
      <button className={styles.More}>More</button>
    </div>
  );
};

BuildControl.propTypes = {};

export default BuildControl;
