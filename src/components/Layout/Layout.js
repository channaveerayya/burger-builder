import React from "react";
import Aux from '../../hoc/Aux-Hoc'
const layout = props => (
  <Aux>
    <div>Toolbar,SideBar,backDrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
