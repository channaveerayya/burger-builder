import React from "react";
import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const NavigationItems = props => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/" exact>Burger Builder</NavigationItem>
      { props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
      { !props.isAuthenticated ?
        <NavigationItem link="/auth">Authentication</NavigationItem>
        :
        <NavigationItem link="/logout">Logout</NavigationItem>
      }
    </ul>
  );
};

NavigationItems.propTypes = {};

export default NavigationItems;
