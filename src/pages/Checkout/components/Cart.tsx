import { useContext, useEffect, useReducer } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { NewOrderFormProps } from '..'
import { CartContext } from '../../../contexts/CartContext'
import { updateCartSumAction } from '../../../reducers/OrderPrice/actions'
import { orderPriceReducer } from '../../../reducers/OrderPrice/reducer'
import { CoffeeCardSideways } from './CoffeeCardSideways'

interface CartProps {
  createNewOrderHandler: (data: NewOrderFormProps) => void
  formWithErrorHandler: (data: Object) => void
}
export function Cart({
  createNewOrderHandler,
  formWithErrorHandler,
}: CartProps) {
  const { handleSubmit } = useFormContext<NewOrderFormProps>()
  const { coffeeList } = useContext(CartContext)
  const [orderPriceState, dispatch] = useReducer(orderPriceReducer, {
    itemsPriceSum: 0,
    deliveryPrice: 0,
    totalOrderPrice: 0,
  })
  const { itemsPriceSum, deliveryPrice, totalOrderPrice } = orderPriceState

  const navigateTo = useNavigate()

  useEffect(() => {
    if (coffeeList.length <= 0) {
      navigateTo('/')
    }
  }, [coffeeList?.length, navigateTo])

  useEffect(() => {
    dispatch(updateCartSumAction(coffeeList))
  }, [coffeeList])

  const formatPriceValue = (priceToFormat: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      minimumFractionDigits: 2,
      currency: 'BRL',
    }).format(priceToFormat)
  }

  return (
    <div className="bg-base-card p-10 rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
      {coffeeList.map((coffee) => {
        return <CoffeeCardSideways key={coffee.id} coffeeData={coffee} />
      })}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-sm">Total de itens</span>
          <span>{formatPriceValue(itemsPriceSum)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Entrega</span>
          <span>{formatPriceValue(deliveryPrice)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold">Total</span>
          <span className="text-xl font-bold">
            {formatPriceValue(totalOrderPrice)}
          </span>
        </div>
      </div>
      <button
        type="submit"
        // onClick={handleCompleteOrder}
        onClick={handleSubmit(createNewOrderHandler, formWithErrorHandler)}
        className="text-center w-full rounded text-white bg-yellow-500 mt-6 py-3 hover:bg-yellow-900 transition-colors"
      >
        CONFIRMAR PEDIDO
      </button>
    </div>
  )
}
