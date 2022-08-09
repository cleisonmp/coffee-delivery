import { CoffeeCartData } from '../../@types/models'
import { storeCoffeeList } from '../../@types/storeCoffeeList'
import { ActionTypes } from './actions'

interface CoffeeListReducerActionProps {
  type: ActionTypes
  payload: {
    coffeeId: number
    quantityToInsert?: number
  }
}

export function coffeeListReducer(
  state: CoffeeCartData[],
  action: CoffeeListReducerActionProps,
) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART: {
      const newItemIndex = storeCoffeeList.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )
      const newCoffeeToInsert: CoffeeCartData = {
        ...storeCoffeeList[newItemIndex],
        quantity: action.payload.quantityToInsert
          ? action.payload.quantityToInsert
          : 0,
      }

      if (newCoffeeToInsert) {
        const updatedCoffeeListWithNewItem: CoffeeCartData[] = [
          ...state,
          newCoffeeToInsert,
        ]
        return updatedCoffeeListWithNewItem
      }
      return state
    }
    case ActionTypes.REMOVE_COFFEE_FROM_CART: {
      const coffeeListWithoutRemovedItem = state.filter(
        (coffee) => coffee.id !== action.payload.coffeeId,
      )
      return coffeeListWithoutRemovedItem
    }
    case ActionTypes.INCREASE_COFFEE_QTY_IN_CART: {
      const isCoffeeInCart = state.find(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      if (isCoffeeInCart) {
        const updatedCoffeeList = state.map((coffee) => {
          if (coffee.id === action.payload.coffeeId) {
            const updatedCoffeeWithNewQuantity: CoffeeCartData = {
              ...coffee,
              quantity: coffee.quantity + 1,
            }
            return updatedCoffeeWithNewQuantity
          }

          return coffee
        })
        return updatedCoffeeList
      }

      return state
    }
    case ActionTypes.DECREASE_COFFEE_QTY_IN_CART: {
      const isCoffeeInCart = state.find(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      if (isCoffeeInCart) {
        const updatedCoffeeList = state.map((coffee) => {
          if (coffee.id === action.payload.coffeeId) {
            const updatedCoffeeWithNewQuantity: CoffeeCartData = {
              ...coffee,
              quantity: coffee.quantity - 1,
            }
            return updatedCoffeeWithNewQuantity
          }

          return coffee
        })
        return updatedCoffeeList
      }
      return state
    }
    case ActionTypes.CLEAR_CART: {
      return []
    }
    default:
      return state
  }
}
