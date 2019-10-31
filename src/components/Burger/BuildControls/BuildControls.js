import React from "react";
import PropTypes from "prop-types";
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <div className={styles.BuildControls}>
      {controls.map(ctrl => (
        <BuildControl key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  );
};

BuildControls.propTypes = {};

export default BuildControls;
