import { CoffeeCartData } from '../../@types/models'
import { ActionTypes } from './actions'

interface orderPriceState {
  itemsPriceSum: number
  deliveryPrice: number
  totalOrderPrice: number
}
interface orderPriceReducerActionProps {
  type: ActionTypes
  payload: {
    coffeeList: CoffeeCartData[]
  }
}

export function orderPriceReducer(
  state: orderPriceState,
  action: orderPriceReducerActionProps,
) {
  switch (action.type) {
    case ActionTypes.UPDATE_CART_SUM: {
      const newItemsPriceSum = action.payload.coffeeList.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      )
      const newDeliveryPrice = 5 + newItemsPriceSum * 0.1
      const newTotalOrderPrice = newItemsPriceSum + newDeliveryPrice
      const updatedCartState: orderPriceState = {
        itemsPriceSum: newItemsPriceSum,
        deliveryPrice: newDeliveryPrice,
        totalOrderPrice: newTotalOrderPrice,
      }
      return updatedCartState
    }
    default:
      return state
  }
}
