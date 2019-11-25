import * as ACTION_TYPES from './actionTypes';
import axios from '../../axios-orders'

export const addIngredient = name => {
    return {
        type: ACTION_TYPES.ADD_INGREDIENT,
        ingredientName:name
    }
}

export const removeIngredient = name => {
  return {
    type: ACTION_TYPES.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredient = ingredients => {
  return {
    type: ACTION_TYPES.SET_INGREDIENTS,
    ingredients: ingredients
  };
};
export const fetchIngredientFailed = () => {
  return {
    type: ACTION_TYPES.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://burger-builder-1c978.firebaseio.com/ingredients.json")
      .then(res => {
        dispatch(setIngredient(res.data));
      })
      .catch(err => {
        dispatch(fetchIngredientFailed());
      });
  };
};