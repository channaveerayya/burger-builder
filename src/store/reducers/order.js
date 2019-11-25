import * as ACTION_TYPES from "../actions/actionTypes";

const initState = {
  orders: [],
  loading: false,
  purchase: false
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.PURCHASE_INIT:
      return {
        ...state,
        purchase: false
      };
    case ACTION_TYPES.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      };
      return {
        ...state,
        loading: false,
        purchase: true,
        orders: state.orders.concat(newOrder)
      };
    case ACTION_TYPES.PURCHASE_BURGER_FAILED:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
