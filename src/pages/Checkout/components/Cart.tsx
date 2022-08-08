import { cartList } from '../../../@types/storeCoffeeList'
import { CoffeeCardSideways } from './CoffeeCardSideways'

export function Cart() {
  return (
    <div className="bg-base-card p-10 rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
      {cartList.map((coffee) => {
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
      <button className="text-center w-full rounded text-white bg-yellow-500 mt-6 py-3 hover:bg-yellow-900 transition-colors">
        CONFIRMAR PEDIDO
      </button>
    </div>
  )
}
