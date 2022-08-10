import { useCallback, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Coffee } from '../../../../@types/models'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeInfo } from './CoffeeCardRender'

export function CoffeeCard({
  id,
  name,
  categories,
  description,
  type,
  price,
  inventoryAmount,
}: Coffee) {
  const {
    coffeeList,
    addCoffeeToShopCart,
    removeCoffeeFromCart,
    increaseCoffeeQtyInCart,
    decreaseCoffeeQtyInCart,
  } = useContext(CartContext)
  const navigateTo = useNavigate()

  const isCoffeeInCart = coffeeList.find((coffee) => coffee.id === id)
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
  }).format(price)

  const quantityInitialValue = isCoffeeInCart ? isCoffeeInCart.quantity : 0

  const [quantity, setQuantity] = useState(quantityInitialValue)

  const handleAddNewCoffeeToCart = useCallback(() => {
    if (quantity < inventoryAmount) {
      if (isCoffeeInCart) {
        navigateTo('/checkout')
        return
      }
      addCoffeeToShopCart(id, quantity)
      navigateTo('/checkout')
    }
  }, [
    quantity,
    inventoryAmount,
    isCoffeeInCart,
    addCoffeeToShopCart,
    id,
    navigateTo,
  ])
  const handleAddQuantity = useCallback(() => {
    if (quantity < inventoryAmount) {
      if (isCoffeeInCart) {
        increaseCoffeeQtyInCart(id)
      }

      setQuantity((state) => {
        return state + 1
      })
    }
  }, [id, increaseCoffeeQtyInCart, inventoryAmount, isCoffeeInCart, quantity])
  const handleRemoveQuantity = useCallback(() => {
    if (quantity > 0) {
      if (isCoffeeInCart) {
        if (quantity <= 1) {
          removeCoffeeFromCart(id)
        } else {
          decreaseCoffeeQtyInCart(id)
        }
      }
      setQuantity((state) => {
        return state - 1
      })
    }
  }, [
    decreaseCoffeeQtyInCart,
    id,
    isCoffeeInCart,
    quantity,
    removeCoffeeFromCart,
  ])

  return (
    <CoffeeInfo
      name={name}
      categories={categories}
      type={type}
      description={description}
      priceFormatted={priceFormatted}
      quantity={quantity}
      handleAddQuantity={handleAddQuantity}
      handleRemoveQuantity={handleRemoveQuantity}
      handleAddNewCoffeeToCart={handleAddNewCoffeeToCart}
    />
  )
}
