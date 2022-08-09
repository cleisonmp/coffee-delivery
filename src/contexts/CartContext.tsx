import { createContext, ReactNode, useState } from 'react'
import { CoffeeCartData } from '../@types/models'
import { storeCoffeeList } from '../@types/storeCoffeeList'

interface CartContextInfo {
  coffeeList: CoffeeCartData[]
  addCoffeeToShopCart: (coffeeId: number) => void
  decreaseCoffeeQtyInCart: (coffeeId: number) => void
  removeCoffeeFromCart: (coffeeId: number) => void
}
export const CartContext = createContext({} as CartContextInfo)

interface CartContextProviderProps {
  children: ReactNode
}
const FAKECARTLIST: CoffeeCartData[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    type: 'expresso',
    categories: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 2,
    inventoryAmount: 99,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    type: 'expresso_americano',
    categories: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 8.9,
    quantity: 4,
    inventoryAmount: 99,
  },
]
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState<CoffeeCartData[]>(FAKECARTLIST)

  const addCoffeeToShopCart = (coffeeId: number) => {
    // console.log('addCoffeeToShopCart -> ' + coffeeId)

    setCoffeeList((coffeeListState) => {
      const isCoffeeInCart = coffeeListState.find(
        (coffee) => coffee.id === coffeeId,
      )

      if (isCoffeeInCart) {
        const coffeeListWithNewItem = coffeeListState.map((coffee) => {
          if (coffee.id === coffeeId) {
            const updateCoffeeWithNewQuantity: CoffeeCartData = {
              ...coffee,
              quantity: coffee.quantity + 1,
            }
            // console.log('new coffee with quantity ')
            // console.log(updateCoffeeWithNewQuantity)
            return updateCoffeeWithNewQuantity
          }

          return coffee
        })
        return coffeeListWithNewItem
      }
      const newItemIndex = storeCoffeeList.findIndex(
        (coffee) => coffee.id === coffeeId,
      )
      const newCoffeeToInsert: CoffeeCartData = {
        ...storeCoffeeList[newItemIndex],
        quantity: 1,
      }
      // console.log('newCoffeeToInsert')
      // console.log(newCoffeeToInsert)

      if (newCoffeeToInsert) {
        const updatedCoffeeListWithNewItem: CoffeeCartData[] = [
          ...coffeeListState,
          newCoffeeToInsert,
        ]
        // console.log('updatedCoffeeListWithNewItem')
        // console.log(updatedCoffeeListWithNewItem)
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
  const decreaseCoffeeQtyInCart = (coffeeId: number) => {
    setCoffeeList((coffeeListState) => {
      const isCoffeeInCart = coffeeListState.find(
        (coffee) => coffee.id === coffeeId,
      )

      if (isCoffeeInCart) {
        const coffeeListWithNewItem = coffeeListState.map((coffee) => {
          if (coffee.id === coffeeId) {
            const updateCoffeeWithNewQuantity: CoffeeCartData = {
              ...coffee,
              quantity: coffee.quantity - 1,
            }
            // console.log('new coffee with quantity ')
            // console.log(updateCoffeeWithNewQuantity)
            return updateCoffeeWithNewQuantity
          }

          return coffee
        })
        return coffeeListWithNewItem
      }
      return coffeeListState
    })
  }
  return (
    <CartContext.Provider
      value={{
        coffeeList,
        addCoffeeToShopCart,
        decreaseCoffeeQtyInCart,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
