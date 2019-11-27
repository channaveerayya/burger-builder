import * as ACTION_TYPES from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building:false
};

const INGREDIENT_PRICE = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
};

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  };
  const updatedIngts = updateObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngts,
    totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedSt);
};

const setIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    totalPrice: 4,
    error: false,
    building: false
  });
};
const fetchIngredientFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_INGREDIENT:
      return addIngredient(state, action);

    case ACTION_TYPES.REMOVE_INGREDIENT:
      return removeIngredient(state, action);

    case ACTION_TYPES.SET_INGREDIENTS:
      return setIngredient(state, action);
    case ACTION_TYPES.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
