import { createContext, ReactNode, useEffect, useState } from 'react'
import { CoffeeCartData } from '../@types/models'
import { storeCoffeeList } from '../@types/storeCoffeeList'

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
  const [coffeeList, setCoffeeList] = useState<CoffeeCartData[]>(
    loadCartFromStorage(),
  )

  useEffect(() => {
    // const stateJSON =

    localStorage.setItem(
      '@cmp-coffeeshop:cart-state-1.0.0',
      JSON.stringify(coffeeList),
    )
  }, [coffeeList])

  const clearCart = () => {
    setCoffeeList([])
  }

  const addCoffeeToShopCart = (coffeeId: number, quantityToInsert: number) => {
    setCoffeeList((coffeeListState) => {
      const newItemIndex = storeCoffeeList.findIndex(
        (coffee) => coffee.id === coffeeId,
      )
      const newCoffeeToInsert: CoffeeCartData = {
        ...storeCoffeeList[newItemIndex],
        quantity: quantityToInsert,
      }

      if (newCoffeeToInsert) {
        const updatedCoffeeListWithNewItem: CoffeeCartData[] = [
          ...coffeeListState,
          newCoffeeToInsert,
        ]
        return updatedCoffeeListWithNewItem
      }
      return coffeeListState
    })
  }
  const removeCoffeeFromCart = (coffeeId: number) => {
    setCoffeeList((coffeeListState) => {
      const coffeeListWithoutRemovedItem = coffeeListState.filter(
        (coffee) => coffee.id !== coffeeId,
      )
      return coffeeListWithoutRemovedItem
    })
  }
  const increaseCoffeeQtyInCart = (coffeeId: number) => {
    setCoffeeList((coffeeListState) => {
      const isCoffeeInCart = coffeeListState.find(
        (coffee) => coffee.id === coffeeId,
      )

      if (isCoffeeInCart) {
        const updatedCoffeeList = coffeeListState.map((coffee) => {
          if (coffee.id === coffeeId) {
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

      return coffeeListState
    })
  }
  const decreaseCoffeeQtyInCart = (coffeeId: number) => {
    setCoffeeList((coffeeListState) => {
      const isCoffeeInCart = coffeeListState.find(
        (coffee) => coffee.id === coffeeId,
      )

      if (isCoffeeInCart) {
        const updatedCoffeeList = coffeeListState.map((coffee) => {
          if (coffee.id === coffeeId) {
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
      return coffeeListState
    })
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
