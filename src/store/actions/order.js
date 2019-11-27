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

export const purchaseBurger = (orderDate, token) => {
         return dispatch => {
           dispatch(purchaseBurgerStart());
           axios
             .post("/orders.json?auth="+token, orderDate)
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

export const fetchOrdersSuccess = orders => {
  return {
    type: ACTION_TYPES.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: ACTION_TYPES.FETCH_ORDERS_FAILED,
    error: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: ACTION_TYPES.FETCH_ORDERS_START
  };
};

export const fetchOrders = (token,userId) => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    const queryParams = "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get("/orders.json"+ queryParams)
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};