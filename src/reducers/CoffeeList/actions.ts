/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  INCREASE_COFFEE_QTY_IN_CART = 'INCREASE_COFFEE_QTY_IN_CART',
  DECREASE_COFFEE_QTY_IN_CART = 'DECREASE_COFFEE_QTY_IN_CART',
  CLEAR_CART = 'CLEAR_CART',
}

export function addNewCoffeeToShopCartAction(
  coffeeId: number,
  quantityToInsert: number,
) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      coffeeId,
      quantityToInsert,
    },
  }
}
export function removeCoffeeFromCartAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      coffeeId,
    },
  }
}
export function increaseCoffeeQtyInCartAction(coffeeId: number) {
  return {
    type: ActionTypes.INCREASE_COFFEE_QTY_IN_CART,
    payload: {
      coffeeId,
    },
  }
}
export function decreaseCoffeeQtyInCartAction(coffeeId: number) {
  return {
    type: ActionTypes.DECREASE_COFFEE_QTY_IN_CART,
    payload: {
      coffeeId,
    },
  }
}
export function removeAllItemsFromCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
    payload: {
      coffeeId: 0,
    },
  }
}
