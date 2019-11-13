import React from "react";
import PropTypes from "prop-types";
import styles from "./OrderSummary.module.css";
import Button from '../../UI/Button/Button'

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
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
    </div>
  );
};

OrderSummary.propTypes = {};

export default OrderSummary;
