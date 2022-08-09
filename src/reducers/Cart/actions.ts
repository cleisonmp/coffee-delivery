import { CoffeeCartData } from '../../@types/models'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  UPDATE_CART_SUM = 'UPDATE_CART_SUM',
}

export function updateCartSumAction(coffeeList: CoffeeCartData[]) {
  return {
    type: ActionTypes.UPDATE_CART_SUM,
    payload: {
      coffeeList,
    },
  }
}
