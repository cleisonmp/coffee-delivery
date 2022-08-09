export interface Coffee {
  id: number
  name: string
  categories: string[]
  type: string
  description: string
  price: number
  inventoryAmount: number
}
export interface CoffeeCartData extends Coffee {
  quantity: number
}
