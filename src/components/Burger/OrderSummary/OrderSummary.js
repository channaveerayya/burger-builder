import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

export class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("OrderSummary componentWillUpdate");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li className={styles[igKey]} key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <div className={styles.OrderSummary__model}>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </div>
    );
  }
}

OrderSummary.propTypes = {};

export default OrderSummary;
