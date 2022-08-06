import { createContext, ReactNode, useState } from 'react'

interface CartContextInfo {
  state: number
  newFunction: () => void
}
export const CartContext = createContext({} as CartContextInfo)

interface CartContextProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [state, setState] = useState(0)
  const newFunction = () => {
    setState(1)
  }
  return (
    <CartContext.Provider value={{ state, newFunction }}>
      {children}
    </CartContext.Provider>
  )
}
