import React from "react";
import PropTypes from "prop-types";
import styles from "./OrderSummary.module.css";
const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li className={styles[igKey]} key={igKey}>
        <span style={{ textTransform: "capitalize" }}>
          {igKey}
        </span>
        :{props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <div className={styles.OrderSummary__model}>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </div>
  );
};

OrderSummary.propTypes = {};

export default OrderSummary;
