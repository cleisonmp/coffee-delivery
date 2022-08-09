import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { CoffeeCartData } from '../@types/models'

import {
  addNewCoffeeToShopCartAction,
  decreaseCoffeeQtyInCartAction,
  increaseCoffeeQtyInCartAction,
  removeAllItemsFromCartAction,
  removeCoffeeFromCartAction,
} from '../reducers/CoffeeList/actions'
import { coffeeListReducer } from '../reducers/CoffeeList/reducer'

interface CartContextInfo {
  coffeeList: CoffeeCartData[]
  addCoffeeToShopCart: (coffeeId: number, quantityToInsert: number) => void
  removeCoffeeFromCart: (coffeeId: number) => void
  increaseCoffeeQtyInCart: (coffeeId: number) => void
  decreaseCoffeeQtyInCart: (coffeeId: number) => void
  clearCart: () => void
}
export const CartContext = createContext({} as CartContextInfo)

interface CartContextProviderProps {
  children: ReactNode
}

const loadCartFromStorage = () => {
  const storedStateAsJSON = localStorage.getItem(
    '@cmp-coffeeshop:cart-state-1.0.0',
  )

  if (storedStateAsJSON) {
    return JSON.parse(storedStateAsJSON)
  }
  return []
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeeList, dispatch] = useReducer(coffeeListReducer, [], () => {
    return loadCartFromStorage()
  })

  useEffect(() => {
    localStorage.setItem(
      '@cmp-coffeeshop:cart-state-1.0.0',
      JSON.stringify(coffeeList),
    )
  }, [coffeeList])

  const clearCart = () => {
    dispatch(removeAllItemsFromCartAction())
  }

  const addCoffeeToShopCart = (coffeeId: number, quantityToInsert: number) => {
    dispatch(addNewCoffeeToShopCartAction(coffeeId, quantityToInsert))
  }
  const removeCoffeeFromCart = (coffeeId: number) => {
    dispatch(removeCoffeeFromCartAction(coffeeId))
  }
  const increaseCoffeeQtyInCart = (coffeeId: number) => {
    dispatch(increaseCoffeeQtyInCartAction(coffeeId))
  }
  const decreaseCoffeeQtyInCart = (coffeeId: number) => {
    dispatch(decreaseCoffeeQtyInCartAction(coffeeId))
  }
  return (
    <CartContext.Provider
      value={{
        coffeeList,
        addCoffeeToShopCart,
        removeCoffeeFromCart,
        increaseCoffeeQtyInCart,
        decreaseCoffeeQtyInCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
