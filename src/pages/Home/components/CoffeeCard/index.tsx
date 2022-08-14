import { useCallback, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Coffee } from '../../../../@types/models'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeInfo } from './CoffeeCardRender'
import { toast, ToastContentProps } from 'react-toastify'
import { Coffee as CoffeeIcon, ShoppingCart } from 'phosphor-react'

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

  const goToCart = useCallback(() => {
    navigateTo('/checkout')
  }, [navigateTo])

  const ToastMsgContent = useCallback(
    ({ closeToast, toastProps }: Partial<ToastContentProps>) => (
      <div className="flex flex-col gap-3 items-start">
        <button onClick={goToCart} className="flex items-center gap-1">
          <div className="bg-yellow-900 text-white rounded-full w-6 h-6 flex items-center justify-center px-1">
            <ShoppingCart size={22} weight="fill" />
          </div>
          Ir para o carrinho
        </button>
        <button onClick={closeToast} className="flex items-center gap-1">
          <div className="bg-purple-900 text-white rounded-full w-6 h-6 flex items-center justify-center px-1">
            <CoffeeIcon size={22} weight="fill" />
          </div>
          Continuar comprando
        </button>
      </div>
    ),
    [goToCart],
  )

  const handleAddNewCoffeeToCart = useCallback(() => {
    if (quantity < inventoryAmount) {
      if (isCoffeeInCart) {
        navigateTo('/checkout')
        return
      }
      addCoffeeToShopCart(id, quantity)
      toast(<ToastMsgContent />, {
        toastId: id,
      })
      //
    }
  }, [
    quantity,
    inventoryAmount,
    isCoffeeInCart,
    addCoffeeToShopCart,
    id,
    ToastMsgContent,
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
    <div>
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
    </div>
  )
}
