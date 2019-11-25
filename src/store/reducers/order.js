import * as ACTION_TYPES from "../actions/actionTypes";
import { updateObject } from "../utility";
const initState = {
  orders: [],
  loading: false,
  purchase: false
};

const purchaseInit = (state, action) => {
  return updateObject(state, { purchase: false });
};

const purchaseStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const purchaseSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchase: true,
    orders: state.orders.concat(newOrder)
  });
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.PURCHASE_INIT:
      return purchaseInit(state, action);

    case ACTION_TYPES.PURCHASE_BURGER_START:
      return purchaseStart(state, action);

    case ACTION_TYPES.PURCHASE_BURGER_SUCCESS:
      return purchaseSuccess(state, action);

    case ACTION_TYPES.PURCHASE_BURGER_FAILED:
      return updateObject(state, { loading: false });

    case ACTION_TYPES.FETCH_ORDERS_START:
      return updateObject(state, { loading: true });

    case ACTION_TYPES.FETCH_ORDERS_SUCCESS:
      return updateObject(state, { orders: action.orders, loading: false });

    case ACTION_TYPES.FETCH_ORDERS_FAILED:
      return updateObject(state, { loading: false });

    default:
      return state;
  }
};

export default reducer;
