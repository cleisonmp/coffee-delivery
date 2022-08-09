import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { cartList } from '../../../@types/storeCoffeeList'
import { CartContext } from '../../../contexts/CartContext'
import { CoffeeCardSideways } from './CoffeeCardSideways'

export function Cart() {
  const { coffeeList } = useContext(CartContext)
  const navigateTo = useNavigate()

  useEffect(() => {
    if (coffeeList.length <= 0) {
      navigateTo('/')
    }
  }, [coffeeList?.length, navigateTo])

  const handleCompleteOrder = () => {
    navigateTo('/orderfinished')
  }

  return (
    <div className="bg-base-card p-10 rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
      {coffeeList.map((coffee) => {
        return <CoffeeCardSideways key={coffee.id} coffeeData={coffee} />
      })}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-sm">Total de itens</span>
          <span>R$ 29,80</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Entrega</span>
          <span>R$ 5,00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold">Total</span>
          <span className="text-xl font-bold">R$ 5,00</span>
        </div>
      </div>
      <button
        onClick={handleCompleteOrder}
        className="text-center w-full rounded text-white bg-yellow-500 mt-6 py-3 hover:bg-yellow-900 transition-colors"
      >
        CONFIRMAR PEDIDO
      </button>
    </div>
  )
}
