import * as ACTION_TYPES from './actionTypes';

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