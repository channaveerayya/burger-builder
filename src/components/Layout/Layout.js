import React from "react";
import Aux from '../../hoc/Aux-Hoc'
import styles from "./layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from '../Navigation/Toolbar/Toolbar'
const layout = props => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={styles.Content}>{props.children}</main>
  </Aux>
);

export default layout;
