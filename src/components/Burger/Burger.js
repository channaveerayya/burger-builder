import React from "react";
import PropTypes from "prop-types";
import styles from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {};

export default Burger;
