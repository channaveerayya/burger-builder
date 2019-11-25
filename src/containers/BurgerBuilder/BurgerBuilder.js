import React, { Component } from "react";
import Aux from "../../hoc/AuxHoc/Aux-Hoc";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import { thisExpression } from "@babel/types";
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import {connect} from 'react-redux';
import * as ACTIONS from '../../store/actions/index';


class BurgerBuilder extends Component {
  state = {
    purchasing: false
  };
  componentDidMount() {
    this.props.onInitIngredients();
  }
  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0 ;
  };
  
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push("/checkout");
  }
  render() {
    console.log(this.props)
    const disableInfo = {
      ...this.props.propsIngredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    let orderSummery=null
    
    let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
    if (this.props.propsIngredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.propsIngredients} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disableInfo}
            purchaseable={this.updatePurchaseState(this.props.propsIngredients)}
            ordered={this.purchaseHandler}
            price={this.props.propsPrice}
          />
        </Aux>
      );
      orderSummery = (
        <OrderSummary
          purchaseCancelled={this.purchaseCancelHandler}
          price={this.props.propsPrice}
          purchaseContinued={this.purchaseContinueHandler}
          ingredients={this.props.propsIngredients}
        />
      );
    }
    
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummery}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
const mapStateToProps = state => ({
  propsIngredients: state.burgerBuilder.ingredients,
  propsPrice: state.burgerBuilder.totalPrice,
  error: state.burgerBuilder.error
});

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName =>
      dispatch(ACTIONS.addIngredient(ingName)),
    onIngredientRemoved: ingName =>
      dispatch(ACTIONS.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(ACTIONS.initIngredients()),
    onInitPurchase: () => dispatch(ACTIONS.purchaseInit())
  }
}
  export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
