import React from "react";
import Aux from '../../hoc/Aux-Hoc'
import styles from "./layout.module.css";
const layout = props => (

  <Aux>
    <div>Toolbar,SideBar,backDrop</div>
    <main className={styles.Content}>{props.children}</main>
  </Aux>
);

export default layout;
