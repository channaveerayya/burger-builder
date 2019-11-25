import * as ACTION_TYPES from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: ACTION_TYPES.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: ACTION_TYPES.PURCHASE_BURGER_FAILED,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: ACTION_TYPES.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = orderDate => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json", orderDate)
      .then(res => {
        dispatch(purchaseBurgerSuccess(res.data.name, orderDate));
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: ACTION_TYPES.PURCHASE_INIT
  };
};
