import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { useState } from 'react'

interface CardProps {
  type: string
}

export function CoffeeCard({ type }: CardProps) {
  const [quantity, setQuantity] = useState(0)

  const handleAddQuantity = () => {
    setQuantity((state) => {
      return state + 1
    })
  }
  const handleRemoveQuantity = () => {
    setQuantity((state) => {
      return state - 1
    })
  }

  return (
    <div className="bg-base-card rounded-tr-[2.25rem] rounded-bl-[2.25rem] flex flex-col items-center px-5">
      <img src={'./images/' + type + '.png'} alt="ops" className="-mt-5" />
      <div className="flex mt-3 px-3 gap-1">
        <span className="bg-yellow-100 rounded-full px-2 h-5 text-yellow-900 text-xxs uppercase font-bold leading-tight flex items-center justify-center">
          especial
        </span>
        <span className="bg-yellow-100 rounded-full px-2  text-yellow-900 text-xxs uppercase font-bold leading-tight flex items-center justify-center">
          alcoólico
        </span>
        <span className="bg-yellow-100 rounded-full px-2  text-yellow-900 text-xxs uppercase font-bold leading-tight flex items-center justify-center">
          gelado
        </span>
      </div>
      <h1 className="mt-4 font-['Baloo_2'] font-bold text-xl text-base-subtitle">
        Café
      </h1>
      <span className="mt-2 text-sm text-base-label">
        Café expresso com calda de chocolate, pouco leite e espuma
      </span>
      <div className="flex mt-8 mb-5 w-full items-center justify-between">
        <div>
          <span className="text-sm leading-tight ">R$</span>
          <span className="mt-4 font-['Baloo_2'] font-bold text-2xl leading-tight">
            29,99
          </span>
        </div>
        <div className="flex gap-2 ">
          <div className="flex px-2 gap-2 bg-base-button rounded items-center">
            <button
              onClick={handleRemoveQuantity}
              className="text-xl text-purple-500 hover:text-purple-900 transition-colors"
            >
              <Minus size={14} weight="bold" />
            </button>
            <span className="text-base-title">{quantity}</span>
            <button
              onClick={handleAddQuantity}
              className="text-xl text-purple-500 hover:text-purple-900 transition-colors"
            >
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <button className="bg-purple-900 text-white rounded w-[2.375rem] h-[2.375rem] flex items-center justify-center px-2 hover:bg-purple-500 transition-colors">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  )
}
