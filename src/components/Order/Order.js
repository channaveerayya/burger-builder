import React from 'react'
import styles from "./Order.module.css";
import ingredientStyles from "../Burger/OrderSummary/OrderSummary.module.css";
import Logo from "../../components/Logo/Logo"
const Order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
      ingredients.push({
        name: ingredientName,
        amount: props.ingredients[ingredientName]
      });
    }
    const ingredientOutput = ingredients.map(ig => {
        return <span className={styles.OrderSpan + ' ' + (ig.amount > 0 ? ingredientStyles[ig.name] :'')} key={ig.name}>
            {ig.name} ({ig.amount})
            </span>;
    })
    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price:
                <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
                <span style={{float:'right',height:'40px'}}><Logo /></span>
            </p>
        </div>
    )
}

export default Order
