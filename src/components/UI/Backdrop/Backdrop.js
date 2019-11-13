import React from "react";
import PropTypes from "prop-types";
import styles from "./Backdrop.module.css";
const Backdrop = props => {
    return props.show ? <div className={styles.Backdrop}
    onClick={props.clicked}></div> : null;
  // return (
  //     <div>

  //     </div>
  // )
};

Backdrop.propTypes = {};

export default Backdrop;
